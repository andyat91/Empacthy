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
      return await db.query("SELECT organizaciones.denominacion as organizacionname, organizaciones.causas, organizaciones.tipo, organizaciones.localizacion,alianza.estado,alianza.donacion FROM organizaciones JOIN alianza ON organizaciones.id = alianza.idorganizaciones JOIN empresas ON empresas.id = alianza.idempresa WHERE empresas.id = ?", id, "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

  dataQueries.infoCount = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query("SELECT COUNT(idempresa) AS cantidad FROM alianza WHERE idempresa = ?", id, "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

  dataQueries.infoDonation = async (id) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query("SELECT sum(donacion) AS cantidad FROM alianza WHERE idempresa = ?", id, "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

module.exports =  dataQueries ;