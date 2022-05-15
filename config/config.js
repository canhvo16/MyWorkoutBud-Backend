require('dotenv').config()
module.exports = {
  development: {
    database: 'myWorkoutBud_development',
    dialect: 'postgres'
  },
  test: {
    database: 'myWorkoutBud_test',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    database: 'myWorkoutBud_production',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}
