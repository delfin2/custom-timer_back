const router = require('express').Router()
const db = require('./db')

let model = {}

db.init()
  .then(result => {
    model.Timer = result.Timer
  })

router.get('/', (req, res) => {
  res.send('Hello browser')
})

router.post('/', (req, res) => {
  model.Timer.build(req.body).save()
  res.send(req.body)
})

module.exports = router
