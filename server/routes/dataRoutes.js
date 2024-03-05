const express = require("express");

const { infoCard,infoMatch,infoCount,infoDonation } = require("../controllers/dataController");

const dataRouter =  express.Router();


dataRouter.get("/infocard", infoCard);
dataRouter.get("/match/:id", infoMatch );
dataRouter.get("/count/:id", infoCount );
dataRouter.get("/donation/:id", infoDonation );


module.exports = dataRouter