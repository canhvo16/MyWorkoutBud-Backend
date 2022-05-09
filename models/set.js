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
      Set.belongsTo(models.ExerciseLog, { foreignKey: 'exerciseLogId' })
    }
  }
  Set.init(
    {
      metric: DataTypes.STRING,
      weight: DataTypes.INTEGER,
      repetitions: DataTypes.INTEGER,
      duration: DataTypes.INTEGER,
      exerciseLogId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'exerciseLogs',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Set',
      tableName: 'sets'
    }
  )
  return Set
}
