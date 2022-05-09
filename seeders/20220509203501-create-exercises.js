'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('exercises', [
      {
        name: 'Barbell Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Barbell Incline Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Barbell Decline Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Dumbbell Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Dumbbell Incline Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Dumbbell Decline Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Machine Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Machine Incline Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Machine Decline Bench Press',
        muscleGroupId: 1
      },
      {
        name: 'Low Cable Flys',
        muscleGroupId: 1
      },
      {
        name: 'Mid Cable Flys',
        muscleGroupId: 1
      },
      {
        name: 'High Cable Flys',
        muscleGroupId: 1
      },
      {
        name: 'Dumbbell Flys',
        muscleGroupId: 1
      },
      {
        name: 'Incline Dumbbell Flys',
        muscleGroupId: 1
      },
      {
        name: 'Barbell Deadlift',
        muscleGroupId: 2
      },
      {
        name: 'Hyperextensions',
        muscleGroupId: 2
      },
      {
        name: 'Pull-Ups',
        muscleGroupId: 2
      },
      {
        name: 'Chin-Ups',
        muscleGroupId: 2
      },
      {
        name: 'Bent-Over Barbell Row',
        muscleGroupId: 2
      },
      {
        name: 'T-Bar Row',
        muscleGroupId: 2
      },
      {
        name: 'Dumbbell Row',
        muscleGroupId: 2
      },
      {
        name: 'Lat Pulldown',
        muscleGroupId: 2
      },
      {
        name: 'Cable Row',
        muscleGroupId: 2
      },
      {
        name: 'Machine Row',
        muscleGroupId: 2
      },
      {
        name: 'Shrugs',
        muscleGroupId: 2
      },
      {
        name: 'Barbell Squat',
        muscleGroupId: 3
      },
      {
        name: 'Barbell Back Squat',
        muscleGroupId: 3
      },
      {
        name: 'Barbell Front Squat',
        muscleGroupId: 3
      },
      {
        name: 'Goblet Squat',
        muscleGroupId: 3
      },
      {
        name: 'Hack Squat',
        muscleGroupId: 3
      },
      {
        name: 'Leg Press',
        muscleGroupId: 3
      },
      {
        name: 'Romanian Deadlift',
        muscleGroupId: 3
      },
      {
        name: 'Lunge',
        muscleGroupId: 3
      },
      {
        name: 'Leg Extension',
        muscleGroupId: 3
      },
      {
        name: 'Leg Curl',
        muscleGroupId: 3
      },
      {
        name: 'Bulgarian Split Squat',
        muscleGroupId: 3
      },
      {
        name: 'Hip Thrust',
        muscleGroupId: 3
      },
      {
        name: 'Crunches',
        muscleGroupId: 4
      },
      {
        name: 'Plank',
        muscleGroupId: 4
      },
      {
        name: 'Side Plank',
        muscleGroupId: 4
      },
      {
        name: 'Bicycle Crunch',
        muscleGroupId: 4
      },
      {
        name: 'Mountain Climber',
        muscleGroupId: 4
      },
      {
        name: 'Russian Twist',
        muscleGroupId: 4
      },
      {
        name: 'Sit-Ups',
        muscleGroupId: 4
      },
      {
        name: 'V-Ups',
        muscleGroupId: 4
      },
      {
        name: 'High Boat to Low Boat',
        muscleGroupId: 4
      },
      {
        name: 'Leg Raise',
        muscleGroupId: 4
      },
      {
        name: 'Ab Wheel',
        muscleGroupId: 4
      },
      {
        name: 'Preacher Curls',
        muscleGroupId: 5
      },
      {
        name: 'Dumbbell Curls',
        muscleGroupId: 5
      },
      {
        name: 'Hammer Curls',
        muscleGroupId: 5
      },
      {
        name: 'Concentration Curls',
        muscleGroupId: 5
      },
      {
        name: 'Incline Dumbbell Curls',
        muscleGroupId: 5
      },
      {
        name: 'Cable Curls',
        muscleGroupId: 5
      },
      {
        name: 'Tricep Pulldown',
        muscleGroupId: 5
      },
      {
        name: 'Skull Crushers',
        muscleGroupId: 5
      },
      {
        name: 'Tricep Dip',
        muscleGroupId: 5
      },
      {
        name: 'Dumbbell Tricep Extension',
        muscleGroupId: 5
      },
      {
        name: 'Barbell OverHead Press',
        muscleGroupId: 6
      },
      {
        name: 'Dumbbell Shoulder Press',
        muscleGroupId: 6
      },
      {
        name: 'Arnold Press',
        muscleGroupId: 6
      },
      {
        name: 'Landmine Press',
        muscleGroupId: 6
      },
      {
        name: 'Lateral Raises',
        muscleGroupId: 6
      },
      {
        name: 'Reverse Pec Deck Fly',
        muscleGroupId: 6
      },
      {
        name: 'Running',
        muscleGroupId: 7
      },
      {
        name: 'Swimming',
        muscleGroupId: 7
      },
      {
        name: 'Burpees',
        muscleGroupId: 7
      },
      {
        name: 'Volleyball',
        muscleGroupId: 7
      },
      {
        name: 'Football',
        muscleGroupId: 7
      },
      {
        name: 'Basketball',
        muscleGroupId: 7
      }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('exercises', null, {})
  }
}
