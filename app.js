const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')

const scraper = require('./scrapers')

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

/*
app.get('/api/sports', async(req, res) => {
    console.log("Received sports request")
    const data = await scraper.scrapeSports('https://www.campussport.fi/fi/liikuntatarjonta/liikunta-aikataulu/')
    res.json(data)
})
*/

app.get('/api/gyms', async(req, res) => {
    try {
        const data = await scraper.scrapeGyms('https://campussport.fi/heatmap/')
        res.status(200).json(data)
    } catch(error) {
        console.error(error)
        res.status(500).json({})
    }
})

const staticMiddleware = express.static('dist')
const allowCrossDomain = (req, res) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Methods', 'GET')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
}

app.use(staticMiddleware)
app.use(allowCrossDomain)

console.log("Initializing morgan logger")
morgan.token('body', (req) => {
    return JSON.stringify(req.body)
})
app.use(morgan(':method :url :status :res[content-length] :response-time ms :body'))

module.exports = app