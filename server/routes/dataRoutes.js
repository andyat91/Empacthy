const express = require("express");

const { infoCard,infoMatch,infoCount,infoDonation,infoFilter,makeMatch } = require("../controllers/dataController");

const dataRouter =  express.Router();


dataRouter.get("/infocard", infoCard);
dataRouter.get("/match/:id", infoMatch );
dataRouter.get("/count/:id", infoCount );
dataRouter.get("/donation/:id", infoDonation );
dataRouter.get("/filter/:valor/:ods", infoFilter);
dataRouter.post("/makematch", makeMatch);

module.exports = dataRouter