'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Exercise.hasMany(models.ExerciseLog, { foreignKey: 'exerciseId' })
      Exercise.belongsToMany(models.MuscleGroup, { through: 'MuscleExercises' })
    }
  }
  Exercise.init(
    {
      name: DataTypes.STRING,
      muscleGroupId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'muscleGroups',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Exercise',
      tableName: 'exercises'
    }
  )
  return Exercise
}
