// $(document).ready(function() {
//     var id = sessionStorage.getItem("id");
//     $.post("/api/workoutHistory", id, function(res) {

//     });

// });

//require chart constructor
// var Chart = require('chart.js');
//create new chart object for the user based off of their workout history
new Chart(document.getElementById("chart"), {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June"],
        datasets: [{
            label: "My First Dataset",
            data: [
                65,
                59,
                80,
                81,
                56,
                55,
                40
            ],
            fill: false,
            // borderColor: rgb(75, 192, 192),
            lineTension: 0.1
        }]
    },
    options: {}
});