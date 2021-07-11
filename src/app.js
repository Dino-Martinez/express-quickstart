// Requirements
const express = require('express')
const helmet = require('helmet') // Security and HTTP header middleware
const cors = require('cors') // Handling CORS for accessible APIs
const morgan = require('morgan') // Request logging

// App
const app = express()

// Middleware
app.use(helmet())
app.use(cors())
app.use(morgan('common'))

// Routes
require('./routes/index.js')(app)

// Export App for server/testing
module.exports = app
