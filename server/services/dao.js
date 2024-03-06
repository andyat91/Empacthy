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

// Obtener info de tarjetas de landing
dao.infoMatch= async (id) => await dataQueries.infoMatch(id);

// Obtener cantidad de match asociados a la empresa
dao.infoCount= async (id) => await dataQueries.infoCount(id);

// Obtener total de donaciones por empresa
dao.infoDonation= async (id) => await dataQueries.infoDonation(id);

// Trae ong filtradas por valores y ods
dao.infoFilter= async (valor,ods) => await dataQueries.infoFilter(valor,ods);

// Comprobar que no haya un match activo
dao.getMatchById= async (idong,idempresa) => await dataQueries.getMatchById(idong,idempresa);

// Realizar nuevo Match
dao.makeMatch= async (infoData) => await dataQueries.makeMatch(infoData);
module.exports = dao;