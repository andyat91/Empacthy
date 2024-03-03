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


module.exports = { infoCard };