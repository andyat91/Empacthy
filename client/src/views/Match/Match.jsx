import { useEffect, useState } from "react";
import "./Match.css";
import { host } from "../../const/host";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";


export default function Match() {
  const [valor, setValor] = useState("1");
  const [ods, setOds] = useState("1");
  const [ongList, setOngList] = useState([]);
 

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

      if(response.ok){
      const insert = await response.json()
      toast(insert.message);
      setOngList(ongList);
    }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="searchmatch" className="wrap">
      <div>
        <h3>Filtra tu busqueda</h3>
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

        <select value={ods} onChange={handleOds}>
          <option value="1">Fin de la pobreza</option>
          <option value="2">Hambre cero</option>
          <option value="3">Salud y bienestar</option>
          <option value="4">Educación de calidad</option>
          <option value="5">Igualdad de género</option>
          <option value="6">Agua limpia y saneamiento</option>
          <option value="7">Energía asequible y no contaminante</option>
          <option value="8">Trabajo decente y crecimiento económico</option>
          <option value="9">Industria, innovación e infraestructuras</option>
          <option value="10">Reducción de desigualdades</option>
          <option value="11">Ciudades y comunidades sostenibles</option>
          <option value="12">Producción y consumo responsable</option>
          <option value="13">Acción por el clima</option>
          <option value="14">Vida submarina</option>
          <option value="15">Vida de ecosistemas terrestres</option>
          <option value="16">Paz, justicia e instituciones solidarias</option>
          <option value="17">Alianzas para lograr los objetivos</option>
        </select>
      </div>
      <div>
        <h3>ONGs que coinciden con tu busqueda</h3>

        <div className="containercardong">
          {ongList.length > 0 ? (
            ongList.map((onglist) => (
              <div className="cardong" key={onglist.id}>
                <h5>{onglist.denominacion}</h5>
                <p>{onglist.causas}</p>
                <p>{onglist.tipo}</p>
                <button onClick={() => makeMatch(onglist.id)}>
                  Quiero hacer Match
                </button>
              </div>
            ))
          ) : (
            <h3>No hay ONG que coincidan con tu busqueda</h3>
          )}
        </div>
      </div>
    </div>
  );
}
