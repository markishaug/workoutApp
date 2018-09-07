$(document).ready(function() {
var options = ("#options");
$(options).on("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();
// Wont submit the post if we are missing time, purpose, mg, or equipment. Will set a none option for equipment
console.log("hello world")
if (!time.val() || !purpose.val() || !muscleGroup.val() || !equipment.val()) {
    return;
  }
todayOptions();
// Create constructor for options table in database
var workoutOptions = {
    time: $("input[name=time]: checked").val(),
    purpose: $("input[name=purpose]: checked").val(),
    muscleGroup: $("input[name=mg]: checked").val(),
    equipment: $("#equipment").val()
};

// Post choices to wod api
function todayOptions() {
    $.post("/api/wod", workoutOptions)
    .then(timeOption);
};

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