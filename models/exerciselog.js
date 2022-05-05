'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class ExerciseLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ExerciseLog.init(
    {
      exerciseId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'exercises',
          key: 'id'
        }
      },
      setId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'sets',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'ExerciseLog',
      tableName: 'exerciseLogs'
    }
  )
  return ExerciseLog
}
