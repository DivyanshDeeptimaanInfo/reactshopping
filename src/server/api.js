// var express = require("express");
// // var cors = require("cors");
// var mongoClient = require("mongodb").MongoClient;

// var connectionString = "mongodb://127.0.0.1:27017";

// var app = express();

// app.get("/getusers", (req, res) => {
//   mongoClient.connect(connectionString, (err, clientObj) => {
//     if (!err) {
//       var database = clientObj.db("reactdb");
//       database
//         .collection("tblusers")
//         .find({})
//         .toArray((error, documents) => {
//           if (!error) {
//             res.send(documents);
//           }
//         });
//     }
//   });
// }); 

// app.listen(4000);
// console.log("Server Started : http://127.0.0.1:4000");



var express = require("express");
var mongoClient = require("mongodb").MongoClient;

var app = express();

app.get("/", (req, res) => {
  res.send("<h2>Welcome to Express JS</h2>");
  res.end();
});

app.get("/getusers", (req, res) => {
  mongoClient.connect("mongodb://127.0.0.1:27017").then((clientObject) => {
    var database = clientObject.db("reactdb");
    database
      .collection("tblusers")
      .find({})
      .toArray()
      .then((documents) => {
        res.send(documents);
        res.end();
      });
  });
});

app.get("*", (req, res) => {
  res.send("<code>Not Found: Page you requested Not found</code>");
  res.end();
});

app.listen(4545);
console.log(`Server Started : http://127.0.0.1:4545`);