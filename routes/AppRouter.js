const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ExerciseRouter = require('./ExerciseRouter')

Router.use('/auth', AuthRouter)
Router.use('/exercise', ExerciseRouter)

module.exports = Router
