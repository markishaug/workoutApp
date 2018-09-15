$(document).ready(function() {

$("#update-novice-btn").on("click", handleTestSubmit);
function handleTestSubmit(event) {
    event.preventDefault();

var weightInput = $("#novice-weight").val().trim();
var pushupsInput = $("#novice-pushups").val().trim();
var pullupsInput = $("#novice-pullups").val().trim();
var squatInput = $("#novice-body-weight-squats").val().trim();


if (!weightInput || !pushupsInput || !pullupsInput || !squatInput) {
    return;
  }

var SelfAssess = {
    weight: weightInput,
    pushups: pushupsInput,
    pullups: pullupsInput,
    squats: squatInput
};
console.log(SelfAssess);
submitInfo(SelfAssess);

function submitInfo(info) {
    $.post("/api/estimateOneRep", info);
    localStorage.setItem("oneRepObj", res);
    }

}






























});