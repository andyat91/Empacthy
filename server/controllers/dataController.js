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
  
      return res.send(info);
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
  
      return res.send(info);
    } catch (error) {
      console.log(error);
  
      throw new Error(error);
    }
  };

module.exports = { infoCard, infoMatch, infoCount, infoDonation };