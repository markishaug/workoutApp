$(document).ready(function() {
    $(".submit").click(function() {

            var timeArr = [];
            var purposeArr = [];
            var mgArr = [];
            var equipArr = [];

            var timeInput = $("input[type='radio'][name='time']:checked");
            var purposeInput = $("input[type='radio'][name='purpose']:checked");
            var mgInput = $("input[type='checkbox'][name='mg']:checked");
            var equipInput = $("input[type='checkbox'][name='equipment']:checked");

            timeInput.each(function() {
                timeArr.push($(this).val());
            });

            purposeInput.each(function() {
                purposeArr.push($(this).val());
            });

            mgInput.each(function() {
                mgArr.push($(this).val());
            });

            equipInput.each(function() {
                equipArr.push($(this).val());
            });

            // KEEP FOR TESTING *************************************************************
            // console.log("this is the time array");
            // console.log(timeArr);
            // console.log("------------------------------");
            // console.log("this is the purpose array");
            // console.log(purposeArr);
            // console.log("------------------------------");
            // console.log("this is the muscle group array");
            // console.log(mgArr);
            // console.log("------------------------------");
            // console.log("this is the equipment group array");
            // console.log(equipArr);
            // *******************************************************************************



            // Wont submit the post if we are missing time, purpose, mg, or equipment. Will set a none option for equipment
            // if (!timeInput || !purposeInput || !mgInput || !equipment) {
            //     return;
            // };

            // console.log(workoutOptions);
            // console.log(workoutOptions.muscleGroup);
            // console.log(workoutOptions.equipment);
            sessionStorage.setItem("time", timeArr);
            sessionStorage.setItem("purpose", purposeArr);
            sessionStorage.setItem("muscleGroup", mgArr);
            sessionStorage.setItem("equipment", equipArr);
            window.location.href = "/gotoWOD";

            // if (workoutOptions.equipment.includes("none")) {

            //     $.post("/api/process/bestbodyweightexercise", workoutOptions, function(data) {

            //         console.log(data);

            //     });
            // } else {

            //     $.post("/api/process/bestexercise", workoutOptions, function(data) {
            //         window.location.href = "/gotoWOD";
            //         sessionStorage.setItem("exercise", data);
            //     });
            // }

            // Function that gets the entire workout and renders it to workout page
            // function wod() {
            // };
        }) // end of click

}); // end whole thingff

