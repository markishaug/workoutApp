// Takes user input about their workout and sends it to their workout history

$(document).ready(function() {
var nameInput = $("#name");
var setsInput = $("#sets");
var repsInput = $("#reps");
var weightInput = $("#weight");
var complete = $("#complete");
$(complete).on("submit", handleWorkoutSubmit);
function handleWorkoutSubmit(event) {
  event.preventDefault();
// Constructor for each exercise
var exercise1 = {
  name: nameInput.val().trim(),
  sets: setsInput.val().trim(),
  reps: repsInput.val().trim(),
  weight: weightInput.val().trim()
}
var exercise2 = {
  name: "squat",
  sets: 5,
  reps: 15,
  weight: 150
}
console.log(exercise1);
// updateWorkout(exercise1);
var exerciseArr = [];
var postPackage = {
  "exercise": exerciseArr.push(exercise1,exercise2),
  UserProfileId: sessionStorage.getItem("id")
};

console.log(postPackage);

// function updateWorkout(workout) {
//   $.ajax({
//     method: "POST",
//     url: "/api/workoutHistory",
//     data: workout
//   })
//     .then(function(data) {
//       console.log(data);
//       // window.location.href = "/userprofile";
//     });
// }










};

});