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
      <div className="companyhome">
        <div className="mismatch">
          <h4>Mis Matchs</h4>
          {infoMatch.map((match) => (
            <div className="matchorg" key={match.id}>
              <p>
                <b>{match.organizacionname}</b>{" "}
              </p>
              <p>Causa principal: {match.causas} </p>
              <p>Tipo de organizacion: {match.tipo} </p>
              <p>Provincia: {match.localizacion} </p>
              <p>Estado: {match.estado} </p>
              <p>Donación: {match.donacion} </p>
            </div>
          ))}
        </div>
        <div>
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
    </div>
  );
}
