const { GoalTracker } = require('../models')

const createGoalTracker = async (req, res) => {
  try {
    const goalTracker = await GoalTracker.create(req.body)
    res.send(goalTracker)
  } catch (error) {
    throw error
  }
}

const getUserGoalTrackers = async (req, res) => {
  try {
    const goalTrackers = await GoalTracker.findAll({
      where: { userId: req.params.userId }
    })
    res.send(goalTrackers)
  } catch (error) {
    throw error
  }
}

const destroyGoalTracker = async (req, res) => {
  try {
    await GoalTracker.destroy({ where: { id: req.params.goalTrackerId } })
    res.send({ status: 'Success', msg: 'Goal Tracker Destroyed!' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createGoalTracker,
  getUserGoalTrackers,
  destroyGoalTracker
}
