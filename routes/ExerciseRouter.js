const router = require('express').Router()
const controller = require('../controllers/ExerciseController')

router.get('/', controller.getAllExercises)
router.post('/create', controller.createExercise)
router.get('/muscleGroup/:muscleGroupId', controller.getExercisesByMuscle)
router.get('/:exerciseId', controller.getExerciseById)

module.exports = router
