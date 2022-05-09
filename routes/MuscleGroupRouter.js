const router = require('express').Router()
const controller = require('../controllers/MuscleGroupController')

router.get('/', controller.getAllMuscleGroups)
router.post('/create', controller.createMuscleGroup)

module.exports = router
