var express = require("express");
var router = express.Router();
var userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

// this route is to create data in database
router.get("/create", function (req, res) {
  userModel.create({
      name: req.query.name,
      username: req.query.username
    })
    .then(function (create) {
      res.send(create);
    });
});


// this route is to show all the users
router.get("/user", function (req, res) {
  userModel.find({
   
    })
    .then(function (users) {
      res.send(users);
    });
});


// this route is to delete the data from the database
router.get("/delete", function (req, res) {
  userModel.findOneAndDelete({
      username: "yoyo"
    })
    .then(function (deleted) {
      res.send(deleted);
    });
});
module.exports = router;
