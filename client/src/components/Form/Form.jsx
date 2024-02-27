import { useState } from "react";
import "./Form.css";
import toast from "react-hot-toast";
import { host } from "../../const/host";
import Question from "../../assets/icons/Question";


export default function Form() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [consulta, setConsulta] = useState("");

  async function handleForm(e) {
    e.preventDefault();

    const formData = {
      email,
      consulta,
      telefono,
      nombre,
    };

    try {
      const response = await fetch(`${host}/user/inquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        toast.success(responseData.message);
        setNombre("");
        setEmail("");
        setTelefono("");
        setConsulta("");
        
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      toast.error(error);
    }
  }
  return (
    <div className="formbox wrap">
      <div className="formtext">
        <h4>Optimiza tu Experiencia</h4>
        <p>
          Si tienes alguna pregunta o inquietud,
          estaremos encantados de responderla. Tu satisfacción es nuestra
          prioridad.
        </p>
        <h5 className="icon"><Question/>  </h5>
      </div>
      <form onSubmit={handleForm}>
        <div className="inputformcontact"> 
        <input
          type="text"
          placeholder="Nombre completo"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="telefono"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
        </div>
        <div className="inputformquery">
        <input
          type="text"
          placeholder="¿Cuál es tu consulta?"
          value={consulta}
          onChange={(e) => setConsulta(e.target.value)}
        />
        <button type="submit">Realizar consulta</button>
        </div>
      </form>
    </div>
  );
}
