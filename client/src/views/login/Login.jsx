import { useState } from "react";
import PersonLogin from "../../assets/icons/PersonLogin";
import { useAuthContext } from "../../context/AuthContext";
import "./Login.css";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/icons/BrandLogo";

export default function Login() {
  const { login, errorMessage } = useAuthContext();
  const [email, setEmail] = useState("");
  const [PASSWORD, setPassword] = useState("");
  const [logintype, setLogintype] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      PASSWORD,
    };
    login(user,logintype);
  };

  function handleLogintype(type) {
    setLogintype(type)
  }

  return (
    <div className="logincontainer">
      <div className="login">
        <h1>
          <PersonLogin />{" "}
        </h1>
        <h4>Bienvenido de nuevo a <BrandLogo />. </h4>
        <div className="togglelogin">
        <button onClick={() => handleLogintype("Soy una Empresa")} className={logintype == "Soy una Empresa" ? "activebuttontoggle buttontoggle" : "buttontoggle"} >Empresa</button>
        <button onClick={() => handleLogintype("Soy una Organizacion")} className={logintype == "Soy una Organizacion" ? "activebuttontoggle buttontoggle" : "buttontoggle"}>Organización </button>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <input
              className="inputlogin"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputlogin"
              placeholder="Password"
              type="password"
              value={PASSWORD}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <Link className="linktoregister" to="/registro">
          Quiero registrarme
        </Link>
      </div>
    </div>
  );
}
