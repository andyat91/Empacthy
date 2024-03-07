import { useAuthContext } from "../../context/AuthContext"
import "./InfoStates.css"
import State0 from "../../assets/icons/State0";
import State1 from "../../assets/icons/State1";
import State2 from "../../assets/icons/State2";


export default function InfoStates(){


    const { user } = useAuthContext()


    return(
        <div className="matchtipo">
        <div className="statetype0">
          <h4>
            <State0 />{" "}
          </h4>
          <p>
            <b>En proceso de validación:</b> Hemos recibido tu interés por la
            organización. Actualmente, nuestro equipo está revisando la
            información proporcionada para asegurarnos de que cumple con los
            requisitos necesarios.
          </p>
        </div>

        <div className="statetype1">
          <h4>
            <State1 />{" "}
          </h4>
          <p>
            <b>Aceptado por la organización:</b> La organización está
            emocionada de colaborar con {user.denominacion}. Tu propuesta ha
            sido revisada y aceptada. Estamos ansiosos por comenzar esta
            colaboración y hacer una diferencia juntos.
          </p>
        </div>

        <div className="statetype2">
          <h4>
            <State2 />{" "}
          </h4>
          <p>
            <b>Match firmado:</b> ¡Felicidades! El contrato ha sido firmado
            por ambas partes. Todas las especificaciones y la cantidad de la
            donación han sido acordadas. Estamos entusiasmados por el impacto
            positivo de esta colaboración.
          </p>
        </div>
      </div>
    )
}