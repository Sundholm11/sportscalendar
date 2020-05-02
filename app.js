const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const scraper = require('./scrapers')

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log("Hello world")
    res.send('Hello world')
})

app.get('/api/sports', async(req, res) => {
    console.log("Received sports request")
    const data = await scraper.scrapeSports('https://www.campussport.fi/fi/liikuntatarjonta/liikunta-aikataulu/')
    res.json(data)
})

app.get('/api/gyms', async(req, res) => {
    console.log("Received gyms request")
    const data = await scraper.scrapeGyms('https://campussport.fi/heatmap/')
    res.json(data)
})

console.log("Initializing morgan logger")
morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

module.exports = app