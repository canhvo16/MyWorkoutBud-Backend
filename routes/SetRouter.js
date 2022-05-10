const router = require('express').Router()
const controller = require('../controllers/SetController')

router.post('/create', controller.createSet)
router.get('/exerciseLog/:exerciseLogId', controller.getExerciseLogSets)
router.delete('/destroy/:setId', controller.destroySet)

module.exports = router
