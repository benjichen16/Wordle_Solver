var brain = require("brain.js");
const fs = require("fs");
const path = require("path");

var net = new brain.NeuralNetwork();

fs.readFileSync(
  path.join(__dirname, "/training-data.csv"),
  function read(err, data) {
    if (err) {
      console.log("error");
    }
    console.log(data);
  }
);
