import "./CompanyInformation.css";
import { useAuthContext } from "../../context/AuthContext";
import releevant from "../../assets/images/releevant.png";
import { Link } from "react-router-dom";


export default function CompanyInformation() {
  const { user } = useAuthContext();

  return (
    <div id="companyinformation">
      <div className="companyinformation">
        <div className="imagename">
        <img src={releevant} />
        
          <div className="companyname">
            <h3>{user.denominacion} </h3>
            <h5 className="plan">Empacthy Community </h5>
          </div>
          </div>
          <div className="aditionalinfo">
            <h5>Sector: {user.sector} </h5>
            <h5>Tipo de empresa: {user.tipoempresa} </h5>
            <h5>Localización: {user.localizacion} </h5>
          </div>
       
      </div>
      <div className="userinformation">
        <div className="perfil">
          <h4>Responsable</h4>
        </div>
        <p>Nombre: {user.nombre} </p>
        <p>Apellidos: {user.apellidos} </p>
        <p>Cargo: {user.cargo} </p>
        <p>Teléfono: {user.telefono} </p>
        <p>Email: {user.email} </p>
        <Link className="buttonmodify" to="/companyhome/modify">
          Editar
        </Link>
      </div>
    </div>
  );
}
