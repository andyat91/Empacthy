import "./CompanyInformation.css";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function CompanyInformation() {
  const { user } = useAuthContext();

  return (
    <div id="companyinformation">
      <div className="companyinformation">
        <div className="imagename">
          <div className="image">
          <img src={user.imagen} />
          <h3>{user.denominacion} </h3>
          </div>
          <div className="plancontratado">
            <div className="planseleccionado">
            <h5 className="nameplan">PLAN</h5>
            <h5 className="plan">{user.plan == "0"? "Empacthy Community":
                                  user.plan == "1"?  "Empacthy Transcendent":
                                  user.plan == "2"? "Empacthy Universe":""}</h5>
            </div>
            <div className="blank"></div>
          </div>
        </div>
        <div className="aditionalinfo">
          <h5><b>Sector:</b> {user.sector} </h5>
          <h5><b>Tipo de empresa:</b> {user.tipoempresa} </h5>
          <h5><b>Localización:</b> {user.localizacion} </h5>
        </div>
      </div>
      <div className="userinformation">
        <div className="perfil">
          <h4>Responsable</h4>
        </div>
        <div className="userdata">
          <div>
        <p><b>Nombre:</b> {user.nombre} </p>
        <p><b>Apellidos: </b>{user.apellidos} </p>
        <p><b>Cargo: </b>{user.cargo} </p>
        </div>
        <div>
        <p><b>Teléfono:</b> {user.telefono} </p>
        <p><b>Email:</b> {user.email} </p>
        </div>
        </div>
        <Link className="buttonmodify" to="/companyhome/modify">
          Editar
        </Link>
        <Link to="/companyhome/plans" className="buttonplan">
          Cambiar PLAN
        </Link>
      </div>
    </div>
  );
}
