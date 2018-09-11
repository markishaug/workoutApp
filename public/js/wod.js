$(document).ready(function() {
var nameInput = $("#name");
var setsInput = $("#sets");
var repsInput = $("#reps");
var weightInput = $("#weight");
var complete = $("#complete");
$(complete).on("submit", handleWorkoutSubmit);
function handleWorkoutSubmit(event) {
  event.preventDefault();

var newExercise = {
  name: nameInput.val().trim(),
  sets: setsInput.val().trim(),
  reps: repsInput.val().trim(),
  weight: weightInput.val().trim()
}

updateWorkout(newExercise);


function updateWorkout(workout) {
  $.ajax({
    method: "POST",
    url: "/api/workoutHistory",
    data: workout
  })
    .then(function(data) {
      console.log(data);
      // window.location.href = "/userprofile";
    });
}










};

});