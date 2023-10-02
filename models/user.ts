const { Sequelize, Op, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

export const User = sequelize.define(
  'User',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {}
);

(async () => {
  await sequelize.sync({ force: true });
  // Code here
})();
