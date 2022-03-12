require('dotenv').config()
const dbConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
}

const Sequelize = require('sequelize')

const db = new Sequelize(dbConfig.database, dbConfig.user, dbConfig.password, {
  dialect: 'postgres',
  logging: false,
  host: dbConfig.host,
  port: dbConfig.port
})

const connect = async () => {
  try {
    console.log('Connecting to db...');
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = {connect}

