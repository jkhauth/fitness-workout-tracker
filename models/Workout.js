const mongoose = require("mongoose");

const WorkoutSchema = new mongoose.Schema({
  day: {
    type: Date
    },
   //=======EXERCISE ARRAY//PUSH NEW EXERCISE
   exercises: [{
      type: {
         type: String
      },
      name: {
         type: String
      },
      weight: {
         type: Number,
      },
      sets: {
         type: Number,
      },
      reps: {
         type: Number,
      },
      distance: {
         type: Number,
      },
      duration: {
         type: Number,
      }
   }]
});

//=========WORKOUT MODEL EXPORTED FOR CREATION
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
