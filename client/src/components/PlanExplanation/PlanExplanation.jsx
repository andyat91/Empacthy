import "./PlanExplanation.css";

export default function PlanExplanation() {
  return (
    <div id="planexplanation">
      <div className="community allplans">
        <div>
          <h4>Empacthy Community</h4>
          <ul>
            <li>News</li>
            <li>Servicio de impacto a demanda</li>
          </ul>
        </div>
        <h5>Gratuito</h5>
      </div>
      <div className="transcendent allplans">
        <div>
          <h4>Empacthy Transcendent</h4>
          <ul>
            <li>News</li>
            <li>Matching values</li>
            <li>MKT Prensa de impacto</li>
            <li>Fidelización</li>
            <li>Servicios a demanda customizados</li>
          </ul>
        </div>
        <h5>60€ / mes</h5>
      </div>
      <div className="universe allplans">
        <div>
          <h4>Empacthy Universe</h4>
          <ul>
            <li>News</li>
            <li>Matching values</li>
            <li>MKT Prensa de impacto</li>
            <li>Redactor expert journalist</li>
            <li>Fidelización custom</li>
            <li>Matching Business</li>
          </ul>
        </div>
        <h5>80€ / mes</h5>
      </div>
    </div>
  );
}
