// Requirements
const express = require('express')

// App
const app = express()

// Middleware

// Routes
require('./routes/index.js')(app)

// Export App for server/testing
module.exports = app
