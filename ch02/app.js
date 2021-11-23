const http = require('http')
const os = require('os')

console.log('Kubia server starting...')

const handler = (request, response) => {
    console.log('Receive request from ' + request.connection.remoteAddress)
    response.writeHead(200)
    response.end('you\'ve hit ' + os.hostname() + '\n')
}

const www = http.createServer(handler)
www.listen(8080)