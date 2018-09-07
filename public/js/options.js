$(document).ready(function() {
var options = ("#options");
$(options).on("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
// Wont submit the post if we are missing time, purpose, mg, or equipment. Will set a none option for equipment




// todayOptions();
// Create constructor for options table in database
var workoutOptions = {
    time: $("input[type=checkbox][name=time]:checked").val(),
    purpose: $("input[type=checkbox][name=purpose]:checked").val(),
    muscleGroup: $("input[type=checkbox][name=mg]:checked").val(),
    equipment: $("input[type=checkbox][name=equipment]:checked").val()
};

if (!workoutOptions.time || !workoutOptions.purpose || !workoutOptions.muscleGroup || !workoutOptions.equipment) {
    return;
  }
console.log(workoutOptions);
console.log(workoutOptions.time);
// Post choices to wod api
// function todayOptions() {
//     $.post("/api/wod", workoutOptions)
//     .then(timeOption);
// };

timeOption();

// Get values and run functions based on chosen values

// Pick workout based on values
function timeOption() {
// Time value decides how many exercise are chosen
var exerciseArr = [];
    $.get("/api/exercises", function(data) {
        for(var i = 0; i < data.length; i++) {
            var exerciseCount = data[i];
        if (workoutOptions.time === "time1") {
            // pick 2 
        }
        exerciseArr.push(exerciseCount);
        };
    });

    purposeOption();

};
// Purpose decides sets, reps, weight
function purposeOption() {

}

// Muscle group runs through exercises and picks those that are true based on values chosen

// Equipment runs thorugh exercises and picks those where eq value equals true

// Function that gets the entire workout and renders it to workout page
function wod() {

};























};
});