const router = require('express').Router()
const controller = require('../controllers/ExerciseLogController')

router.post('/create', controller.createExerciseLog)
router.get('/workoutLog/:workoutLogId', controller.getWorkoutLogExerciseLogs)
router.delete('/destroy/:exerciseLogId', controller.destroyExerciseLog)

module.exports = router
