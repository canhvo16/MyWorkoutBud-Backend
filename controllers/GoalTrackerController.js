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

const addDaysCompleted = async (req, res) => {
  try {
    const goal = await GoalTracker.findByPk(req.params.goalTrackerId)
    let daysCompleted = goal.daysCompleted + 1
    await goal.update({ daysCompleted })
    res.send({ status: 'Success', msg: 'Goal Updated!' })
  } catch (error) {
    throw error
  }
}

const minusDaysCompleted = async (req, res) => {
  try {
    const goal = await GoalTracker.findByPk(req.params.goalTrackerId)
    let daysCompleted = goal.daysCompleted - 1
    await goal.update({ daysCompleted })
    res.send({ status: 'Success', msg: 'Goal Updated!' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createGoalTracker,
  getUserGoalTrackers,
  destroyGoalTracker,
  addDaysCompleted,
  minusDaysCompleted
}
