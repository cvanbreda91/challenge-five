//Create dynamic variables using dateJS for today's date to use at the top of the webpage and to compare to later on for timeblock style
var dateToday = Date.today().setTimeToNow();
var dateTodayTop = Date.today().setTimeToNow().toString("dddd, MMMM dS, yyyy");
$('#currentDay').text(dateTodayTop);

//use a for loop to create timeblock row and update attributes
for (var i=0; i<=8; i++){
$("#row").clone()
        .appendTo("#container")
$("#row").attr("id","newRowId"+[i])
        .addClass("future")
$("#nine").attr("id","newPId"+[i])
$("#text").attr("id","newTextId"+[i])
$("#saveButton").attr("id","newBtnId"+[i])
};

//remove extra child created by for loop
$("#container").children().last().remove()

//create variables for each hour to create conditions for timeblock styling
var dayStart = {hour:00, minute:00}
var dayEnd = {hour:29, minute:59}
var nine = {hour:09, minute:00}
$("#newPId0").text("9:00am")
var ten = {hour:10, minute:00}
$("#newPId1").text("10:00am")
var eleven = {hour:11, minute:00}
$("#newPId2").text("11:00am")
var twelve = {hour:12, minute:00}
$("#newPId3").text("12:00pm")
var one = {hour:13, minute:00}
$("#newPId4").text("1:00pm")
var two = {hour:14, minute:00}
$("#newPId5").text("2:00pm")
var three ={hour:15, minute:00}
$("#newPId6").text("3:00pm")
var four = {hour:16, minute:00}
$("#newPId7").text("4:00pm")
var five = {hour:17, minute:00}
$("#newPId8").text("5:00pm")
var six  = {hour:18, minute:00}

//Create if/else if statement to change timeblock styling based on time of day
if (dateToday>=Date.today().at(nine) && dateToday<Date.today().at(ten)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("present")
}

else if (dateToday>=Date.today().at(ten) && dateToday<Date.today().at(eleven)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("present")
}

else if (dateToday>=Date.today().at(eleven) && dateToday<Date.today().at(twelve)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("present")
}

else if (dateToday>=Date.today().at(twelve) && dateToday<Date.today().at(one)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("present")
}
else if (dateToday>=Date.today().at(one) && dateToday<Date.today().at(two)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("past")
        $("#newRowId4").removeClass("future")
        $("#newRowId4").addClass("present")
}

else if (dateToday>=Date.today().at(two) && dateToday<Date.today().at(three)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("past")
        $("#newRowId4").removeClass("future")
        $("#newRowId4").addClass("past")
        $("#newRowId5").removeClass("future")
        $("#newRowId5").addClass("present")
}

else if (dateToday>=Date.today().at(three) && dateToday<Date.today().at(four)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("past")
        $("#newRowId4").removeClass("future")
        $("#newRowId4").addClass("past")
        $("#newRowId5").removeClass("future")
        $("#newRowId5").addClass("past")
        $("#newRowId6").removeClass("future")
        $("#newRowId6").addClass("present")
}

else if (dateToday>=Date.today().at(four) && dateToday<Date.today().at(five)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("past")
        $("#newRowId4").removeClass("future")
        $("#newRowId4").addClass("past")
        $("#newRowId5").removeClass("future")
        $("#newRowId5").addClass("past")
        $("#newRowId6").removeClass("future")
        $("#newRowId6").addClass("past")
        $("#newRowId7").removeClass("future")
        $("#newRowId7").addClass("present")
}

else if (dateToday>=Date.today().at(five) && dateToday<Date.today().at(six)){
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("past")
        $("#newRowId4").removeClass("future")
        $("#newRowId4").addClass("past")
        $("#newRowId5").removeClass("future")
        $("#newRowId5").addClass("past")
        $("#newRowId6").removeClass("future")
        $("#newRowId6").addClass("past")
        $("#newRowId7").removeClass("future")
        $("#newRowId7").addClass("past")
        $("#newRowId8").removeClass("future")
        $("#newRowId8").addClass("present")
}

 else if (dateToday>Date.today().at(six)) {
        $("#newRowId0").removeClass("future")
        $("#newRowId0").addClass("past")
        $("#newRowId1").removeClass("future")
        $("#newRowId1").addClass("past")
        $("#newRowId2").removeClass("future")
        $("#newRowId2").addClass("past")
        $("#newRowId3").removeClass("future")
        $("#newRowId3").addClass("past")
        $("#newRowId4").removeClass("future")
        $("#newRowId4").addClass("past")
        $("#newRowId5").removeClass("future")
        $("#newRowId5").addClass("past")
        $("#newRowId6").removeClass("future")
        $("#newRowId6").addClass("past")
        $("#newRowId7").removeClass("future")
        $("#newRowId7").addClass("past")
        $("#newRowId8").removeClass("future")
        $("#newRowId8").addClass("past")
}

