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
  const [logintype, setLogintype] = useState("Soy una Empresa");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = {
      email,
      PASSWORD,
    };
    login(user,logintype);
  };

  function handleLogintype() {
    setLogintype((prevLoginType) => (prevLoginType === "Soy una Empresa" ? "Soy una Organización" : "Soy una Empresa"))
  }

  return (
    <div className="logincontainer">
      <div className="login">
        <h1>
          <PersonLogin />{" "}
        </h1>
        <h4>Bievenido de nuevo a <BrandLogo className="brandlogo"/> </h4>
        <button onClick={handleLogintype}>{logintype === "Soy una Empresa"? "Soy una Empresa" : "Soy una Organización"} </button>
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
