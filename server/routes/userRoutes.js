const express = require("express");

const {
  loginUserCompany,
  addCompany,
  addOrganization,
  loginUserOrganization,
  addInquiry,
  updateCompany,
  updateOrganization,
  insertPayment,
  updatePlan,
} = require("../controllers/userController");

const userRouter = express.Router();


userRouter.post("/company", addCompany);
userRouter.post("/organization", addOrganization);
userRouter.post("/logincompany", loginUserCompany);
userRouter.post("/loginorganization", loginUserOrganization);
userRouter.post("/inquiry", addInquiry);
userRouter.post("/updatecompany", updateCompany);
userRouter.post("/updateorganization", updateOrganization);
userRouter.post("/payment", insertPayment);
userRouter.post("/updateplan", updatePlan);

module.exports = userRouter;
