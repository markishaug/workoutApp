// Define variables by requireing index.js in models for sequalize
const db = require("../models");

// Routes
// ========================================================
module.exports = function(app) {
    //GET route for getting all of the exercises
    app.get("/api/exercises", function(req, res) {
        // findAll teh exercises and return them as json
        db.ExerciseList.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    // POST route to run through the exercises and pick through based on user choices
    app.post("/api/process/bestexercise", function(req, res) {
        console.log("------------------------------",req.body);
        db.ExerciseList.findAll({}).then(function(dblifting) {
            var choices = req.body;
           if (choices.time === "time1") {
            //    pick 2

           }
            res.json(dblifting);
        });
    })
    //Get route for getting all of bodyweight exercises
    app.get("/api/exercises/bodyweight", function(req, res) {
        db.BodyWeight.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    //Post route for adding a new exercise
    app.post("/api/exercises", function(req, res) {
        var exerciseList = {
            name: "rdl",
            legs: true,
            posterior: true,
            back: true,
            barbell: true,
            compound: true
        };
        console.log("============", req.body);
        db.ExerciseList.create(exerciseList).then(function(dblifting) {
            res.json(dblifting)
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
    //Post route for adding a new body weight exercise
    app.post("/api/exercises/bodyweight", function(req, res) {
        db.BodyWeight.create(req.body).then(function(dblifting) {
            res.json(dblifting)
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
    //Post route for adding a new body weight exercise
    app.post("/api/exercises/wod", function(req, res) {
        db.BodyWeight.create(req.body).then(function(dblifting) {
            res.json(dblifting)
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}