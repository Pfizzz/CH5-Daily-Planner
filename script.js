// javascript for challenge 5 //

//indentify and grab current day id //


//var currentDay = document.querySelector("currentDay");

var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime);
console.log(currentTime);