//Importamos librería express
const express = require('express');
//Importamos libreria dotenv para utilizar .env
const dotenv = require('dotenv');
//Middleware para la generacion de registros, registra solicitudes HTTP; direccion IP,Metodo HTTP utilizado.
const logger = require('morgan');
//Middleware analisis y manipulacion de fragmentos de datos que se almacenan en el navegador.
const cookieParser = require('cookie-parser');
//Uso de rutas
const userRouter = require("./routes/userRoutes");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));



app.use("/user", userRouter);




//Levantamos el puerto 8000;
app.listen(PORT, ()=>
console.log(`Server in port ${PORT}`));

