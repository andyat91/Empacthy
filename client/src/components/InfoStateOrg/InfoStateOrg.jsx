import "./InfoStateOrg.css";
import State1 from "../../assets/icons/State1";
import State2 from "../../assets/icons/State2";

export default function InfoStatesOrg() {
  return (
    <div className="matchtipoorg">
      <div className="statetype1">
        <State1 />
        <p>Has aceptado el Match de la empresa.</p>
      </div>

      <div className="statetype2">
        <State2 />
        <p>Contrato firmado por ambos lados.</p>
      </div>
    </div>
  );
}
