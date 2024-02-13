const userQueries = require('./queries/userQueries');
const dao = {};

// Añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);

// Obtener usuario por email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);


module.exports = dao;