const userQueries = require('./queries/userQueries');
const dataQueries = require('./queries/dataQueries');
const dao = {};

// Añadir una nueva empresa
dao.addCompany= async (userData) => await userQueries.addCompany(userData);

// Obtener usuario por email Empresas
dao.getUserByEmailCompany = async (email) => await userQueries.getUserByEmailCompany(email);

// Actualizar informacion y datos de Empresas
dao.updateCompany = async (userData) => await userQueries.updateCompany(userData);

//Añadir una nueva organización
dao.addOrganization= async (userData) => await userQueries.addOrganization(userData);

// Obtener usuario por email Organizaciones
dao.getUserByEmailOrganization = async (email) => await userQueries.getUserByEmailOrganization(email);

// Formulario de consulta
dao.addInquiry= async (userData) => await userQueries.addInquiry(userData);

// Obtener info de tarjetas de landing
dao.infoCard= async () => await dataQueries.infoCard();

module.exports = dao;