import { Link } from "react-router-dom";
import "./CompanyHome.css";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { host } from "../../const/host";
import Location from "../../assets/icons/Location";
import State0 from "../../assets/icons/State0";
import State1 from "../../assets/icons/State1";
import State2 from "../../assets/icons/State2";
import InfoStates from "../../components/InfoState/InfoStates";


export default function CompanyHome() {
  const { user } = useAuthContext();
  const [infoMatch, setInfoMatch] = useState([]);
  const [infoCount, setInfoCount] = useState([]);
  const [infoDonation, setInfoDonation] = useState([]);
  const [deleteClick, setDeleteClick] = useState(false);

  useEffect(() => {
    let id = user.id;

    async function fetchMatch() {
      try {
        const response = await fetch(`${host}/data/match/${id}`);
        const infoMatch = await response.json();
        setInfoMatch(infoMatch);
      } catch (error) {
        toast.error(error);
      }
    }

    async function fetchCount() {
      try {
        const response = await fetch(`${host}/data/count/${id}`);
        const infoCount = await response.json();
        setInfoCount(infoCount);
      } catch (error) {
        toast.error(error);
      }
    }

    async function fetchDonation() {
      try {
        const response = await fetch(`${host}/data/donation/${id}`);
        const infoDonation = await response.json();
        setInfoDonation(infoDonation);
      } catch (error) {
        toast.error(error);
      }
    }

    fetchCount();

    fetchMatch();

    fetchDonation();
  }, [user, deleteClick]);

  async function deleteMatch(idorg) {
    console.log(idorg);
    let idempresa = user.id;

    const formData = {
      idorg,
      idempresa,
    };
    try {
      const response = await fetch(`${host}/data/deletematch`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const message = await response.json();
      if (response.ok) {
        toast.success(message.message);
        setDeleteClick((prev) => !prev);
      } else {
        toast.error(message.message);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div id="companyhome" className=" wrap">
      <div className="mismatch">
        <h4> Mis Matches</h4>
        <InfoStates />
        {infoMatch.map((match) => (
          <div className="matchorg" key={match.id}>
            <div className="img">
              <img src={match.imagen} alt="img" />
            </div>
            <div className="info">
              <div className="principalinfo">
                <h5>
                  <b>{match.organizacionname}</b>{" "}
                </h5>
                <p>{match.causas} </p>
              </div>
              <div className="descripcion">
                <p>
                  <Location /> {match.localizacion}
                </p>
                <button onClick={() => deleteMatch(match.id)}>
                  <i className="bi bi-trash3-fill"></i> Deshacer Match
                </button>
                {console.log(match.id)}
                {/* <p>{match.descripcion} </p> */}
              </div>
              <div
                className={
                  match.estado === 0
                    ? "estado state0"
                    : match.estado === 1
                    ? "estado state1"
                    : match.estado === 2
                    ? "estado state2"
                    : ""
                }
              >
                <div className="estadoname">
                  <p>
                    {match.estado === 0 && <State0 />}
                    {match.estado === 1 && <State1 />}
                    {match.estado === 2 && <State2 />}
                  </p>
                  <p>
                    {match.estado === 0
                      ? "Match en proceso de validación"
                      : match.estado === 1
                      ? "Match aceptado por la Organización"
                      : match.estado === 2
                      ? "Match firmado"
                      : ""}
                  </p>
                </div>
                <p>
                  {match.donacion === null
                    ? ""
                    : `Donación: ${match.donacion}€`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="kpis">
        <h4>Mis KPIs</h4>
        <div className="kpisdata">
          <div>
          <h4>MATCHES:</h4> 
          <h4>{infoCount.cantidad } </h4>
          </div>
          <div className="donation">
          <h4> Dinero donado: </h4>
          <h4>{infoDonation.cantidad} €</h4>
          </div>
        </div>
       
        <Link to="/companyhome/match" className="matchlink">
          Buscar MATCH
        </Link>
        <Link to="/perfil" className="perfil">
          Editar perfil
        </Link>
      <div className="news">
        <h4>NEWS</h4>
      </div>
      </div>
    </div>
  );
}
