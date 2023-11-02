const express = require('express')
const helloWorldRoute = require('./routes/hello-world.route')

const app = express()
const port = 3000

app.use('/helloWorld', helloWorldRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})