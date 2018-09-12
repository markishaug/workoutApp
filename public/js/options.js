$(document).ready(function() {
var options = ("#options");
$(options).on("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

var values = [];
var values2 = [];
var timeInput = $("input[type=checkbox][name=time]:checked").val();
var purposeInput = $("input[type=checkbox][name=purpose]:checked").val();
var mgInput = $("input[type=checkbox][name=mg]:checked").val();
var equipment = $("input[type=checkbox][name=equipment]:checked").val();

// console.log("------", values);
// console.log("========", values2);

// Wont submit the post if we are missing time, purpose, mg, or equipment. Will set a none option for equipment
if (!timeInput || !purposeInput || !mgInput || !equipment) {
    return;
  }

// Create constructor for options table in database
var workoutOptions = {
    time: timeInput,
    purpose: purposeInput,
    muscleGroup: mgInput,
    equipment: equipment
};
console.log(workoutOptions);
console.log(workoutOptions.muscleGroup);
console.log(workoutOptions.equipment);


//   $.post("/api/exercises", workoutOptions, function(data) {
//     console.log(data);
//   });


};


// Function that gets the entire workout and renders it to workout page
function wod() {







};
});