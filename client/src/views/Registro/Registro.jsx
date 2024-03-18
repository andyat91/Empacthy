import { useState } from "react";
import "./Registro.css";
import toast from "react-hot-toast";
import { host } from "../../const/host";
import { useNavigate } from "react-router-dom";
import FingerPrint from "../../assets/icons/FingerPrint";
//Boton switch registro empresa o registro organizacion
export default function Registro() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [cargo, setCargo] = useState("");
  const [denominacion, setDenominacion] = useState("");
  const [sector, setSector] = useState("");
  const [tipoempresa, setTipoempresa] = useState("");
  const [localizacion, setLocalizacion] = useState("");

  async function handleRegister(e) {
    e.preventDefault();
    const formData = {
      email,
      password,
      nombre,
      apellidos,
      telefono,
      cargo,
      denominacion,
      sector,
      tipoempresa,
      localizacion,
    };

    try {
      const response = await fetch(`${host}/user/company`, {
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
        setPassword("");
        setApellidos("");
        setCargo("");
        setDenominacion("");
        setSector("");
        setTipoempresa("");
        setLocalizacion("");
        navigate("/login");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  }
  return (
    <div className="registercontainer">
      <div className="register">
        <div className="fingerprint">
          <FingerPrint />
        </div>
        <h4>Registro de Empresa</h4>
        <form onSubmit={handleRegister}>
          <div className="registercolumn">
            <div className="columnleft">
              <input
                className="inputregister"
                placeholder="Nombre"
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Apellidos"
                type="text"
                value={apellidos}
                onChange={(e) => setApellidos(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Telefono"
                type="text"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />

              <input
                className="inputregister"
                placeholder="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="columnright">
              <input
                className="inputregister"
                placeholder="Nombre de la Empresa"
                type="text"
                value={denominacion}
                onChange={(e) => setDenominacion(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Cargo en la Empresa"
                type="text"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Sector"
                type="text"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Tipo de Empresa"
                type="text"
                value={tipoempresa}
                onChange={(e) => setTipoempresa(e.target.value)}
              />
              <input
                className="inputregister"
                placeholder="Localización"
                type="text"
                value={localizacion}
                onChange={(e) => setLocalizacion(e.target.value)}
              />
            </div>
          </div>
          <button type="submit">Registrarse</button>
        </form>
      </div>
    </div>
  );
}
