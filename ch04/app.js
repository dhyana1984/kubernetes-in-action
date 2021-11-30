const http = require('http')
const os = require('os')

console.log('Kubia server starting...')
let count = 0

const handler = (request, response) => {
    console.log('Receive request from ' + request.connection.remoteAddress)
    if (count < 5) {
        response.writeHead(200)
        response.end('you\'ve hit ' + os.hostname() + '\n')
        count++
    }
    else {
        response.writeHead(500)
        response.end("I'm not well. Please restart me!");
    }
}

const www = http.createServer(handler)
www.listen(8080)