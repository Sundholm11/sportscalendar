const express = require('express')
const helmet = require('helmet')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
const history = require('connect-history-api-fallback')

const scraper = require('./scrapers')

const app = express()

app.use(helmet())
app.use(cors())
app.use(bodyParser.json())

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

const staticMiddleware = express.static(path.join(__dirname, 'client/dist'))

const allowCrossDomain = (req, res) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
}

app.use(staticMiddleware)
app.use(history({ disableDotRule: true, verbose: true }))
app.use(staticMiddleware)
app.use(allowCrossDomain)

console.log("Initializing morgan logger")
morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

module.exports = app