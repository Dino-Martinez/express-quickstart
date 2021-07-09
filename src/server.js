const app = require('./app')

// Constants
const PORT = 8080

app.listen(process.env.PORT || PORT)
console.log('Server up and running!')
