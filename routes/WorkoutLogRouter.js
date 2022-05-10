const router = require('express').Router()
const controller = require('../controllers/WorkoutLogController')

router.get('/user/:userId', controller.getUserWorkoutLogs)
router.post('/create', controller.createWorkoutLog)
router.delete('/destroy/:workoutLogId', controller.destroyWorkoutLog)

module.exports = router
