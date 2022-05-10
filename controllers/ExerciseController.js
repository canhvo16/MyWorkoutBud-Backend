const { Exercise } = require('../models')

const createExercise = async (req, res) => {
  try {
    const exercise = await Exercise.create(req.body)
    res.send(exercise)
  } catch (error) {
    throw error
  }
}

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.findAll()
    res.send(exercises)
  } catch (error) {
    throw error
  }
}

const getExercisesByMuscle = async (req, res) => {
  try {
    const exercises = await Exercise.findAll({
      where: { muscleGroupId: req.params.muscleGroupId }
    })
    res.send(exercises)
  } catch (error) {
    throw error
  }
}

module.exports = {
  createExercise,
  getAllExercises,
  getExercisesByMuscle
}