//reset list for new day
else if (dateToday===dayStart) {
        localStorage.clear()
}

//create global vairables to be used for saving and retrieving from localStorage
var toDoInput0 = "";
var toDoInput1 = "";
var toDoInput2 = "";
var toDoInput3 = "";
var toDoInput4 = "";
var toDoInput5 = "";
var toDoInput6 = "";
var toDoInput7 = "";
var toDoInput8 = "";

//create save event for each save button to set text to localStorage
$("#newBtnId0").on("click", function (event){
        event.preventDefault();
        toDoInput0 = $("#newTextId0").val();
        localStorage.setItem("toDoInput0", JSON.stringify(toDoInput0));
})

$("#newBtnId1").on("click", function (event){
        event.preventDefault();
        toDoInput1 = $("#newTextId1").val();
        localStorage.setItem("toDoInput1", JSON.stringify(toDoInput1));
})

$("#newBtnId2").on("click", function (event){
        event.preventDefault();
        toDoInput2 = $("#newTextId2").val();
        localStorage.setItem("toDoInput2", JSON.stringify(toDoInput2));
})

$("#newBtnId3").on("click", function (event){
        event.preventDefault();
        toDoInput3 = $("#newTextId3").val();
        localStorage.setItem("toDoInput3", JSON.stringify(toDoInput3));
})

$("#newBtnId4").on("click", function (event){
        event.preventDefault();
        toDoInput4 = $("#newTextId4").val();
        localStorage.setItem("toDoInput4", JSON.stringify(toDoInput4));
})

$("#newBtnId5").on("click", function (event){
        event.preventDefault();
        toDoInput5 = $("#newTextId5").val();
        localStorage.setItem("toDoInput5", JSON.stringify(toDoInput5));
})

$("#newBtnId6").on("click", function (event){
        event.preventDefault();
        toDoInput6 = $("#newTextId6").val();
        localStorage.setItem("toDoInput6", JSON.stringify(toDoInput6));
})

$("#newBtnId7").on("click", function (event){
        event.preventDefault();
        toDoInput7 = $("#newTextId7").val();
        localStorage.setItem("toDoInput7", JSON.stringify(toDoInput7));
})

$("#newBtnId8").on("click", function (event){
        event.preventDefault();
        toDoInput8 = $("#newTextId8").val();
        localStorage.setItem("toDoInput8", JSON.stringify(toDoInput8));
})

//create a function to get items from localStorage
function getLocalStorage(){
        toDoInput0 = JSON.parse(localStorage.getItem('toDoInput0'));
        toDoInput1 = JSON.parse(localStorage.getItem('toDoInput1'));
        toDoInput2 = JSON.parse(localStorage.getItem('toDoInput2'));
        toDoInput3 = JSON.parse(localStorage.getItem('toDoInput3'));
        toDoInput4 = JSON.parse(localStorage.getItem('toDoInput4'));
        toDoInput5 = JSON.parse(localStorage.getItem('toDoInput5'));
        toDoInput6 = JSON.parse(localStorage.getItem('toDoInput6'));
        toDoInput7 = JSON.parse(localStorage.getItem('toDoInput7'));
        toDoInput8 = JSON.parse(localStorage.getItem('toDoInput8'));
        $("#newTextId0").val(toDoInput0);
        $("#newTextId1").val(toDoInput1);
        $("#newTextId2").val(toDoInput2);
        $("#newTextId3").val(toDoInput3);
        $("#newTextId4").val(toDoInput4);
        $("#newTextId5").val(toDoInput5);
        $("#newTextId6").val(toDoInput6);
        $("#newTextId7").val(toDoInput7);
        $("#newTextId8").val(toDoInput8);
}

//run the funtion so the text always displays after saving and refreshing
getLocalStorage();
