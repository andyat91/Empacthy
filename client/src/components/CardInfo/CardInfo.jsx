import { useEffect, useState } from "react";
import "./CardInfo.css";
import { host } from "../../const/host";

export default function CardInfo() {
  const [infocardData, setInfocard] = useState([]);

  useEffect(() => {
    async function getInfoCard() {
      try {
        const response = await fetch(`${host}/data/infocard`);

        if (!response.ok) {
          throw new Error("Error en el servidor");
        }

        const infocardData = await response.json();
        setInfocard(infocardData);
      } catch (error) {
        console.log("Error en el servidor");
      }
    }
    getInfoCard();
  }, []);

  return (
    <div id="cardinfo" className="wrap">
      {infocardData.map((info) => (
        <div className="card" key={info.id}>
          <h3>{info.nombre}</h3>
          <p className="info-text">{info.info}</p>
          <img src={info.imagen} alt="img" />
        </div>
      ))}
    </div>
  );
}
