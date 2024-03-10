const dao = require("../services/dao");


const infoCard = async (req, res) => {
    try {
      const infocard = await dao.infoCard();
  
      return res.send(infocard);
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };

  const infoMatch = async (req, res) => {

    const { id } = req.params;
    try {

      let info = await dao.infoMatch(id);
      if (info.length <= 0)
      return res.status(404).send({ message: "No hay historial de Match" });
  
      return res.send(info);
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };

  const infoCount = async (req, res) => {

    const { id } = req.params;
    try {

      let info = await dao.infoCount(id);
      if (info.length <= 0)
      return res.status(404).send({ message: "No hay historial de Match" });
  
      return res.send(info[0]);
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };

  const infoDonation = async (req, res) => {

    const { id } = req.params;
    try {

      let info = await dao.infoDonation(id);
      if (info.length <= 0)
      return res.status(404).send({ message: "No hay historial de donaciones" });
  
      return res.send(info[0]);
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };

  const infoFilter = async (req, res) => {

    const { valor,ods } = req.params;
    try {

      let ongfilter = await dao.infoFilter(valor,ods);
      return res.send(ongfilter);
    
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };

  const makeMatch = async (req, res) => {
    const {
      idong,
      idempresa
    } = req.body;
  
    if (
      !idong ||
      !idempresa
    )
      return res.status(400).send({ message: "Error al recibir campos vacios" });
  
    try {
      const match = await dao.getMatchById(idong,idempresa);
   
      if (match.length > 0) {
        return res.send({ message: "Ya tienes un Match con esta organización" });
      // Si no existe lo registramos
    } else {
      const makeMatch = await dao.makeMatch(req.body);
      if (makeMatch)
        return res.status(201).send({ message: `!Enhorabuena¡ Tienes un nuevo Match en proceso de validación` });
      }
    } catch (e) {
      console.log(e.message);
      //Throw sirve para lanzar error inesperado, se puede señalar explicitamente que algo inusual ha sucedido
      throw new Error(e);
    }
  };

  const deleteMatch = async (req, res) => {
  
    try {

    const {idorg,idempresa} = req.body
    if (!idorg || !idempresa) return res.sendStatus(401).send({message:"Error en el servidor"});

    await dao.deleteMatch(req.body)
    // Devolvemos la respuesta

    return res.status(201).send({ message: `Match eliminado` });
  } catch (e) {
    console.log(e.message);
  }
  };

  const infoMatchOrg = async (req, res) => {

    const { id } = req.params;
    try {

      let info = await dao.infoMatchOrg(id);
      if (info.length <= 0)
      return res.status(404).send({ message: "No hay historial de Match" });
  
      return res.send(info);
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };


module.exports = { infoCard , infoMatch , infoCount , infoDonation , infoFilter , makeMatch , deleteMatch , infoMatchOrg };