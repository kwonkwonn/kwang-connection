var express = require("express");
var router = express.Router();
const user = require("express");
const userData = require("../db /controller/User");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/newUser", function (req, res) {
  userData.postUserName(req, res);
});

module.exports = router;
