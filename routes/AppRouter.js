const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ExerciseRouter = require('./ExerciseRouter')
const MuscleGroupRouter = require('./MuscleGroupRouter')

Router.use('/auth', AuthRouter)
Router.use('/exercise', ExerciseRouter)
Router.use('/muscleGroup', MuscleGroupRouter)

module.exports = Router
