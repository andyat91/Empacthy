//Importamos MYsqlConnection
const db = require("../mysql");
//Libreria para guardar datos como hora fecha etc...
const moment = require("moment");
//algoritmo que se utiliza para verificar la integridad de datos
const md5 = require("md5");


const userQueries = {};

userQueries.getUserByEmailCompany = async (email) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el email.
    //variable conn = null
    let conn = null
    //try catch finnally para cerrar la conexion al final
    try {
        //Creamoa la conexion a base de datos de mysql.js
        conn = await db.createConnection()
        //Devolvemos los cuatro parametros: consulta, parametro, tipo de consulta y conexion
        return await db.query('SELECT * FROM empresas WHERE email = ?', email, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    };
};

userQueries.addCompany = async (userData) => {
  
    let conn = null
    try {
        conn = await db.createConnection()
    
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
           registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
           rol: 0
        }                  
        return await db.query('INSERT INTO empresas SET ?', userObj, 'insert', conn)
    } catch (e) {
       throw new Error(e)
    } finally {
        conn && await conn.end();
    }
};

userQueries.addOrganization = async (userData) => {

    let conn = null
    try {
        conn = await db.createConnection()
    
        let userObj = {
           denominacion: userData.denominacion,
           nombre: userData.nombre,
           apellidos: userData.apellidos,
           email: userData.email,
           password: md5(userData.password),
           telefono: userData.telefono,
           cargo: userData.cargo,
           areaong: userData.areaong,
           causas: userData.causas,
           tipo: userData.tipo,
           registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
           rol: 0
        }                      
        return await db.query('INSERT INTO organizaciones SET ?', userObj, 'insert', conn)
    } catch (e) {
       throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}

userQueries.getUserByEmailOrganization = async (email) => {
    // Conectamos con la base de datos y buscamos si existe el usuario por el email.
    //variable conn = null
    let conn = null
    //try catch finnally para cerrar la conexion al final
    try {
        //Creamoa la conexion a base de datos de mysql.js
        conn = await db.createConnection()
        //Devolvemos los cuatro parametros: consulta, parametro, tipo de consulta y conexion
        return await db.query('SELECT * FROM organizaciones WHERE email = ?', email, 'select', conn)
    } catch (e) {
        throw new Error(e)
    } finally {
        conn && await conn.end();
    };
};


module.exports =  userQueries ;