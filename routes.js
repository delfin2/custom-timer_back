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

router.get('/timers', async (req, res) => {
  const timers = await model.Timer.findAll()
  res.send(timers)
})

router.post('/timers', async (req, res) => {
  await model.Timer.create(req.body)
  res.send(await model.Timer.findAll())
})

router.put('/timers/:id', async (req, res) => {
  const target = await model.Timer.findByPk(req.params.id)
  await target.update(req.body)
  res.send(target)
})

router.delete('/timers/:id', async (req, res) => {
  const target = await model.Timer.findByPk(req.params.id)
  await target.destroy()
  res.send(await model.Timer.findAll())
})

module.exports = router
