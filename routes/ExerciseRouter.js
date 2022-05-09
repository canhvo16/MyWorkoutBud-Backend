const router = require('express').Router()
const controller = require('../controllers/ExerciseController')

router.get('/', controller.getAllExercises)
router.post('/create', controller.createExercise)
router.get('/:muscleGroupId', controller.getExercisesByMuscle)

module.exports = router
