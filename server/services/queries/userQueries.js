//Importamos MYsqlConnection
const db = require("../mysql");
//Libreria para guardar datos como hora fecha etc...
const moment = require("moment");
//algoritmo que se utiliza para verificar la integridad de datos
const md5 = require("md5");


const userQueries = {};

userQueries.getUserByEmail = async (email) => {
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

userQueries.addUser = async (userData) => {
    // Conectamos con la base de datos y añadimos el usuario.
    let conn = null
    try {
        conn = await db.createConnection()
    
        let userObj = {
           email: userData.email,
           razon_social: userData.razon_social,
           telefono: userData.telefono,
           direccion: userData.direccion,
           cp: userData.cp,
           ciudad: userData.ciudad,
           ambito: userData.ambito,
           sector: userData.sector,
           password: md5(userData.password),
           nombre: userData.nombre,
           apellidos: userData.apellidos,
           registerDate: moment().format("YYYY-MM-DD HH:mm:ss"),
           rol: 0
        }                       //porque set
        return await db.query('INSERT INTO empresas SET ?', userObj, 'insert', conn)
    } catch (e) {
       throw new Error(e)
    } finally {
        conn && await conn.end();
    }
}



module.exports =  userQueries ;