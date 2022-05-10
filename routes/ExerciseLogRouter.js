const router = require('express').Router()
const controller = require('../controllers/ExerciseLogController')

router.post('/create', controller.createExerciseLog)
router.get('/user/:workoutLogId', controller.getUserExerciseLogs)
router.delete('/destroy/:exerciseLogId', controller.destroyExerciseLog)

module.exports = router
