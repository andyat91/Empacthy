import "./CompanyInformation.css";
import { useAuthContext } from "../../context/AuthContext";
import releevant from "../../assets/images/releevant.png";
export default function CompanyInformation() {
  const { user } = useAuthContext();

  return (
    <div id="companyinformation" >
      <div className="companyinformation">
        <img src={releevant} />
        <div className="principalinfo">
          <div className="companyname">
            <h3>{user.denominacion} </h3>
            <h5 className="plan">Empacthy Community </h5>
          </div>
          <div className="aditionalinfo">
            <h5>Sector: {user.sector} </h5>
            <h5>Tipo de empresa: {user.tipoempresa} </h5>
            <h5>Localización: {user.localizacion} </h5>
          </div>
        </div>
      </div>
      <div className="companyalliance">
    <h4>Alianzas</h4>
      </div>
    </div>
  );
}
