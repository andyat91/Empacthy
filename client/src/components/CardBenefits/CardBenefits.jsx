import { Link } from "react-router-dom";
import benefitsempresa from "../../assets/images/benefitsempresa.jpg";
import "./CardBenefits.css";
import { useAuthContext } from "../../context/AuthContext";
export default function CardBenefits() {
  const { user } = useAuthContext();
  return (
    <div className=" wrap" id="cardbusiness">
      <img
        src={benefitsempresa}
        alt="Beneficios de empresa"
        className="empresa"
      />
      <div className="businessbenefits">
        <h4>Beneficios y ventajas para Empresas</h4>
        <ul>
          <li>
            <b>Match:</b> Facilitamos el patrocinio de ONGs y causas alineadas
            con vuestra cultura e identidad empresarial.
          </li>
          <li>
            <b>Simple:</b> Eliminamos esfuerzos en todos los sentidos,
            simplificando el proceso de principio a fin.
          </li>
          <li>
            <b>Marketing con Causa:</b> Compartimos vuestras actividades de
            patrocinio y acción social, porque lo que no se comparte se pierde.
          </li>
          <li>
            <b>Fidelización:</b> Permitimos donaciones en nombre de clientes y
            empleados, entregándoles el correspondiente certificado a su nombre.
          </li>
          <li>
            <b>Ventajas:</b> Reducción de riesgos, gestión integral sin
            esfuerzo, mejora en la reputación e imagen de marca, fidelización,
            hasta un 50% de beneficio fiscal, y un corazón social y empresarial
            más pleno.
          </li>
        </ul>

        <div className="containerbutton">
          {!user ? (
            <Link to="registro" className="registro">
              REGÍSTRATE
            </Link>
          ) : (
            <Link to="empacthy" className="registro">
              Sobre nosotros
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
