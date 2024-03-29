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
      return res
        .status(404)
        .send({ message: "No hay historial de donaciones" });

    return res.send(info[0]);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const infoFilter = async (req, res) => {
  const { valor, ods } = req.params;
  try {
    let ongfilter = await dao.infoFilter(valor, ods);
    if (ongfilter) return res.send(ongfilter);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const makeMatch = async (req, res) => {
  const { idong, idempresa } = req.body;

  if (!idong || !idempresa)
    return res.status(400).send({ message: "Error al recibir campos vacios" });

  try {
    const match = await dao.getMatchById(idong, idempresa);

    if (match.length > 0) {
      return res.send({ message: "Ya tienes un Match con esta organización" });
      // Si no existe lo registramos
    } else {
      const makeMatch = await dao.makeMatch(req.body);
      if (makeMatch)
        return res.status(201).send({
          message: `!Enhorabuena¡ Tienes un nuevo Match en proceso de validación`,
        });
    }
  } catch (e) {
    console.log(e.message);
   
    throw new Error(e);
  }
};

const deleteMatch = async (req, res) => {
  try {
    const { idorg, idempresa } = req.body;
    if (!idorg || !idempresa)
      return res.sendStatus(401).send({ message: "Error en el servidor" });

    await dao.deleteMatch(req.body);
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
      return res.status(201).send({ message: "No hay historial de Match" });

    return res.send(info);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const acceptMatch = async (req, res) => {
  const { idempresa, idorg } = req.body;

  if (Object.keys(req.body).length === 0)
    return res.status(400).send("Error al recibir el body");

  try {
    const acceptMatch = await dao.acceptMatch(req.body);

    if (acceptMatch) {
      return res.status(201).send({
        message: `Match aceptado. En breve, Empacthy se pondrá en contacto para establecer la colaboración.`,
      });
    } else {
      res.sendStatus(500).send({ message: "Error en el servidor" });
    }
  } catch (e) {
    console.log(e.message);
  }
};

const infoCountOrg = async (req, res) => {
  const { id } = req.params;
  try {
    let info = await dao.infoCountOrg(id);
    if (info.length <= 0)
      return res.status(404).send({ message: "No hay historial de Match" });

    return res.send(info[0]);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const infoDonationOrg = async (req, res) => {
  const { id } = req.params;
  try {
    let info = await dao.infoDonationOrg(id);
    if (info.length <= 0)
      return res
        .status(404)
        .send({ message: "No hay historial de donaciones" });

    return res.send(info[0]);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const getValores = async (req, res) => {
  const { id } = req.params;
  try {
    let info = await dao.getValores(id);

    return res.send(info);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const getOds = async (req, res) => {
  const { id } = req.params;
  try {
    let info = await dao.getOds(id);

    return res.send(info);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const safeValores = async (req, res) => {
  const { idorg, prevValor1, prevValor2, prevValor3, valor1, valor2, valor3 } =
    req.body;
  try {
    let infoOrgValor = await dao.infoOrgValor(idorg);
    if (infoOrgValor.length <= 0) {
      let insertNewValor = await dao.insertNewValor(req.body);
      if (insertNewValor)
        return res
          .status(201)
          .send({ message: `Valores guardados correctamente.` });
    } else {
      let deleteValores = await dao.deleteValores(idorg);
      if (deleteValores) {
        let insertNewValor = await dao.insertNewValor(req.body);
        if (insertNewValor)
          return res
            .status(201)
            .send({ message: `Valores guardados correctamente.` });
      }
    }
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

const safeOds = async (req, res) => {
  const { idorg, prevValor1, prevValor2, prevValor3, valor1, valor2, valor3 } =
    req.body;
  try {
    let infoOrgOds = await dao.infoOrgOds(idorg);
    if (infoOrgOds.length <= 0) {
      let insertNewOds = await dao.insertNewOds(req.body);
      if (insertNewOds)
        return res
          .status(201)
          .send({ message: `Valores guardados correctamente.` });
    } else {
      let deleteOds = await dao.deleteOds(idorg);
      if (deleteOds) {
        let insertNewOds = await dao.insertNewOds(req.body);
        if (insertNewOds)
          return res
            .status(201)
            .send({ message: `Valores guardados correctamente.` });
      }
    }
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};

module.exports = {
  infoCard,
  infoMatch,
  infoCount,
  infoDonation,
  infoFilter,
  makeMatch,
  deleteMatch,
  infoMatchOrg,
  acceptMatch,
  infoCountOrg,
  infoDonationOrg,
  getValores,
  getOds,
  safeValores,
  safeOds,
};
