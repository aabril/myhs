
const express = require('express');

const loadEnvService = require('./services/loadEnv.service.js')
loadEnvService()

const mongooseService = require('./services/mongoose.service')
mongooseService()

const expressConfigService = require('./services/expressConfig.service')
const setRoutes = require('./routes')
const errorHandlingService = require('./services/errorHandling.service')

const app = express();
expressConfigService(app)
setRoutes(app)
errorHandlingService(app)

module.exports = app;