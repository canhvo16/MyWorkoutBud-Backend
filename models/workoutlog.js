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
      WorkoutLog.belongsTo(models.User, { foreignKey: 'userId' })
      WorkoutLog.hasMany(models.ExerciseLog, { foreignKey: 'workoutLogId' })
    }
  }
  WorkoutLog.init(
    {
      name: DataTypes.STRING,
      date: DataTypes.DATE,
      notes: DataTypes.STRING,
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
