var express = require("express");
var path = require("path");


var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "root.html"));
  });
  
app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});
  
app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/api/reservations", function (req, res) {
  return res.json(reservations);
})

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});