var dateToday = Date.today().setTimeToNow();
var dateTodayTop = Date.today().setTimeToNow().toString("dddd, MMMM dS, yyyy");
$('#currentDay').text(dateTodayTop);

for (var i=0; i<=8; i++){
$("#row").clone()
        .appendTo("#container")
$("#row").attr("id","newRowId"+[i])
        .addClass("future")
$("#nine").attr("id","newPId"+[i])
$("#text").attr("id","newTextId"+[i])
$("#saveButton").attr("id","newBtnId"+[i])
};

$("#container").children().last().remove()

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

 else if (dateToday>Date.today().at(five)) {
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


var textNine = $("#newTextId0").val();
var textTen = "";
var textEleven = "";
var textTwelve = "";
var textOne = "";
var textTwo = "";
var textThree = "";
var textFour = "";
var textFive =  "";
var taskAssignment ="";



$("#newBtnId0").click(localStorage.setItem("taskAssignment0", JSON.stringify(textNine)))
        