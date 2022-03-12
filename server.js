const express = require('express')

const app = express()

app.use(express.json())
app.use(require('./routes.js'))

app.listen(3000, () => {
  console.log('Server running on 3000 port')
})
