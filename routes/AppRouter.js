const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ExerciseRouter = require('./ExerciseRouter')
const MuscleGroupRouter = require('./MuscleGroupRouter')
const WorkoutLogController = require('./WorkoutLogRouter')

Router.use('/auth', AuthRouter)
Router.use('/exercise', ExerciseRouter)
Router.use('/muscleGroup', MuscleGroupRouter)
Router.use('/workoutLog', WorkoutLogController)

module.exports = Router
