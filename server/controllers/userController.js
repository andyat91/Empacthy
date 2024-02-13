const dao = require("../services/dao");
const { SignJWT, jwtVerify } = require("jose");
const md5 = require("md5");

const addUser = async (req, res) => {
  const {
    razon_social,
    telefono,
    direccion,
    cp,
    ciudad,
    ambito,
    sector,
    email,
    password,
    nombre,
    apellidos,
  } = req.body;

  if (
    !razon_social ||
    !telefono ||
    !direccion ||
    !cp ||
    !ciudad ||
    !ambito ||
    !sector ||
    !email ||
    !password ||
    !nombre ||
    !apellidos
  )
    return res.status(400).send({ message: "Error al recibir el body" });
  // Buscamos el usuario en la base de datos
  try {
    const user = await dao.getUserByEmail(email);
    // Si existe el usuario respondemos con un 409 (conflict)
    if (user.length > 0)
      return res
        .status(409)
        .send({ message: "Usuario ya registrado con ese email" });
    // Si no existe lo registramos

    const addUser = await dao.addUser(req.body);
    if (addUser)
      return res.status(201).send({ message: `Bienvenido a Empacthy` });
  } catch (e) {
    console.log(e.message);
    //Throw sirve para lanzar error inesperado, se puede señalar explicitamente que algo inusual ha sucedido
    throw new Error(e);
  }
};

const loginUser = async (req, res) => {
  const { email, PASSWORD } = req.body;

  if (!email || !PASSWORD)
    return res.status(400).send({ message: "Error por campos vacios" });

  try {
    let user = await dao.getUserByEmail(email);

    if (user.length <= 0)
      return res.status(404).send({ message: "Usuario no registrado" });

    const clienPassword = md5(PASSWORD);
 
    [user] = user;

    if (user.PASSWORD != clienPassword)
      return res.status(401).send({ message: "Password incorrecta" });

    const jwtConstructor = new SignJWT({
      id: user.id,
      email,
      role: user.rol,
    });
    const encoder = new TextEncoder();

    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: "HS256", typ: "JWT" })
      .setIssuedAt()
      .setExpirationTime("2h")
      .sign(encoder.encode(process.env.JWT_SECRET));

    return res.send({ jwt });
  } catch (e) {
    console.log(e.message);
  }
};

module.exports = { loginUser, addUser };
