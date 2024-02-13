//Importamos librería express
const express = require("express");

const { loginUser,addUser } = require('../controllers/userController');
//Routes sirve para modularizar y organizar rutas de manera mas efectiva, libreria express
const userRouter = express.Router();

//Exportamos rutas de controller

userRouter.post("/", addUser);
userRouter.post("/login", loginUser);






module.exports = userRouter;
