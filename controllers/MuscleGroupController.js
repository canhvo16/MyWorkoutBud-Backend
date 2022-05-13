const { MuscleGroup } = require('../models')

const createMuscleGroup = async (req, res) => {
  try {
    const muscleGroup = await MuscleGroup.create(req.body)
    res.send(muscleGroup)
  } catch (error) {
    throw error
  }
}

const getAllMuscleGroups = async (req, res) => {
  try {
    const muscleGroups = await MuscleGroup.findAll()
    res.send(muscleGroups)
  } catch (error) {
    throw error
  }
}

const getMuscleGroupById = async (req, res) => {
  try {
    const muscleGroup = await MuscleGroup.findByPk(req.params.muscleGroupId)
    res.send(muscleGroup)
  } catch (error) {
    throw error
  }
}

module.exports = {
  getAllMuscleGroups,
  createMuscleGroup,
  getMuscleGroupById
}
