const express = require('express')
const path = require('path')
const app = express()

app.use('/', express.static(path.join(__dirname, './dist')))

app.listen('8080', () => {
  console.log(`server started at localhost: 8080`)
})
