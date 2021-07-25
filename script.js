// javascript for challenge 5 //


var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").append(currentTime);

// adds input field to each time block div
function editCalendar() {
    var text = $(this)
    .text()
    .trim();

    var textInput = $("<textarea>")
    .addClass("form-control-sm")
    .val(text);

    $(this).find("p").replaceWith(textInput);

    textInput.trigger("focus");
};

//create function to save data to localstorage

function saveCalendar() {
 console.log("placeholder");
};

//functions calls
$("li #cal-enter").on("click", editCalendar)
$("li .cal-enter").on("click", editCalendar)