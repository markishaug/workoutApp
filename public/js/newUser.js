$(document).ready(function() {
// Getting jQuery references to name, age, weight
var nameInput = $("#name");
var userName = $("#username");
var password = $("#password");

// Adding an event listener for when the form is submitted
$("#home-take-test-btn").on("click", handleFormSubmit);
// function for when user input is submitted
function handleFormSubmit(event) {
    event.preventDefault();
// Wont submit the post if we are missing a body, title, or author
if (!nameInput || !userName || !password) {
    return;
  }
// Constructing a newUser object to hand to the database
var newUser = {
    name: nameInput.val().trim(),
    username: userName.val().trim(),
    password: password.val().trim()
  };
submitInfo(newUser);
getHistory();
var userId;
var workouts;
// Sends data and brings user to test page
  function submitInfo(info) {
      $.post("/api/userProfile", info, function(res) {
        // console.log("res =======", res);
        sessionStorage.setItem("id", res);
          window.location.href = "/take-test";
        });
    }

  function getHistory() {
    authorId = "/?author_id=" + authorId;
    userId = sessionStorage.getItem("id")
    // console.log("user id ====== ", userId);
    $.get("/api/workoutHistory" + userId, function(data) {
      // console.log("History==========", data);
      Chart(data);
    });
    }
}
});
