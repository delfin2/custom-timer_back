const router = require('express').Router()
const db = require('./db/db.js')

;(async () => {
  console.log('db.connect start')
  await db.connect()
  console.log('db.connect end')
})();

router.get('/', (req, res) => {
  res.send('Hello browser')
})

router.post('/', (req, res) => {
  res.send(req.body)
})

module.exports = router
