const db = require("../models");
const Rating = db.rating;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
  let fields = ["coffee", "grinder", "grindsetting", "amtbeans", "brewingtime", "weightres", "taste", "time"];
  let hasContent = false;
  for ( let [key, value] of Object.entries(req.body)) {
    hasContent = value ? true && fields.includes(key) : hasContent;
  }
  if (!hasContent) {
    res.status(400).send({message: `Invalid arguments passed. Valid: ${fields} `})
  }
  const rating = {
    createdAt: req.body.time,
    coffee: req.body.coffee,
    grinder: req.body.grinder,
    grindsetting: req.body.grindsetting,
    amtbeans: req.body.amtbeans,
    brewingtime: req.body.brewingtime,
    weightres: req.body.weightres,
    taste: req.body.taste
  };
  Rating.create(rating).then(data => {res.send(data);}).catch(err => {
    res.status(500).send({message: "Error while creating the Rating."});
  });
};
exports.findAll = (req, res) => {

};
exports.findOne = (req, res) => {

};
exports.update = (req, res) => {

};
exports.delete = (req, res) => {

};
exports.deleteAll = (req, res) => {

};
exports.findAllPublished = (req, res) => {

};
