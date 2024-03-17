import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import "./Header.css";
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/icons/BrandLogo";
export default function Header() {
  const { user, logout } = useAuthContext();
  const [menu, setMenu] = useState(false);
  const [showmenu, setShowmenu] = useState(false);

  function handleMenu() {
    setMenu(!menu);
    setShowmenu(true);
  }

  useEffect(() => {
    let timeout;

    if (showmenu) {
      timeout = setTimeout(() => {
        setMenu(false);
        setShowmenu(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [showmenu]);

  return (
    <div id="headercontainer">
      <div className="header wrap">
        <div className="nameslogan">
          <h2>
            <BrandLogo />
          </h2>
          <h5>Matchmaking B2Org </h5>
        </div>
        
        <div className="linkheader">
          {user ? (
            <div className="userlogged">
              <img src={`/${user.imagen}`} />
              
              <Link
              
                to={
                  user?.logintipo === "Soy una Empresa"
                    ? "/companyhome"
                    : "/organizationhome"
                }
                className="perfil"
              >
                <h5>{user.denominacion}</h5>
              </Link>
              <button onClick={() => logout()}>Logout</button>
            </div>
          ) : (
            <>
              <Link className="buttonheader aboutus" to="/empacthy">
                ¿Quiénes somos?
              </Link>

              <button
                className="buttonheader registroheader"
                onClick={() => handleMenu()}
              >
                REGÍSTRATE
              </button>
              {menu && (
                <div className="containermenu">
                  <Link to="/registro" className="linkcontainer">
                    Soy una Empresa
                  </Link>
                  <Link to="/registroorg" className="linkcontainer">
                    Soy una Organización
                  </Link>
                </div>
              )}

              <Link className="buttonheader loginheader" to="/login">
                Iniciar Sesion
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
