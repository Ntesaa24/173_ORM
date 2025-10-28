require('dontev').config();

  const development = {
    "username": proses.env.DB_USER,
    "password": proses.env.DB_PASSWORD,
    "database": proses.env.DB_NAME,
    "host": proses.env.DB_HOST,
    "dialect": proses.env.DB_DIALECT 
  }
  const test = {
    "username": proses.env.DB_USER,
    "password": proses.env.DB_PASSWORD,
    "database": proses.env.DB_NAME,
    "host": proses.env.DB_HOST,
    "dialect": proses.env.DB_DIALECT 
  }
  const production = {
    "username": proses.env.DB_USER,
    "password": proses.env.DB_PASSWORD,
    "database": proses.env.DB_NAME,
    "host": proses.env.DB_HOST,
    "dialect": proses.env.DB_DIALECT 
  }

module.exports = (development, test, production)