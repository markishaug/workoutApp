$(document).ready(function() {
// Getting jQuery references to name, age, weight
var nameInput = $("#name");
var ageInput = $("#age");
var weightInput = $("#weight");
var userName = $("#username");
var password = $("#password")
var newUserForm = $("$#newUser");

// Adding an event listener for when the form is submitted
$(newUserForm).on("submit", handleFormSubmit);
// function for when user input is submitted
function handleFormSubmit(event) {
    event.preventDefault();

// Wont submit the post if we are missing a body, title, or author
if (!nameInput.val().trim() || !ageInput.val().trim() || !weightInput.val().trim() || !userName.val().trim() || !password.val().trim()) {
    return;
  }
// Constructing a newUser object to hand to the database
var newUser = {
    name: nameInput
      .val()
      .trim(),
    age: ageInput
      .val()
      .trim(),
    weight: weightInput
      .val()
      .trim(),
    username: userName
      .val()
      .trim(),
    password: password
      .val()
      .trim()
  };
submitInfo(newUser);
// Sends data and brings user to test page
function submitInfo(info) {
    $.post("/api/test", info, function() {
        window.location.href = "/test";
      });
    }
}
});
