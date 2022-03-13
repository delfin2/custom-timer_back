const Sequelize = require('sequelize')

const timerModelAttr = {
  name: {type: Sequelize.STRING},
  timeLeft: {type: Sequelize.INTEGER},
  started: {type: Sequelize.STRING},
  stopped: {type: Sequelize.STRING}
}

module.exports = {
  init: (sequelize) => {
    class Timer extends Sequelize.Model {}
    Timer.init(timerModelAttr, {
      sequelize,
      modelName: 'timers'
    })
    return {Timer}
  }
}