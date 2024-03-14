import { useEffect, useState } from "react";
import "./Match.css";
import { host } from "../../const/host";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function Match() {
  const [valor, setValor] = useState("1");
  const [ods, setOds] = useState("1");
  const [ongList, setOngList] = useState([]);
  const [showAllCards, setShowAllCards] = useState(false);

  const { user } = useAuthContext();

  function handleValor(event) {
    setValor(event.target.value);
  }
  function handleOds(event) {
    setOds(event.target.value);
  }

  useEffect(() => {
    async function filterOng() {
      const response = await fetch(`${host}/data/filter/${valor}/${ods}`);
      const ongList = await response.json();
      setOngList(ongList);
    }

    filterOng();
  }, [valor, ods]);

  async function makeMatch(idong) {
    let idempresa = user.id;

    const info = {
      idong,
      idempresa,
    };

    try {
      const response = await fetch(`${host}/data/makematch`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      if (response.ok) {
        const insert = await response.json();
        toast(insert.message);
        setOngList(ongList);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="searchmatch" className="wrap">
      <div className="searchmatch">
        <h3>Encuentra tu Match</h3>
        <div className="filter">
          <h4>Filtra tu busqueda</h4>
          <label>
            <p>Valores</p>
            <select value={valor} onChange={handleValor}>
              <option value="1">Justicia, Inclusión y Diversidad</option>
              <option value="2">Proactividad e Innovación</option>
              <option value="3">Impacto+ y Sostenibilidad</option>
              <option value="4">Transparencia y ética</option>
              <option value="5">Integridad</option>
              <option value="6">Dedicación con proposito</option>
              <option value="7">Colaboración</option>
              <option value="8">Profesionalismo y superación</option>
              <option value="9">Empatía y gratitud</option>
            </select>
          </label>
          <label>
            <p>(ODS) Objetivos de Desarrollo Sostenible</p>
            <select value={ods} onChange={handleOds}>
              <option value="1">Fin de la pobreza</option>
              <option value="2">Hambre cero</option>
              <option value="3">Salud y bienestar</option>
              <option value="4">Educación de calidad</option>
              <option value="5">Igualdad de género</option>
              <option value="6">Agua limpia y saneamiento</option>
              <option value="7">Energía asequible y no contaminante</option>
              <option value="8">Trabajo decente y crecimiento económico</option>
              <option value="9">
                Industria, innovación e infraestructuras
              </option>
              <option value="10">Reducción de desigualdades</option>
              <option value="11">Ciudades y comunidades sostenibles</option>
              <option value="12">Producción y consumo responsable</option>
              <option value="13">Acción por el clima</option>
              <option value="14">Vida submarina</option>
              <option value="15">Vida de ecosistemas terrestres</option>
              <option value="16">
                Paz, justicia e instituciones solidarias
              </option>
              <option value="17">Alianzas para lograr los objetivos</option>
            </select>
          </label>
        </div>

        <div className="containercardorg">
          {ongList.length > 0 ? (
            ongList.slice(0, showAllCards ? ongList.length : 3).map((onglist) => (
              <div className="card" key={onglist.id}>
                <img src={`/${onglist.imagen}`} className="card-img-top" />
                <div className="card-body1">
                  <h5 className="card-title">
                    <b>{onglist.denominacion}</b>
                  </h5>
                  <p className="card-text">{onglist.descripcion}</p>
                  <button
                    className="card-link"
                    onClick={() => makeMatch(onglist.id)}
                  >
                    Quiero hacer MATCH
                  </button>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <b>Causa principal:</b> {onglist.causas}.{" "}
                  </li>
                  <li className="list-group-item">
                    <b>Tipo de Organización: </b>
                    {onglist.tipo}.{" "}
                  </li>
                  <li className="list-group-item">
                    <b>Provincia: </b>
                    {onglist.localizacion}.{" "}
                  </li>
                </ul>
              </div>
            ))
          ) : (
            <h3>Todavia no hay ONG que coincidan con tu busqueda</h3>
          )}
         
        </div>
        {ongList.length > 3 && (
            <button onClick={() => setShowAllCards(!showAllCards)} className="showmore">
              {showAllCards ? "Ver menos" : "Ver más"}
            </button>
          )}
      </div>
    </div>
  );
}
