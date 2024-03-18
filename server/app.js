
const express = require("express");

const dotenv = require("dotenv");

const logger = require("morgan");

const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const dataRouter = require("./routes/dataRoutes");
const cors = require("cors");
dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use("/user", userRouter);
app.use("/data", dataRouter);

//Levantamos el puerto 8000;
app.listen(PORT, () => console.log(`Server in port ${PORT}`));
