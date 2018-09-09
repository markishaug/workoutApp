// Define variables by requireing index.js in models for sequalize
const db = require("../models");

// Routes
// ========================================================
module.exports = function(app) {
    //GET route for getting all of the exercises
    app.get("/api/exercises", function(req, res) {
        db.ExerciseList.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    // POST route to run through the exercises and pick through based on user choices
    app.post("/api/process/bestexercise", function(req, res) {
            var muscleGroup;
            var muscleGroupRequest = req.body.muscleGroup
            console.log("------------------------------", muscleGroupRequest);
            console.log(Array.isArray(muscleGroupRequest));
            if (Array.isArray(muscleGroupRequest)) {
                muscleGroup = [];
                for (i = 0; i < muscleGroupRequest.length; i++) {
                    obj = {};
                    obj[muscleGroupRequest[i]] = true;
                    muscleGroup.push(obj);
                }
            } else {
                muscleGroup = {};
                muscleGroup[muscleGroupRequest] = true;
            }
            console.log("----------------------------", muscleGroup);
            db.ExerciseList.findAll({
                where: {
                    $or: muscleGroup
                }
            }).then(function(dblifting) {
                res.json(dblifting);
            });
        })
        // POST route to run through the exercises and pick through based on user choices
    app.post("/api/process/bestbodyweightexercise", function(req, res) {
            var muscleGroup;
            var muscleGroupRequest = req.body.muscleGroup
            console.log("------------------------------", muscleGroupRequest);
            console.log(Array.isArray(muscleGroupRequest));
            if (Array.isArray(muscleGroupRequest)) {
                muscleGroup = [];
                for (i = 0; i < muscleGroupRequest.length; i++) {
                    obj = {};
                    obj[muscleGroupRequest[i]] = true;
                    muscleGroup.push(obj);
                }
            } else {
                muscleGroup = {};
                muscleGroup[muscleGroupRequest] = true;
            }
            console.log("----------------------------", muscleGroup);
            db.BodyWeight.findAll({
                where: {
                    $or: muscleGroup
                }
            }).then(function(dblifting) {
                res.json(dblifting);
            });
        })
        //Get route for getting all of bodyweight exercises
    app.get("/api/exercises/bodyweight", function(req, res) {
        db.BodyWeight.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    // Post route for adding a new exercise
    app.post("/api/exercises", function(req, res) {
        db.ExerciseList.create(req.body).then(function(dblifting) {
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
    //Post route for adding bulk new body weight exercises
    app.post("/api/bulk/exercises/bodyweight", function(req, res) {
        db.BodyWeight.bulkCreate(req.body).then(function(dblifting) {
            res.json(dblifting)
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
    //Post route for adding bulk new exercises
    app.post("/api/bulk/exercises", function(req, res) {
        db.ExerciseList.bulkCreate(req.body).then(function(dblifting) {
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
    //Post route for adding a new user
    app.post("/api/userProfile", function(req, res) {
        db.UserProfile.create(req.body).then(function(dblifting) {
            res.json(dblifting)
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
}