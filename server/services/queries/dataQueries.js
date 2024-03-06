const db = require("../mysql");
//Libreria para guardar datos como hora fecha etc...
const moment = require("moment");

const { removeUndefinedKeys } = require("../../utils/utils");


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

  dataQueries.infoFilter = async (valor,ods) => {
    let conn = null;
    try {
      conn = await db.createConnection();
      return await db.query("SELECT * FROM organizaciones JOIN valores_organizaciones ON organizaciones.id = valores_organizaciones.idorganizaciones JOIN ods_organizaciones ON organizaciones.id = ods_organizaciones.idorganizaciones WHERE ods_organizaciones.idODS = ? AND valores_organizaciones.idvalores = ?;", [valor,ods], "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

 dataQueries.getMatchById = async (idong,idempresa) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el email.
    //variable conn = null
    let conn = null
    //try catch finnally para cerrar la conexion al final
    try {
        //Creamoa la conexion a base de datos de mysql.js
        conn = await db.createConnection()
        //Devolvemos los cuatro parametros: consulta, parametro, tipo de consulta y conexion
        return await db.query('SELECT * FROM alianza WHERE idorganizaciones = ? and idempresa = ?', [idong,idempresa], 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    };
};

dataQueries.makeMatch = async (infoData) => {
  
  let conn = null
  try {
      conn = await db.createConnection()
  
      let userObj = {
         idempresa: infoData.idempresa,
         idorganizaciones: infoData.idong,
         estado: 0
      }                  
      return await db.query('INSERT INTO alianza SET ?', userObj, 'insert', conn)
  } catch (e) {
     throw new Error(e)
  } finally {
      conn && await conn.end();
  }
};


module.exports =  dataQueries ;