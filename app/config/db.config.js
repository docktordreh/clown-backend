module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "123456",
  DB: "clown",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 300000,
    idle: 10000
  }
}
