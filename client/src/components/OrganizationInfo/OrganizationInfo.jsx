import "./OrganizationInfo.css";
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function OrganizationInfo() {
  const { user } = useAuthContext();

  return (
    <div id="organizationinfo">
      <div className="organizationinfo">
        <div className="imagename">
          <div className="image">
          <img src={user.imagen} />
          <h3>{user.denominacion} </h3>
          <h5><b>Localización:</b> {user.localizacion} </h5>
          </div>
          
        </div>
        <div className="aditionalinfo">
          <h5><b>Causa principal:</b> {user.causas} </h5>
          <h5><b>Tipo de Organización:</b> {user.tipo} </h5>
          
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
      </div>
    </div>
  );
}
