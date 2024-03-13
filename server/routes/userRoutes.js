
const express = require("express");

const { loginUserCompany ,addCompany, addOrganization, loginUserOrganization, addInquiry, updateCompany,updateOrganization } = require('../controllers/userController');
//Routes sirve para modularizar y organizar rutas de manera mas efectiva, libreria express
const userRouter = express.Router();

//Exportamos rutas de controller

userRouter.post("/company", addCompany);
userRouter.post("/organization", addOrganization);
userRouter.post("/logincompany", loginUserCompany);
userRouter.post("/loginorganization", loginUserOrganization);
userRouter.post("/inquiry", addInquiry);
userRouter.post("/updatecompany", updateCompany);
userRouter.post("/updateorganization", updateOrganization);






module.exports = userRouter;
