require('dotenv').config()

module.exports = {
  "development": {
    "username": process.env.MYSQL_DEV_USER ? process.env.MYSQL_DEV_USER : 'root',
    "password": process.env.MYSQL_DEV_PASSWORD ? process.env.MYSQL_DEV_PASSWORD : '123456',
    "database": process.env.MYSQL_DEV_DB_NAME ? process.env.MYSQL_DEV_DB_NAME : 'clown',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.MYSQL_TEST_USER ? process.env.MYSQL_TEST_USER : 'root',
    "password": process.env.MYSQL_TEST_PASSWORD ? process.env.MYSQL_TEST_PASSWORD : '123456',
    "database": process.env.MYSQL_TEST_DB_NAME ? process.env.MYSQL_TEST_DB_NAME : 'clown',
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.MYSQL_PROD_USER ? process.env.MYSQL_PROD_USER : 'root',
    "password": process.env.MYSQL_PROD_PASSWORD ? process.env.MYSQL_PROD_PASSWORD : '123456',
    "database": process.env.MYSQL_PROD_DB_NAME ? process.env.MYSQL_PROD_DB_NAME : 'clown',
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
