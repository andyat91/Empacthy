const userQueries = require('./queries/userQueries');
const dao = {};

// Añadir una nueva empresa
dao.addCompany= async (userData) => await userQueries.addCompany(userData);

// Obtener usuario por email Empresas
dao.getUserByEmailCompany = async (email) => await userQueries.getUserByEmailCompany(email);

//Añadir una nueva organización
dao.addOrganization= async (userData) => await userQueries.addOrganization(userData);

// Obtener usuario por email Organizaciones
dao.getUserByEmailOrganization = async (email) => await userQueries.getUserByEmailOrganization(email);

module.exports = dao;