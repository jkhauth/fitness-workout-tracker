// API ROUTES
const mongoose = require("mongoose");
const Workout = require("../models/Workout");

module.exports = function (app) {

    //==========API GETS MOST CURRENT WORKOUT
    app.get("/api/workouts", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
    //=========API PROVIDES WORKOUTS FOR DATA RANGE
    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}, (err, data) => {
            if (err) throw err;
            res.json(data);
        });
    });
    //==========CREATES A NEW WORKOUT TO DB WITH CURRENT TIME
    app.post("/api/workouts", (res) => {
        Workout.create({day: Date.now()}, (err, data) => {
            if (err) throw err;
        });
    });
    //=========CREATES/UPDATES EXERCISES TO WORKOUT BASED ON ID
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        Workout.findOneAndUpdate(params.id, { $push: { exercises : body } }, (err, data) => {
            if (err) throw err;
            res.json(data);
        })
    });
    
}