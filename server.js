const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(require('./routes.js'))

app.listen(443, () => {
  console.log('Server running on 3000 port')
})
