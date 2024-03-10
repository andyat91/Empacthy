import "./OrganizationHome.css"

import { useAuthContext } from "../../context/AuthContext";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { host } from "../../const/host";
import Location from "../../assets/icons/Location";
import State0 from "../../assets/icons/State0";
import State1 from "../../assets/icons/State1";
import State2 from "../../assets/icons/State2";
import Kpis from "../../components/Kpis/Kpis";
import InfoStatesOrg from "../../components/InfoStateOrg/InfoStateOrg";
export default function OrganizationHome(){
    const { user } = useAuthContext();
    const [infoMatch, setInfoMatch] = useState([]);
    const [deleteClick, setDeleteClick] = useState(false);


    useEffect(() => {
        let id = user.id;
    
        async function fetchMatch() {
          try {
            const response = await fetch(`${host}/data/matchorg/${id}`);
            const infoMatch = await response.json();
            setInfoMatch(infoMatch);
          } catch (error) {
            toast.error(error);
          }
        }
        fetchMatch();
    
       
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


    return(
        <div id="companyhome" className=" wrap">
        <div className="mismatch">
          <h4> Mis Matches</h4>
        <InfoStatesOrg/>
          {infoMatch.map((match) => (
            <div className="matchorg" key={match.id}>
              <img src={match.imagen} alt="img" />
              <div className="info">
                <div className="principalinfo">
                  <h5>
                    <b>{match.empresaname}</b>{" "}
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
       <Kpis deleteClick={deleteClick} />
      </div> 
    )
}