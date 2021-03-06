'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MuscleGroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MuscleGroup.hasMany(models.Exercise, { foreignKey: 'muscleGroupId' })
    }
  }
  MuscleGroup.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'MuscleGroup',
      tableName: 'muscleGroups'
    }
  )
  return MuscleGroup
}
