import { Link } from "react-router-dom";
import sembrar from "../../assets/images/beficiosorg.jpg";
import "../CardBenefits/CardBenefits.css";
export default function CardBenefits() {
  return (
    <div className=" wrap" id="cardbusiness">
      <div className="businessbenefits">
        <h4>Beneficios y ventajas para ONGs</h4>
        <ul>
          <li>
            <b>Financiación:</b> Colaboramos en diversificar el respaldo
            financiero de las organizaciones y sus causas.
          </li>
          <li>
            <b>Visibilidad:</b> Aumentamos su visibilidad ante empresas,
            clientes, proveedores, socios, comunidades y más allá.
          </li>
          <li>
            <b>Sinergias:</b> Facilitamos la creación de relaciones sólidas con
            empresas y sus redes, promoviendo un alineamiento cultural adecuado
            y fortaleciendo su reputación.
          </li>
          <li>
            <b>Impacto:</b> Amplificamos el impacto de las acciones positivas
            con el respaldo y la colaboración de los patrocinadores.
          </li>
          <li>
            <b>Ventajas:</b> Ofrecemos financiamiento, marketing con propósito,
            mejoras en relaciones públicas y privadas, reputación y
            amplificación del propósito.
          </li>
        </ul>
        <div className="containerbuttonorg">
          <Link to="registroorg" className="registro">
            REGÍSTRATE
          </Link>
        </div>
      </div>
      <img src={sembrar} alt="Beneficios de empresa" className="organizacion" />
    </div>
  );
}
