'use strict'

const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'debug',
  exitOnError: false,
  timestamp: true,
  stringify: true,
  format: format.json(),
  transports: [
    new transports.Console(),
  ]
});


module.exports = logger;
