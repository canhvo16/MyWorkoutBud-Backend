'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WorkoutLog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  WorkoutLog.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      notes: DataTypes.STRING,
      exerciseLogId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'exerciseLogs',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'WorkoutLog',
      tableName: 'workoutLogs'
    }
  )
  return WorkoutLog
}
