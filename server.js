const express = require('express')
// const MongoClient = require('mongodb').MongoClient

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello browser')
})

app.post('/', (req, res) => {``
  res.send(req.body)
})

app.listen(3000, () => {
  console.log('Server running on 3000 port')
})
