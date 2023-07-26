//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";
  var daytype = "";
  var advice = "";

  switch (currentDay) {
    case 0:
        day="Sunday";
        daytype="Weekend";
        advice="Enjoy your day off!";
        break;
    case 1:
        day="Monday";
        daytype="Weekday";
        advice="Get to work!";
        break;
    case 2:
        day="Tuesday";
        daytype="Weekday";
        advice="Get to work!";
        break;
    case 3:
        day="Wednesday"; 
        daytype="Weekday";
        advice="Get to work!";
        break;
    case 4:
        day="Thursday";
        daytype="Weekday";
        advice="Get to work!";
        break;
    case 5:
        day="Friday";
        daytype="Weekday";
        advice="Get to work!";
        break;
    case 6:
        day="Saturday";
        daytype="Weekend";
        advice="Enjoy your day off!";
        break;
    default:
    console.log("Error: current day is equal to: " + currentDay);
  } 

res.render("list", {
    kindOfDay: day,
    dayType: daytype,
    advice: advice,
});
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
