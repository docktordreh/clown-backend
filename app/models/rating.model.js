module.exports = (sequelize, Sequelize) => {
  const Rating = sequelize.define("rating", {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4
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
  return Rating;
}
