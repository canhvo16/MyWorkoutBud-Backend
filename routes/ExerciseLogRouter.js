const router = require('express').Router()
const controller = require('../controllers/ExerciseLogController')

router.post('/create', controller.createExerciseLog)
router.get('/workoutLog/:workoutLogId', controller.getWorkoutLogExerciseLogs)
router.delete('/destroy/:exerciseLogId', controller.destroyExerciseLog)
router.get('/:exerciseLogId', controller.getExerciseLogById)

module.exports = router
