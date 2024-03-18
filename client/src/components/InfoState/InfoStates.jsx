import "./InfoStates.css";
import State0 from "../../assets/icons/State0";
import State1 from "../../assets/icons/State1";
import State2 from "../../assets/icons/State2";

export default function InfoStates() {
  return (
    <div id="matchtipo">
      <div className="statetype0">
        <State0 />
        <p>1º: En proceso de validación</p>
      </div>
      <div className="statetype1">
        <State1 />
        <p>2º: Aceptado por la organización</p>
      </div>

      <div className="statetype2">
        <State2 />
        <p>3º: Contrato firmado por ambos lados.</p>
      </div>
    </div>
  );
}
