module.exports = (sequelize, Sequelize) => {
  const Model = sequelize.define("model", {
    time: {
      type: Sequelize.DATETIME
    },
    coffee: {
      type: Sequelize.STRING
    },
    grinder: {
      type: Sequelize.STRING
    },
    grindsetting: {
      type: Sequelize.STRING
    },
    amtbeans: {
      type: Sequelize.FLOAT
    },
    brewingtime: {
      type: Sequelize.FLOAT
    },
    weightres: {
      type: Sequelize.FLOAT
    },
    taste: {
      type: Sequelize.STRING
    },
  });
  return Model;
}
