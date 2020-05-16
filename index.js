const app = require('./app')
const http = require('http')

let PORT = process.env.PORT

if (PORT === undefined) {
	PORT = 3003
}

const server = http.createServer(app)

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})