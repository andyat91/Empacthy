import { useState } from "react";
import "./PaymentForm.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { host } from "../../const/host";
import toast from "react-hot-toast";

export default function PaymentForm({ onPlanChange }) {

  const { user } = useAuthContext()
  const navigate = useNavigate()
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [selectedPlan, setSelectedPlan] = useState("0");

  async function handleSubmit(event) {
    event.preventDefault();

    let precio;
    selectedPlan === "1"? precio=60:
    selectedPlan === "2"? precio=80:"";
    console.log(precio);

    let idempresa = user.id;

   const formData = {
    tarjeta:cardNumber,
    fecha:expiryDate,
    cvv:cvv,
    cantidad:precio,
    idempresa,
   };

   const formData2 = {
    idempresa,
    plan:selectedPlan
   }

   try {
    
    const response = await fetch(`${host}/user/payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),

    });

    const response2 = await fetch(`${host}/user/updateplan`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData2),

    });

    const message = await response.json()
    const message2 = await response2.json()

    if(response.ok && response2.ok) {
      toast.success(`${message.message} ${message2.message} `);
      navigate("/companyhome");
      onPlanChange(selectedPlan);
    }
   } catch (error) {
    console.log(error)
   }

  }

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
           
             
              <form className="terminos">
         <label htmlFor="checkbox">Aceptar  <Link className="linktopolitica" to="politicadeprivacidad" > Términos y Condiciones </Link>
          <input type="checkbox"  id="checkbox"/>
         </label>
         </form>
            
          </div>
          <form onSubmit={handleSubmit}>
            <label>
              Número de Tarjeta:
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required
                placeholder="**** **** **** ****"
              />
            </label>
            <label>
              Fecha de Vencimiento:
              <input
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
                required
                placeholder="_ _ / _ _"
              />
            </label>
            <label>
              CVV:
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                placeholder="***"
              />
            </label>
            <button type="submit" className="paybutton">Pagar</button>
          </form>
          
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
