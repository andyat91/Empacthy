
const db = require("../mysql");

const moment = require("moment");

const md5 = require("md5");

const { removeUndefinedKeys } = require("../../utils/utils");

const userQueries = {};

userQueries.getUserByEmailCompany = async (email) => {

  let conn = null;

  try {

    conn = await db.createConnection();
   
    return await db.query(
      "SELECT * FROM empresas WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addCompany = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      denominacion: userData.denominacion,
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      password: md5(userData.password),
      telefono: userData.telefono,
      cargo: userData.cargo,
      sector: userData.sector,
      tipoempresa: userData.tipoempresa,
      localizacion: userData.localizacion,
      registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      rol: 0,
      plan: 0,
    };
    return await db.query(
      "INSERT INTO empresas SET ?",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updateCompany = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      denominacion: userData.denominacion,
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      telefono: userData.telefono,
      cargo: userData.cargo,
      sector: userData.sector,
      tipoempresa: userData.tipoempresa,
      localizacion: userData.localizacion,
    };

    userObj = await removeUndefinedKeys(userObj);

    return await db.query(
      "UPDATE empresas SET ? WHERE id = ?",
      [userObj, userData.id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addOrganization = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      denominacion: userData.denominacion,
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      password: md5(userData.password),
      telefono: userData.telefono,
      cargo: userData.cargo,
      causas: userData.causas,
      tipo: userData.tipo,
      localizacion: userData.localizacion,
      registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
      rol: 0,
    };
    return await db.query(
      "INSERT INTO organizaciones SET ?",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.getUserByEmailOrganization = async (email) => {
  let conn = null;
 
  try {
   
    conn = await db.createConnection();
  
    return await db.query(
      "SELECT * FROM organizaciones WHERE email = ?",
      email,
      "select",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updateOrganization = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      denominacion: userData.denominacion,
      nombre: userData.nombre,
      apellidos: userData.apellidos,
      email: userData.email,
      telefono: userData.telefono,
      cargo: userData.cargo,
      causas: userData.causas,
      tipo: userData.tipo,
      localizacion: userData.localizacion,
      descripcion: userData.descripcion,
    };

    userObj = await removeUndefinedKeys(userObj);

    return await db.query(
      "UPDATE organizaciones SET ? WHERE id = ?",
      [userObj, userData.id],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.addInquiry = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      consulta: userData.consulta,
      nombre: userData.nombre,
      email: userData.email,
      telefono: userData.telefono,
      registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query(
      "INSERT INTO informacion SET ?",
      userObj,
      "insert",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.insertPayment = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      tarjeta: userData.tarjeta,
      fecha: userData.fecha,
      cvv: userData.cvv,
      cantidad: userData.cantidad,
      idempresa: userData.idempresa,
      fecha_registro: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    return await db.query("INSERT INTO pagos SET ?", userObj, "insert", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

userQueries.updatePlan = async (userData) => {
  let conn = null;
  try {
    conn = await db.createConnection();

    let userObj = {
      plan: userData.plan,
    };

    return await db.query(
      "UPDATE empresas SET ? WHERE id = ?",
      [userObj, userData.idempresa],
      "update",
      conn
    );
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

module.exports = userQueries;
