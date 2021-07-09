const express = require('express')

// App
const app = express()
require('./routes/index.js')(app)

module.exports = app
