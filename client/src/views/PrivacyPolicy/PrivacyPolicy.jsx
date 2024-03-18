import "./PrivacyPolicy.css";
import ods from "../../assets/images/ODS.png";
export default function PrivacyPolicy() {
  return (
    <div id="aboutus" className="wrap">
      <div className="textletter">
        <div className="explanation">
          <div className="sectionaboutus">
            <div>
              <h4>Uso de la Aplicación</h4>

              <ul>
                <li>
                  1.1. Al acceder y utilizar la Aplicación, aceptas cumplir con
                  todas las leyes y regulaciones aplicables.
                </li>
                <li>
                  1.2. No debes utilizar la Aplicación de manera fraudulenta o
                  para cualquier propósito ilegal o no autorizado.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Suscripción y Pago</h4>
              <ul>
                <li>
                  2.1. Al suscribirte a Empacthy, aceptas pagar los cargos
                  mensuales por la suscripción según se indique en la
                  aplicación.
                </li>
                <li>
                  2.2. Las suscripciones se renovarán automáticamente al final
                  de cada período de facturación, a menos que se cancele con
                  anticipación.
                </li>
                <li>
                  2.3. Nos reservamos el derecho de cambiar los precios de las
                  suscripciones en cualquier momento previa notificación.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Propiedad Intelectual</h4>
              <ul>
                <li>
                  3.1. La Aplicación y todo el contenido relacionado, incluidos,
                  entre otros, el diseño, los gráficos, el código y otros
                  materiales, son propiedad de Empacthy y están protegidos por
                  las leyes de propiedad intelectual.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Limitación de Responsabilidad</h4>
              <ul>
                <li>
                  4.1. En ningún caso Empacthy será responsable por daños
                  indirectos, incidentales, especiales o consecuentes que surjan
                  del uso de la Aplicación.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Información que Recopilamos</h4>
              <ul>
                <li>
                  Recopilamos información personal de los usuarios solo cuando
                  sea necesario para proporcionar nuestros servicios. Esta
                  información puede incluir, entre otros, nombre, dirección de
                  correo electrónico, información de pago y cualquier otra
                  información relevante para la suscripción.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Uso de la Información</h4>
              <ul>
                <li>
                  Utilizamos la información recopilada para gestionar las
                  suscripciones de los usuarios, proporcionar soporte al
                  cliente, mejorar nuestros servicios y enviar comunicaciones
                  relacionadas con la aplicación.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Compartir Información</h4>
              <ul>
                <li>
                  No compartimos información personal con terceros, excepto
                  cuando sea necesario para procesar pagos o cumplir con las
                  leyes y regulaciones aplicables.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Seguridad de la Información</h4>
              <ul>
                <li>
                  Tomamos medidas razonables para proteger la información
                  personal de los usuarios contra accesos no autorizados,
                  divulgación o destrucción.
                </li>
              </ul>
            </div>
          </div>
          <div className="sectionaboutus">
            <div>
              <h4>Cambios en la Política de Privacidad</h4>
              <ul>
                <li>
                  Nos reservamos el derecho de actualizar nuestra política de
                  privacidad en cualquier momento. Cualquier cambio será
                  notificado a los usuarios a través de la Aplicación.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="empacthyletter">
          <div className="letter">E</div>
          <div className="letter">M</div>
          <div className="letter">P</div>
          <div className="letter">A</div>
          <div className="letter">C</div>
          <div className="letter">T</div>
          <div className="letter">H</div>
          <div className="letter">Y</div>
          <img src={ods} />
        </div>
      </div>
    </div>
  );
}
