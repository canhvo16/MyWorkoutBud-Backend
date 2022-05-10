const router = require('express').Router()
const controller = require('../controllers/GoalTrackerController')

router.post('/create', controller.createGoalTracker)
router.get('/user/:userId', controller.getUserGoalTrackers)
router.delete('/destroy/:goalTrackerId', controller.destroyGoalTracker)

module.exports = router
