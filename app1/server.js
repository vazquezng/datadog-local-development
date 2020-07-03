'use strict'
const DataDogTrace = require('dd-trace');
const logger = require('./src/logger')

DataDogTrace.init({
    hostname: 'datadog-agent',
    logInjection: true,
    service: 'app1',
    env: process.NODE_ENV,
    tags: {
        version:'0.1',
        versionAPI: '0.1',
    },
    logger
});

const app = require('./src/app')

app.listen(8080)
