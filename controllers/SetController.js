const { Set } = require('../models')

const createSet = async (req, res) => {
  try {
    const set = await Set.create(req.body)
    res.send(set)
  } catch (error) {
    throw error
  }
}

const getExerciseLogSets = async (req, res) => {
  try {
    const sets = await Set.findAll({
      where: { exerciseLogId: req.params.exerciseLogId }
    })
    res.send(sets)
  } catch (error) {
    throw error
  }
}

const destroySet = async (req, res) => {
  try {
    await Set.destroy({ where: { id: req.params.setId } })
    res.send({ status: 'Success', msg: 'Set Destroyed!' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  createSet,
  getExerciseLogSets,
  destroySet
}
