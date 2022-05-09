'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class GoalTracker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      GoalTracker.belongsTo(models.User, { foreignKey: 'userId' })
    }
  }
  GoalTracker.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      daysCompleted: DataTypes.INTEGER,
      completed: DataTypes.BOOLEAN,
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
      modelName: 'GoalTracker',
      tableName: 'goalTrackers'
    }
  )
  return GoalTracker
}
