'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Set extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Set.init(
    {
      metric: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      repetitions: DataTypes.INTEGER,
      duration: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Set',
      tableName: 'sets'
    }
  )
  return Set
}
