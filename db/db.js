// set cfg for DB
require('dotenv').config()
const dbConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
}
// Init db
const Sequelize = require('sequelize')
const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  dialect: 'postgres',
  // logging: false,
  host: dbConfig.host,
  port: dbConfig.port
})
// Regiseter models
const Model = require('./models')
const {Timer} = Model.init(db)
// Exports
module.exports = {
  connect: async () => {
    try {
      console.log('Sync model...');
      await Timer.sync({alter: true});
      console.log('Model synced.');
      console.log('Connecting to db...');
      await db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

