import  { useState } from "react";
import "./PaymentForm.css";
import { useAuthContext } from "../../context/AuthContext";

export default function PaymentForm() {

  const {user} = useAuthContext();
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedPlan,setSelectedPlan] = useState(user.plan);

  const handleSubmit = (event) => {
    event.preventDefault();
  

    alert("Pago procesado exitosamente (ficticio)");
  };

  return (
    <div id="paymentform">
      <h3>Quiero cambiar de plan</h3>
      <div className="factura">
      <select value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)}>
        <option value="0">Empacthy Community</option>
        <option value="1">Empacthy Transcendent</option>
        <option value="2">Empacthy Universe</option>
      </select>
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
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </label>
        <button type="submit">Pagar</button>
      </form>
    </div>
  );
}
