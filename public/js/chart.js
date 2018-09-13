//require chart constructor
var Chart = require('chart.js');
//create new chart object for the user based off of their workout history
var userProfileChart = new Chart(ctx, {
    type: 'line',
    data: data,
    options: options
});