const Sequelize = require('sequelize')
const {sequelize} = require('./sequelize.js')

class Timer extends Sequelize.Model {}
Timer.init({
  name: {type: Sequelize.STRING},
  timeLeft: {type: Sequelize.INTEGER},
  started: {type: Sequelize.STRING},
  stopped: {type: Sequelize.STRING}
}, {
  sequelize,
  modelName: 'timers'
})

module.exports = {
  sequelize,
  Timer
}