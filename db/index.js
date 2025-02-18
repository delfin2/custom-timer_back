
const {sequelize, Timer} = require('./models.js')

module.exports = {
  init: async () => {
    try {
      console.log('Sync models...');
      await sequelize.sync({alter: true});
      console.log('Models synced.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
      return false
    }
    return {Timer}
  }
}
