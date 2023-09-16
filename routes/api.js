var express = require("express");
var router = express.Router();
var crypto = require("crypto");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("sadf");
});

router.get("/nonce", function (req, res) {
  const nonce = crypto.randomBytes(32).toString("hex");
  console.log(nonce);
  res.send({ nonce });
});

module.exports = router;
