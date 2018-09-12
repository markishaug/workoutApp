$(document).ready(function() {

$("#update-novice-btn").on("click", handleTestSubmit);
function handleTestSubmit(event) {
    event.preventDefault();

var weightInput = $("#weight").val().trim();
var pushupsInput = $("#pushups").val().trim();
var pullupsInput = $("#pullups").val().trim();
var squatInput = $("#body-weight-squats").val().trim();

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
    }

}






























});