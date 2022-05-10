const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ExerciseRouter = require('./ExerciseRouter')
const MuscleGroupRouter = require('./MuscleGroupRouter')
const WorkoutLogRouter = require('./WorkoutLogRouter')
const ExerciseLogRouter = require('./ExerciseLogRouter')
const SetRouter = require('./SetRouter')

Router.use('/auth', AuthRouter)
Router.use('/exercise', ExerciseRouter)
Router.use('/muscleGroup', MuscleGroupRouter)
Router.use('/workoutLog', WorkoutLogRouter)
Router.use('/exerciseLog', ExerciseLogRouter)
Router.use('/set', SetRouter)

module.exports = Router
