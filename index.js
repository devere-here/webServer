const http = require('http')
const fs = require('fs')
const path = require('path')
const argv = require('yargs').argv
const port = argv.port || 4000

const server = http.createServer((req, res) => {
  let statusCode
  let data

  fs.readFile(path.join(__dirname, req.url), (err, page) => {
    if (err) {
      statusCode = 404
      data = 'something went wrong please try again'
      return
    }

    statusCode = 200
    data = page

    res.writeHead(statusCode, {
      'Content-Type': 'text/html'
    })
    res.end(data)
  })
})

server.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})
