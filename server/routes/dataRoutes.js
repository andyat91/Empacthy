const express = require("express");

const {
  infoCard,
  infoMatch,
  infoCount,
  infoDonation,
  infoFilter,
  makeMatch,
  deleteMatch,
  infoMatchOrg,
  acceptMatch,
  infoCountOrg,
  infoDonationOrg,
  getValores,
  getOds,
  safeValores,
  safeOds,
} = require("../controllers/dataController");

const dataRouter = express.Router();

dataRouter.get("/infocard", infoCard);
dataRouter.get("/match/:id", infoMatch);
dataRouter.get("/count/:id", infoCount);
dataRouter.get("/donation/:id", infoDonation);
dataRouter.get("/filter/:valor/:ods", infoFilter);
dataRouter.post("/makematch", makeMatch);
dataRouter.delete("/deletematch", deleteMatch);
dataRouter.get("/matchorg/:id", infoMatchOrg);
dataRouter.post("/acceptmatch", acceptMatch);
dataRouter.get("/countorg/:id", infoCountOrg);
dataRouter.get("/donationorg/:id", infoDonationOrg);
dataRouter.get("/valoresinfo/:id", getValores);
dataRouter.get("/odsinfo/:id", getOds);
dataRouter.post("/safevalores", safeValores);
dataRouter.post("/safeods", safeOds);

module.exports = dataRouter;
