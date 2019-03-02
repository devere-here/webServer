const http = require('http')
const fs = require('fs')
const port = 4000

const server = http.createServer((req, res) => {
  let statusCode
  let data
  
  fs.readFile('index.html', (err, page) => {
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

server.listen(4000, () => {
  console.log(`server is listening on port ${port}`)
})
