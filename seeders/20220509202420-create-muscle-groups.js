'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('muscleGroups', [
      { name: 'Chest' },
      { name: 'Back' },
      { name: 'Legs' },
      { name: 'Core/Abs' },
      { name: 'Arms' },
      { name: 'Shoulders' },
      { name: 'Full Body' }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('muscleGroups', null, {})
  }
}
