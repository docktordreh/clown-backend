const express = require ("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({message: "Welcome to clown, a service by Valentin Lechner Enterprises."})
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})

const db = require("./app/models");
db.sequelize.sync();
