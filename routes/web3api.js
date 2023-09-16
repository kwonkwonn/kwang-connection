var express = require("express");
var router = express.Router();
const { Network, Alchemy } = require("alchemy-sdk");
require("dotenv").config();

const settings = {
  apiKey: process.env.AlchemyAPI,
  network: Network.MATIC_MUMBAI,
};

const alchemy = new Alchemy(settings);

/* GET home page. */
router.get("/", async function (req, res, next) {
  const latestBlock = await alchemy.core.getBlockNumber();
  console.log(latestBlock);
  res.send({ latestBlock });
});

module.exports = router;
