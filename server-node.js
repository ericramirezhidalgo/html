const http = require('node:http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/login') {
    fs.readFile('login.html', (err, data) => {
      if (err) {
        res.writeHead(404, { 'Content-Type': 'text/plain' })
        res.end('File not found')
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.end(data)
      }
    })
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Route not valid')
  }
})
server.listen(3000, () => {
  console.log('server listening on port 3000')
})
