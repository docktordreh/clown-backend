const db = require('../models')
const Rating = db.rating
const Op = db.sequelize.Op

exports.create = (req, res) => {
  const fields = ['coffee', 'grinder', 'grindsetting', 'amtbeans', 'brewingtime', 'weightres', 'taste', 'time']
  let hasContent = false
  for (const [key, value] of Object.entries(req.body)) {
    hasContent = value ? fields.includes(key) : hasContent
  }
  if (!hasContent) {
    res.status(400).send({ message: `Invalid arguments passed. Valid: ${fields}` })
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
  }
  Rating.create(rating).then(data => { res.send(data) }).catch(err => {
    console.log(err)
    res.status(500).send({ message: 'Error while creating the Rating.' })
  })
}
exports.findAll = (req, res) => {

}
exports.findOne = (req, res) => {
  const id = req.params.id
  Rating.findByPk(id)
        .then(data => {
          if (data) {
            res.send(data)
            return
          }
          res.status(404).send({ message: `Can't find rating with id ${id}` })
        })
        .catch( err => {
          console.log(err)
          res.status(500).send({ message: 'Error retrieving Rating' })
        })

}
exports.update = (req, res) => {

}
exports.delete = (req, res) => {

}
exports.deleteAll = (req, res) => {

}
exports.findAllPublished = (req, res) => {

}
