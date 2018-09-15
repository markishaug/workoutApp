// Takes user input about their workout and sends it to their workout history
$(document).ready(function() {

  $("#submit").on("click", function(event) {
      var nameInput1 = $("#name1").val().trim();
      var setsInput1 = $("#sets1").val().trim();
      var repsInput1 = $("#reps1").val().trim();
      var weightInput1 = $("#weight1").val().trim();
      event.preventDefault();
      // Constructor for each exercise
      var exercise1 = {
          name: nameInput1,
          sets: setsInput1,
          reps: repsInput1,
          weight: weightInput1
      }
      var exercise2 = {
        name: nameInput2,
        sets: setsInput2,
        reps: repsInput2,
        weight: weightInput2
      }
      var exercise3 = {
        name: nameInput3,
        sets: setsInput3,
        reps: repsInput3,
        weight: weightInput3
      }
      var exercise4 = {
        name: nameInput4,
        sets: setsInput4,
        reps: repsInput4,
        weight: weightInput4
      }
      var exercise5 = {
        name: nameInput5,
        sets: setsInput5,
        reps: repsInput5,
        weight: weightInput5
      }
      var exercise6 = {
        name: nameInput6,
        sets: setsInput6,
        reps: repsInput6,
        weight: weightInput6
      }
      var exercise7 = {
        name: nameInput7,
        sets: setsInput7,
        reps: repsInput7,
        weight: weightInput7
      }
      var exercise8 = {
        name: nameInput8,
        sets: setsInput8,
        reps: repsInput8,
        weight: weightInput8
      }
      console.log(exercise1);
      // updateWorkout(exercise1);
      
      var exerciseArr = [];
      exerciseArr.push(exercise1, exercise2, exercise3, exercise4, exercise5, exercise6, exercise7, exercise8);
      var postPackage = {
          "exercise": exerciseArr,
          UserProfileId: sessionStorage.getItem("id")
      };

      console.log("post package ======= ", postPackage);
      addWorkout(postPackage);
      function addWorkout(workout) {
        $.post("/api/workoutHistory", workout, function() {
          // window.location.href = "/gotoProfile";
        });
      }
  });

});