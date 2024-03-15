import { useState } from "react";
import "./PaymentForm.css";
import { Link } from "react-router-dom";

export default function PaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("0");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Pago procesado exitosamente (ficticio)");
  };

  return (
    <div id="paymentform">
      <div className="factura">
        <div>
          <h5>Tipo de suscripción</h5>
          <select
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="0">Empacthy Community</option>
            <option value="1">Empacthy Transcendent</option>
            <option value="2">Empacthy Universe</option>
          </select>
        </div>
        <div className="cuota">
          <h5>Precio</h5>
          <h3>
            {selectedPlan === "0"
              ? "ahora Empacthy Community es Gratis"
              : selectedPlan === "1"
              ? "60€ / mes"
              : selectedPlan === "2"
              ? "80€ / mes"
              : ""}
          </h3>
          <p>
            {selectedPlan === "0"
              ? "En un esfuerzo por eliminar las barreras de entrada, hemos tomado la audaz decisión de hacer que nuestro PLAN Empacthy Community sea gratuita para todos. Queremos que cada empresa, tenga la oportunidad de acceder a recursos de calidad que les permitan alcanzar sus metas y sueños."
              : selectedPlan === "1"
              ? "Subtotal: 47,40€"
              : selectedPlan === "2"
              ? "Subtotal: 63,20€"
              : ""}
          </p>
          <p>
            {selectedPlan === "0"
              ? ""
              : selectedPlan === "1"
              ? "IVA 21%: 12,60€"
              : selectedPlan === "2"
              ? "IVA 21%: 16,80€"
              : ""}
          </p>
          <p>
            {selectedPlan === "0"
              ? ""
              : selectedPlan === "1"
              ? "Total: 60€"
              : selectedPlan === "2"
              ? "Total: 80€"
              : ""}
          </p>
        </div>
      </div>
      {selectedPlan === "1" || selectedPlan === "2" ? (
        <div className="formtarjeta">
          <div className="clausulas">
            <h4>Paga de forma comoda y segura.</h4>
            <p>
              <b>Renovación Automática</b> Tu suscripción se renovará automáticamente
              al final de cada período de facturación, a menos que canceles tu
              suscripción antes de la fecha de renovación.
            </p>
            <Link className="linktopolitica" to="politicadeprivacidad" >Términos y Condiciones</Link>
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Número de Tarjeta:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Fecha de Vencimiento:
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
              />
            </label>
            <label>
              CVV:
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
              />
            </label>
            <button type="submit">Pagar</button>
          </form>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
