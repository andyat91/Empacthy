const db = require("../mysql");

const dataQueries = {};


dataQueries.infoCard = async () => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query("SELECT * FROM infotarjeta", null, "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

  dataQueries.infoMatch = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query("SELECT * FROM organizaciones JOIN alianza ON organizaciones.id = alianza.idorganizaciones JOIN empresas ON empresas.id = alianza.idempresa WHERE empresas.id = ?", id, "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

module.exports =  dataQueries ;