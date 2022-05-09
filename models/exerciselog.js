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
      ExerciseLog.belongsTo(models.WorkoutLog, { foreignKey: 'workoutLogId' })
      ExerciseLog.belongsTo(models.Exercise, { foreignKey: 'exerciseId' })
      ExerciseLog.hasMany(models.Set, { foreignKey: 'exerciseLogId' })
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
      workoutLogId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'workoutLogs',
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
