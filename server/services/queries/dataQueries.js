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
      return await db.query("SELECT organizaciones.id,organizaciones.denominacion as organizacionname, organizaciones.causas, organizaciones.tipo, organizaciones.localizacion,alianza.estado,alianza.donacion,organizaciones.descripcion,organizaciones.imagen FROM organizaciones JOIN alianza ON organizaciones.id = alianza.idorganizaciones JOIN empresas ON empresas.id = alianza.idempresa WHERE empresas.id = ?", id, "select", conn);
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
      return await db.query("SELECT organizaciones.id,organizaciones.denominacion,organizaciones.causas, organizaciones.tipo,organizaciones.localizacion,organizaciones.descripcion,organizaciones.imagen FROM organizaciones JOIN valores_organizaciones ON organizaciones.id = valores_organizaciones.idorganizaciones JOIN ods_organizaciones ON organizaciones.id = ods_organizaciones.idorganizaciones WHERE ods_organizaciones.idODS = ? AND valores_organizaciones.idvalores = ?;", [valor,ods], "select", conn);
    } catch (e) {
      throw new Error(e);
    } finally {
      conn && (await conn.end());
    }
  };

 dataQueries.getMatchById = async (idong,idempresa) => {
   
  let conn = null
    try {
        conn = await db.createConnection()
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

dataQueries.deleteMatch = async (userData) => {
  // Conectamos con la base de datos y eliminamos el usuario por su id.
  let conn = null
  try {
      conn = await db.createConnection()
      return await db.query('DELETE FROM alianza WHERE idorganizaciones = ? AND idempresa = ?', [userData.idorg,userData.idempresa], 'delete', conn)         
  } catch (e) {
      throw new Error(e)
  } finally {
      conn && await conn.end();
  }
};

dataQueries.infoMatchOrg = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT empresas.id,empresas.denominacion as empresaname, empresas.sector, empresas.tipoempresa, empresas.localizacion,alianza.estado,alianza.donacion,empresas.imagen FROM organizaciones JOIN alianza ON organizaciones.id = alianza.idorganizaciones JOIN empresas ON empresas.id = alianza.idempresa WHERE organizaciones.id = ?", id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

dataQueries.acceptMatch = async (infoData) => {
  let conn = null
  try {
      conn = await db.createConnection();

      let userObj = {
         idempresa: infoData.idempresa,
         idorganizaciones: infoData.idorg,
         estado: 1,
         fecha_inicio: moment().format("YYYY-MM-DD HH:mm:ss")
      }

      userObj = await removeUndefinedKeys(userObj)

      return await db.query('UPDATE alianza SET ? WHERE idempresa = ? AND idorganizaciones = ?', [userObj, infoData.idempresa,infoData.idorg], 'update', conn);
  } catch (e) {
     throw new Error(e);
  } finally {
      conn && await conn.end();
  }
};

dataQueries.infoCountOrg = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT COUNT(idorganizaciones) AS cantidad FROM alianza WHERE idorganizaciones = ?", id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

dataQueries.infoDonationOrg = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT sum(donacion) AS cantidad FROM alianza WHERE idorganizaciones = ?", id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

dataQueries.getValores = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT valores.id,valores.denominacion FROM valores JOIN valores_organizaciones ON valores_organizaciones.idvalores = valores.id JOIN organizaciones ON organizaciones.id = valores_organizaciones.idorganizaciones WHERE organizaciones.id= ?", id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

dataQueries.getOds = async (id) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT ods.id,ods.denominacion FROM ods JOIN ods_organizaciones ON ods_organizaciones.idods = ods.id JOIN organizaciones ON organizaciones.id = ods_organizaciones.idorganizaciones WHERE organizaciones.id= ?", id, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

dataQueries.infoOrgValor = async (idorg) => {
  let conn = null;
  try {
    conn = await db.createConnection();
    return await db.query("SELECT * from valores_organizaciones where idorganizaciones = ?", idorg, "select", conn);
  } catch (e) {
    throw new Error(e);
  } finally {
    conn && (await conn.end());
  }
};

dataQueries.insertNewValor = async (infoData) => {
  
  let conn = null
  try {
      conn = await db.createConnection()
  
      let userObj = {
        
      }                  
      return await db.query('INSERT INTO valores_organizaciones SET ?', userObj, 'insert', conn)
  } catch (e) {
     throw new Error(e)
  } finally {
      conn && await conn.end();
  }
};
module.exports =  dataQueries ;