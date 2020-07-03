const express = require('express')
const expressWinston = require('express-winston')
const logger = require('./logger')

const app = express()

app.use(expressWinston.logger({
    winstonInstance: logger
}))

app.get('/', (req, res) => {
    res.status(200).send(`hello app1 ${Math.random()}`)
})

app.use(expressWinston.errorLogger({
    winstonInstance: logger
  }))

module.exports = app