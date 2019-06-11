var _port = 3000;
var express = require('express');
var mongoose = require('mongoose');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World');
});
 
app.listen(_port, function (err) {

    console.log("This project is started to " + _port + " port")
    if (err) {
      console.log(err);
    }
  });