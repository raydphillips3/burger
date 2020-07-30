var express = require("express");
const burgerTime = require("../models/burger");
var router = express.Router();




router.get('/', function (req, res) {
  // burgerTime.selectAll(function(result) {
  //   console.log(result);
  // });
    burgerTime.selectAll(burgers => {
      console.log("Hello");
      // res.send("Hello World");
      res.render("index", { burgers });
    });
  })

  module.exports = router;