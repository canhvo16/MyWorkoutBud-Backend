const { WorkoutLog } = require('../models')

const createWorkoutLog = async (req, res) => {
  try {
    const workoutLog = await WorkoutLog.create(req.body)
    res.send(workoutLog)
  } catch (error) {
    throw error
  }
}

const getUserWorkoutLogs = async (req, res) => {
  try {
    const workoutLogs = await WorkoutLog.findAll({
      where: { userId: req.params.userId }
    })
    res.send(workoutLogs)
  } catch (error) {
    throw error
  }
}

const destroyWorkoutLog = async (req, res) => {
  try {
    await WorkoutLog.destroy({ where: { id: req.params.workoutLogId } })
    res.send({ status: 'Success', msg: 'Workout Log Destroyed!' })
  } catch (error) {
    throw error
  }
}

const getWorkoutLogById = async (req, res) => {
  try {
    const workoutLog = await WorkoutLog.findByPk(req.params.workoutLogId)
    res.send(workoutLog)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createWorkoutLog,
  getUserWorkoutLogs,
  destroyWorkoutLog,
  getWorkoutLogById
}
