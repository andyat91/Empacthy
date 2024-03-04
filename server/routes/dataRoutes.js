const express = require("express");

const { infoCard,infoMatch } = require("../controllers/dataController");

const dataRouter =  express.Router();


dataRouter.get("/infocard", infoCard);
dataRouter.get("/match/:id", infoMatch );


module.exports = dataRouter