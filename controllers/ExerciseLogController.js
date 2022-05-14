const { ExerciseLog } = require('../models')

const createExerciseLog = async (req, res) => {
  try {
    const exerciseLog = await ExerciseLog.create(req.body)
    res.send(exerciseLog)
  } catch (error) {
    throw error
  }
}

const getWorkoutLogExerciseLogs = async (req, res) => {
  try {
    const exerciseLogs = await ExerciseLog.findAll({
      where: { workoutLogId: req.params.workoutLogId }
    })
    res.send(exerciseLogs)
  } catch (error) {
    throw error
  }
}

const destroyExerciseLog = async (req, res) => {
  try {
    await ExerciseLog.destroy({ where: { id: req.params.exerciseLogId } })
    res.send({ status: 'Success', msg: 'Exercise Log Destroyed!' })
  } catch (error) {
    throw error
  }
}

const getExerciseLogById = async (req, res) => {
  try {
    const exerciseLog = await ExerciseLog.findByPk(req.params.exerciseLogId)
    res.send(exerciseLog)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createExerciseLog,
  getWorkoutLogExerciseLogs,
  destroyExerciseLog,
  getExerciseLogById
}
