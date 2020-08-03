var express = require("express");
const burgerTime = require("../models/burger");
var router = express.Router();

router.get('/', function (req, res) {
  burgerTime.selectAll(burgers => {
    console.log("Hello");
    res.render("index", { burgers });
  });
});

router.put("/update/:id", function (req, res) {
  burgerTime.updateOne("devoured", parseInt(req.params.id), () => {
    res.send("success");
  });
});

router.post("/", function (req, res) {
  burgerTime.insertOne(req.body, () => {
    res.send("success");
  });
})

module.exports = router;