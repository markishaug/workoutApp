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
            //An empty var for assigning an array to later    
            var muscleGroup;
            //assigning muscleGroup values to variable for easy access
            var muscleGroupRequest = req.body.muscleGroup
                //checks to see if the property of muscleGroupRequest is an array
            if (Array.isArray(muscleGroupRequest)) {
                muscleGroup = [];
                //parseses out each muscle group from the request and assigns it to the obj Object as a property with the value of true. Then pushes obj into muscleGroup
                for (i = 0; i < muscleGroupRequest.length; i++) {
                    obj = {};
                    obj[muscleGroupRequest[i]] = true;
                    muscleGroup.push(obj);
                }
                //if the property of muscleGroupRequest is not an array then it creates an Object and asseigns the muscleGroup as a property with a value of true.
            } else {
                muscleGroup = {};
                muscleGroup[muscleGroupRequest] = true;
            }
            //Sequalize for exercises where selected muscleGroup have the property values of true
            db.ExerciseList.findAll({
                where: {
                    $or: muscleGroup
                }
            }).then(function(dblifting) {
                //var for time in the request
                time = req.body.time;
                //blank array variable that will be returend to user once array is populated
                workoutArray = [];
                //else if statements to decided how many exercises to return to user
                if (time === 2) {
                    //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray
                    for (i = 1; i <= 1; i++) {
                        var compound;

                        function findCompound(exercise) {
                            if (exercise.compound === true) {
                                return true;
                            };
                        };
                        compound = dblifting.filter(findCompound);

                        function getRandomCompoundIndex() {
                            min = 0;
                            max = compound.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(compound[getRandomCompoundIndex()]);

                    }
                    //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                    for (i = 1; i <= 1; i++) {
                        var accessory;

                        function findAccessory(exercise) {
                            if (exercise.accessory === true) {
                                return true;
                            };
                        };

                        accessory = dblifting.filter(findAccessory);

                        function getRandomAccessoryIndex() {
                            min = 0;
                            max = accessory.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(accessory[getRandomAccessoryIndex()]);
                    }

                } else if (time === 4) {
                    //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray

                    for (i = 1; i <= 2; i++) {
                        var compound;

                        function findCompound(exercise) {
                            if (exercise.compound === true) {
                                return true;
                            };
                        };
                        compound = dblifting.filter(findCompound);

                        function getRandomCompoundIndex() {
                            min = 0;
                            max = compound.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(compound[getRandomCompoundIndex()]);

                    }
                    //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                    for (i = 1; i <= 2; i++) {
                        var accessory;

                        function findAccessory(exercise) {
                            if (exercise.accessory === true) {
                                return true;
                            };
                        };

                        accessory = dblifting.filter(findAccessory);

                        function getRandomAccessoryIndex() {
                            min = 0;
                            max = accessory.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(accessory[getRandomAccessoryIndex()]);
                    }
                } else if (time === 6) {
                    //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray

                    for (i = 1; i <= 3; i++) {
                        var compound;

                        function findCompound(exercise) {
                            if (exercise.compound === true) {
                                return true;
                            };
                        };
                        compound = dblifting.filter(findCompound);

                        function getRandomCompoundIndex() {
                            min = 0;
                            max = compound.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(compound[getRandomCompoundIndex()]);

                    }
                    //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                    for (i = 1; i <= 3; i++) {
                        var accessory;

                        function findAccessory(exercise) {
                            if (exercise.accessory === true) {
                                return true;
                            };
                        };

                        accessory = dblifting.filter(findAccessory);

                        function getRandomAccessoryIndex() {
                            min = 0;
                            max = accessory.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(accessory[getRandomAccessoryIndex()]);
                    }
                } else if (time === 8) {
                    //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray

                    for (i = 1; i <= 4; i++) {
                        var compound;

                        function findCompound(exercise) {
                            if (exercise.compound === true) {
                                return true;
                            };
                        };
                        compound = dblifting.filter(findCompound);

                        function getRandomCompoundIndex() {
                            min = 0;
                            max = compound.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(compound[getRandomCompoundIndex()]);

                    }
                    //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                    for (i = 1; i <= 4; i++) {
                        var accessory;

                        function findAccessory(exercise) {
                            if (exercise.accessory === true) {
                                return true;
                            };
                        };

                        accessory = dblifting.filter(findAccessory);

                        function getRandomAccessoryIndex() {
                            min = 0;
                            max = accessory.length;
                            return Math.floor(Math.random() * (max - min + 1)) + min;
                        };

                        workoutArray.push(accessory[getRandomAccessoryIndex()]);
                    }
                }
                //returns to user the requested workouts
                res.json(workoutArray);
            });
        })
        // POST route to run through the exercises and pick through based on user choices
    app.post("/api/process/bestbodyweightexercise", function(req, res) {
        var muscleGroup;
        var muscleGroupRequest = req.body.muscleGroup
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
        db.BodyWeight.findAll({
            where: {
                $or: muscleGroup
            }
        }).then(function(dblifting) {
            //var for time in the request
            time = req.body.time;
            //blank array variable that will be returend to user once array is populated
            workoutArray = [];
            //else if statements to decided how many exercises to return to user
            if (time === 2) {
                //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray
                for (i = 1; i <= 1; i++) {
                    var compound;

                    function findCompound(exercise) {
                        if (exercise.compound === true) {
                            return true;
                        };
                    };
                    compound = dblifting.filter(findCompound);

                    function getRandomCompoundIndex() {
                        min = 0;
                        max = compound.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(compound[getRandomCompoundIndex()]);

                }
                //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                for (i = 1; i <= 1; i++) {
                    var accessory;

                    function findAccessory(exercise) {
                        if (exercise.accessory === true) {
                            return true;
                        };
                    };

                    accessory = dblifting.filter(findAccessory);

                    function getRandomAccessoryIndex() {
                        min = 0;
                        max = accessory.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(accessory[getRandomAccessoryIndex()]);
                }

            } else if (time === 4) {
                //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray

                for (i = 1; i <= 2; i++) {
                    var compound;

                    function findCompound(exercise) {
                        if (exercise.compound === true) {
                            return true;
                        };
                    };
                    compound = dblifting.filter(findCompound);

                    function getRandomCompoundIndex() {
                        min = 0;
                        max = compound.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(compound[getRandomCompoundIndex()]);

                }
                //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                for (i = 1; i <= 2; i++) {
                    var accessory;

                    function findAccessory(exercise) {
                        if (exercise.accessory === true) {
                            return true;
                        };
                    };

                    accessory = dblifting.filter(findAccessory);

                    function getRandomAccessoryIndex() {
                        min = 0;
                        max = accessory.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(accessory[getRandomAccessoryIndex()]);
                }
            } else if (time === 6) {
                //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray

                for (i = 1; i <= 3; i++) {
                    var compound;

                    function findCompound(exercise) {
                        if (exercise.compound === true) {
                            return true;
                        };
                    };
                    compound = dblifting.filter(findCompound);

                    function getRandomCompoundIndex() {
                        min = 0;
                        max = compound.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(compound[getRandomCompoundIndex()]);

                }
                //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                for (i = 1; i <= 3; i++) {
                    var accessory;

                    function findAccessory(exercise) {
                        if (exercise.accessory === true) {
                            return true;
                        };
                    };

                    accessory = dblifting.filter(findAccessory);

                    function getRandomAccessoryIndex() {
                        min = 0;
                        max = accessory.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(accessory[getRandomAccessoryIndex()]);
                }
            } else if (time === 8) {
                //of the availbe exercises one compound exercise is selected at random and pushed into workoutArray

                for (i = 1; i <= 4; i++) {
                    var compound;

                    function findCompound(exercise) {
                        if (exercise.compound === true) {
                            return true;
                        };
                    };
                    compound = dblifting.filter(findCompound);

                    function getRandomCompoundIndex() {
                        min = 0;
                        max = compound.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(compound[getRandomCompoundIndex()]);

                }
                //the rest of the workoutArray is filled with accessory exercises based off of the total amount of exercises the user is requesting
                for (i = 1; i <= 4; i++) {
                    var accessory;

                    function findAccessory(exercise) {
                        if (exercise.accessory === true) {
                            return true;
                        };
                    };

                    accessory = dblifting.filter(findAccessory);

                    function getRandomAccessoryIndex() {
                        min = 0;
                        max = accessory.length;
                        return Math.floor(Math.random() * (max - min + 1)) + min;
                    };

                    workoutArray.push(accessory[getRandomAccessoryIndex()]);
                }
            }


            //returns to user the requested workouts
            res.json(workoutArray);
        });
    });
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
    //Get route for getting workout history
    app.get("/api/workoutHistory", function(req, res) {
        db.WorkoutHistory.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    // PUT route for updating workout history
    app.post("/api/workoutHistory", function(req, res) {
        db.WorkoutHistory.create({exercise: req.body}).then(function(dblifting) {
        res.json(dblifting);
        });
    });
};