const router = require('express').Router()
const controller = require('../controllers/GoalTrackerController')

router.post('/create', controller.createGoalTracker)
router.get('/user/:userId', controller.getUserGoalTrackers)
router.delete('/destroy/:goalTrackerId', controller.destroyGoalTracker)
router.put('/addDaysCompleted/:goalTrackerId', controller.addDaysCompleted)
router.put('/minusDaysCompleted/:goalTrackerId', controller.minusDaysCompleted)

module.exports = router
