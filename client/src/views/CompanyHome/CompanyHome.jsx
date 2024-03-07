import { Link } from "react-router-dom";
import "./CompanyHome.css";
import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { host } from "../../const/host";


export default function CompanyHome() {
  const { user } = useAuthContext();
  const [infoMatch, setInfoMatch] = useState([]);
  const [infoCount, setInfoCount] = useState([]);
  const [infoDonation, setInfoDonation] = useState([]);

  useEffect(() => {
    let id = user.id;

    async function Match() {
      try {
        const response = await fetch(`${host}/data/match/${id}`);
        const infoMatch = await response.json();
        setInfoMatch(infoMatch);
      } catch (error) {
        toast.error(error);
      }
    }

    async function Count() {
      try {
        const response = await fetch(`${host}/data/count/${id}`);
        const infoCount = await response.json();
        setInfoCount(infoCount);
      } catch (error) {
        toast.error(error);
      }
    }

    async function Donation() {
      try {
        const response = await fetch(`${host}/data/donation/${id}`);
        const infoDonation = await response.json();
        setInfoDonation(infoDonation);
      } catch (error) {
        toast.error(error);
      }
    }
    Count();

    Match();

    Donation();
  }, [user]);



  return (
    <div id="companyhome" className=" wrap">
     
        <div className="mismatch">
          <h4>Mis Matches</h4>
          {infoMatch.map((match) => (
            <div className="matchorg" key={match.id}>
              <img src={match.imagen} alt="img" />
              <div className="info">
                <div className="principalinfo">
              <h5>
                <b>{match.organizacionname}</b>{" "}
              </h5>
              <p>{match.causas} </p>
              </div>
              <div className="descripcion">
              <p>{match.descripcion} </p>
              <p>Provincia: {match.localizacion} </p>
              </div>
              <div className="estado">
              <p>Estado: {match.estado} </p>
              <p>Donación: {match.donacion} </p>
              </div>
              </div>
            </div>
          ))}
        </div>
        <div className="kpis">
          <h4>Mis KPIs</h4>
          {infoCount.map((count) => (
            <p key={count.id}>
              <b>Cantidad de matchs: {count.cantidad}</b>{" "}
            </p>
          ))}

          {infoDonation.map((donation) => (
            <p key={donation.id}>
              <b>Dinero donado: {donation.cantidad} €</b>{" "}
            </p>
          ))}
          <Link to="/perfil" className="perfil">
            Editar perfil
          </Link>
          <Link to="/companyhome/match" className="matchlink">
            Buscar MATCH
          </Link>
        </div>
     
    </div>
  );
}
