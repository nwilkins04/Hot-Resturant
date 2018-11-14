// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("connected - listening at port: " + PORT)

var waitingList = [];

var reservations = [{
    routeName: "mlc",
    name: "MiChel Causey",
    phone: "123-456-7890",
    email: "myemail@gmail.com",
    uniqueID: "letsGo",
},
{
    routeName: "sanya",
    name: "Sanya Matani",
    phone: "234-567-8910",
    email: "heremail@gmail.com",
    uniqueID: "letsGoWife",
}];

console.log(reservations)

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "rootroute.html"));
  });
  
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
  });
  
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html"));
  });