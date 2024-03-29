const userQueries = require('./queries/userQueries');
const dataQueries = require('./queries/dataQueries');
const dao = {};

// Añadir una nueva empresa
dao.addCompany= async (userData) => await userQueries.addCompany(userData);

// Obtener usuario por email Empresas
dao.getUserByEmailCompany = async (email) => await userQueries.getUserByEmailCompany(email);

// Actualizar informacion y datos de Empresas
dao.updateCompany = async (userData) => await userQueries.updateCompany(userData);

// Actualizar informacion y datos de Organizaciones
dao.updateOrganization = async (userData) => await userQueries.updateOrganization(userData);

//Añadir una nueva organización
dao.addOrganization= async (userData) => await userQueries.addOrganization(userData);

// Obtener usuario por email Organizaciones
dao.getUserByEmailOrganization = async (email) => await userQueries.getUserByEmailOrganization(email);

// Formulario de consulta
dao.addInquiry= async (userData) => await userQueries.addInquiry(userData);

// Obtener info de tarjetas de landing
dao.infoCard= async () => await dataQueries.infoCard();

// Obtener info match de empresas
dao.infoMatch= async (id) => await dataQueries.infoMatch(id);

// Obtener cantidad de match asociados a la empresa
dao.infoCount= async (id) => await dataQueries.infoCount(id);

// Obtener total de donaciones por empresa
dao.infoDonation= async (id) => await dataQueries.infoDonation(id);

// Trae org filtradas por valores y ods
dao.infoFilter= async (valor,ods) => await dataQueries.infoFilter(valor,ods);

// Comprobar que no haya un match activo
dao.getMatchById= async (idong,idempresa) => await dataQueries.getMatchById(idong,idempresa);

// Realizar nuevo Match
dao.makeMatch= async (infoData) => await dataQueries.makeMatch(infoData);

// Eliminar match
dao.deleteMatch= async (infoData) => await dataQueries.deleteMatch(infoData);

// Obtener info match de org
dao.infoMatchOrg= async (id) => await dataQueries.infoMatchOrg(id);

// Aceptar el match por la organizacion
dao.acceptMatch= async (infoData) => await dataQueries.acceptMatch(infoData);

// Obtener cantidad de match asociados a la org
dao.infoCountOrg= async (id) => await dataQueries.infoCountOrg(id);

// Obtener total de donaciones recibidas en la org
dao.infoDonationOrg= async (id) => await dataQueries.infoDonationOrg(id);

// Obtener Valores asociados a la org
dao.getValores= async (id) => await dataQueries.getValores(id);

// Obtener Valores asociados a la org
dao.getOds= async (id) => await dataQueries.getOds(id);

// Obtener si hay alguna organización con valores ya asignados
dao.infoOrgValor= async (idorg) => await dataQueries.infoOrgValor(idorg);

// Insertar nuevos valores 
dao.insertNewValor= async (infoData) => await dataQueries.insertNewValor(infoData);

// Borra valores antes de insertar nuevos valores
dao.deleteValores= async (idorg) => await dataQueries.deleteValores(idorg);

// Obtener si hay alguna organización con ods ya asignados
dao.infoOrgOds= async (idorg) => await dataQueries.infoOrgOds(idorg);

// Insertar nuevos ods 
dao.insertNewOds= async (infoData) => await dataQueries.insertNewOds(infoData);

// Borra ods antes de insertar nuevos valores
dao.deleteOds= async (idorg) => await dataQueries.deleteOds(idorg);

// Insertar nuevo pago
dao.insertPayment= async (infoData) => await userQueries.insertPayment(infoData);

// Actualizar plan
dao.updatePlan= async (infoData) => await userQueries.updatePlan(infoData);




module.exports = dao;