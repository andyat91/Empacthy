const dao = require("../services/dao");
const { SignJWT, jwtVerify } = require("jose");
const md5 = require("md5");

const addCompany = async (req, res) => {
  const {
    denominacion,
    nombre,
    apellidos,
    email,
    password,
    telefono,
    cargo,
    sector,
    tipoempresa,
    localizacion
  } = req.body;

  if (
    !denominacion ||
    !nombre||
    !apellidos||
    !email ||
    !password ||
    !telefono||
    !cargo ||
    !sector ||
    !tipoempresa ||
    !localizacion
  )
    return res.status(400).send({ message: "Error al recibir campos vacios" });

  try {
    const user = await dao.getUserByEmailCompany(email);
 
    if (user.length > 0)
      return res
        .status(409)
        .send({ message: "Usuario ya registrado con ese email" });
    // Si no existe lo registramos

    const addCompany = await dao.addCompany(req.body);
    if (addCompany)
      return res.status(201).send({ message: `Bienvenido a Empacthy` });
  } catch (e) {
    console.log(e.message);
    //Throw sirve para lanzar error inesperado, se puede señalar explicitamente que algo inusual ha sucedido
    throw new Error(e);
  }
};

const loginUserCompany = async (req, res) => {
  const { email, PASSWORD } = req.body;

  if (!email || !PASSWORD)
    return res.status(400).send({ message: "Error por campos vacios" });

  try {
    let user = await dao.getUserByEmailCompany(email);

    if (user.length <= 0)
      return res.status(404).send({ message: "Usuario no registrado" });

    const clienPassword = md5(PASSWORD);
 
    [user] = user;
  
    if (user.password != clienPassword)
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

    return res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

const updateCompany = async (req, res) => {
  const { id,denominacion,nombre,apellidos,email,telefono,cargo,sector,tipoempresa,localizacion } = req.body;

  if (!id || !denominacion || !nombre || !apellidos || !email || !telefono || !cargo || !sector || !tipoempresa || !localizacion)
    return res.status(400).send({ message: "Error del servidor al recibir un campo vacio" });

  try {

    const updateCompany = await dao.updateCompany(req.body);

    if (updateCompany)
      return res.send({
        message: `Perfil de ${denominacion} modificado correctamente`,
      });
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};


//-------------------------------------------------------------------------------------------------------------------------------------------------

const addOrganization = async (req, res) => {
  const {
    denominacion,
    nombre,
    apellidos,
    email,
    password,
    telefono,
    cargo,
    causas,
    tipo,
    localizacion
  } = req.body;

  if (
    !denominacion ||
    !nombre||
    !apellidos||
    !email ||
    !password ||
    !telefono||
    !cargo ||
    !causas ||
    !tipo ||
    !localizacion
  )
    return res.status(400).send({ message: "Error al recibir campos vacios" });

  try {
    const user = await dao.getUserByEmailOrganization(email);
 
    if (user.length > 0)
      return res
        .status(409)
        .send({ message: "Usuario ya registrado con ese email" });
    // Si no existe lo registramos

    const addOrganization = await dao.addOrganization(req.body);
    if (addOrganization)
      return res.status(201).send({ message: `Bienvenido a Empacthy` });
  } catch (e) {
    console.log(e.message);
    //Throw sirve para lanzar error inesperado, se puede señalar explicitamente que algo inusual ha sucedido
    throw new Error(e);
  }
};

const loginUserOrganization = async (req, res) => {
  const { email, PASSWORD } = req.body;

  if (!email || !PASSWORD)
    return res.status(400).send({ message: "Error por campos vacios" });

  try {
    let user = await dao.getUserByEmailOrganization(email);

    if (user.length <= 0)
      return res.status(404).send({ message: "Usuario no registrado" });

    const clienPassword = md5(PASSWORD);
 
    [user] = user;
  
    if (user.password != clienPassword)
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

    return res.send(user);
  } catch (e) {
    console.log(e.message);
  }
};

const addInquiry = async (req, res) => {
  const {
    consulta,
    nombre,
    email,
    telefono
  } = req.body;

  if (
    !consulta ||
    !nombre||
    !email ||
    !telefono
  )
    return res.status(400).send({ message: "Error al recibir campos vacios" });

  try {
   
    const addInquiry = await dao.addInquiry(req.body);
    if (addInquiry)
      return res.status(201).send({ message: `Gracias ${nombre}. En breve nos pondremos en contacto con usted.` });
  } catch (e) {
    console.log(e.message);
    //Throw sirve para lanzar error inesperado, se puede señalar explicitamente que algo inusual ha sucedido
    throw new Error(e);
  }
};

const updateOrganization = async (req, res) => {
  const { id,denominacion,nombre,apellidos,email,telefono,cargo,causas,tipo,localizacion } = req.body;

  if (!id || !denominacion || !nombre || !apellidos || !email || !telefono || !cargo || !causas || !tipo || !localizacion)
    return res.status(400).send({ message: "Error del servidor al recibir un campo vacio" });

  try {

    const updateOrganization = await dao.updateOrganization(req.body);

    if (updateOrganization)
      return res.send({
        message: `Perfil de ${denominacion} modificado correctamente`,
      });
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};



module.exports = { loginUserCompany , addCompany, addOrganization, loginUserOrganization, addInquiry, updateCompany, updateOrganization};
