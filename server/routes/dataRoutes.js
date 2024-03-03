const express = require("express");

const { infoCard } = require("../controllers/dataController");

const dataRouter =  express.Router();


dataRouter.get("/infocard", infoCard);


module.exports = dataRouter