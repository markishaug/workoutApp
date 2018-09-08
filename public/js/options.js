$(document).ready(function() {
var options = ("#options");
$(options).on("submit", handleFormSubmit);

function handleFormSubmit(event) {
    event.preventDefault();

// Create constructor for options table in database
var workoutOptions = {
    time: $("input[type=checkbox][name=time]:checked").val(),
    purpose: $("input[type=checkbox][name=purpose]:checked").val(),
    muscleGroup: $("input[type=checkbox][name=mg]:checked").val(),
    equipment: $("input[type=checkbox][name=equipment]:checked").val()
};
// Wont submit the post if we are missing time, purpose, mg, or equipment. Will set a none option for equipment
if (!workoutOptions.time || !workoutOptions.purpose || !workoutOptions.muscleGroup || !workoutOptions.equipment) {
    return;
  }

  $.post("/api/exercises", workoutOptions, function(data) {
    console.log(data);
  });


};


// Function that gets the entire workout and renders it to workout page
function wod() {







};
});