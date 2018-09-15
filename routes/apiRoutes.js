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
            console.log("body ========= ", req.body)
            var cleanBody = {
                time: req.body["time[]"],
                purpose: req.body["purpose[]"],
                muscleGroup: req.body["muscleGroup[]"],
                equipment: req.body["equipment[]"]
            }
            //assigning muscleGroup values to variable for easy access
            var muscleGroupRequest = cleanBody.muscleGroup
            console.log("request ========= ", muscleGroupRequest)
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
            console.log("muscle group ==============", muscleGroup)
            //Sequalize for exercises where selected muscleGroup have the property values of true
            db.ExerciseList.findAll({
                where: {
                    $or: muscleGroup
                }
            }).then(function(dblifting) {
                console.log("dblifting ========== ", dblifting)
                //var for time in the request
                time = cleanBody.time;
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
    //Get route for getting all of user profiles
    app.get("/api/userProfile", function(req, res) {
        db.UserProfile.findAll({
            include: [db.WorkoutHistory]
        }).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    //Get route for getting one user profile
    app.get("/api/userProfile/:id", function(req, res) {
        db.UserProfile.findOne({
            where: {
                id: req.params.id
            },
            include: [db.WorkoutHistory]
        }).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    //Post route for adding a new user
    app.post("/api/userProfile", function(req, res) {
        db.UserProfile.create(req.body).then(function(dblifting) {
            console.log(dblifting.id);
            res.json(dblifting.id)
        }).catch(function(err) {
            console.log(err);
            res.json(err);
        });
    });
    //Get route for getting workout history
    app.get("/api/workoutHistory", function(req, res) {
        console.log("user profile id =====", query);
        var query = {};
    if (req.query.userId) {
      query.UserProfileId = req.query.userId;
    }
    db.WorkoutHistory.findAll({
      where: query,
      include: [db.UserProfile]
    }).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    //Get route for getting one workout history
    app.get("/api/workoutHistory/:id", function(req, res) {
        db.WorkoutHistory.findOne({
            where: {
                id: req.params.id
            },
            include: [db.UserProfile]
        }).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    // POST route for adding workout history
    app.post("/api/workoutHistory", function(req, res) {
        db.WorkoutHistory.create(req.body).then(function(dblifting) {
        res.json(dblifting);
        });
    });
    //Get route for getting self assessment
    app.get("/api/selfassess", function(req, res) {
        db.SelfAssess.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    // POST route for adding self assesment
    app.post("/api/selfassess", function(req, res) {
        db.SelfAssess.create(req.body).then(function(dblifting) {
        res.json(dblifting);
        });
    });
    // POST route for estimating one rep max
    app.post("/api/estimateOneRep", function(req, res) {
        
        db.SelfAssess.create(req.body).then(function(dblifting) {
            // Multiply body weight by incremental number depending on the number of repetions
            console.log("===========", req.body)
            var maxReps = {
                pushups: req.body.pushups,
                pullups: req.body.pullups,
                squats: req.body.squats
            };
            var bodyweight = req.body.weight;
            var pushupBodyweight = req.body.weight * 0.64;
            var multiplier;
            var pushupMax;
            var pullupMax;
            var squatMax;
            function pushupMultiplier() {
                if (maxReps.pushups === 1) {
                    multiplier = 1;
                } else if 
                    (maxReps.pushups === 0) {
                    multiplier = 0.75;
                } else {
                    multiplier = ((maxReps.pushups - 1) * 0.04) + 1
                };
                pushupMax = pushupBodyweight * multiplier;
            };
            function pullupMultiplier() {
                if (maxReps.pullups === 1) {
                    multiplier = 1;
                } else if 
                    (maxReps.pullups === 0) {
                    multiplier = 0.75;
                } else {
                    multiplier = ((maxReps.pullups - 1) * 0.04) + 1
                };
                pullupMax = bodyweight * multiplier;
            };
            function squatMultiplier() {
                if (maxReps.squats === 1) {
                    multiplier = 1;
                } else if 
                    (maxReps.squats === 0) {
                    multiplier = 0.75;
                } else {
                    multiplier = ((maxReps.squats - 1) * 0.03) + 1
                };
                squatMax = bodyweight * multiplier;
            };
            pushupMultiplier();
            pullupMultiplier();
            squatMultiplier();

            var oneRepObj = {
                Bench: pushupMax,
                Pullup: pullupMax,
                Squat: squatMax
            };
            console.log("------------", oneRepObj);
            
        res.json(oneRepObj);
        });
        //Get route for getting one rep max
    app.get("/api/estimateOneRep", function(req, res) {
        db.SelfAssess.findAll({}).then(function(dblifting) {
            res.json(dblifting);
        });
    });
    });
};