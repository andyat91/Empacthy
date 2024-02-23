import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import "./Header.css"
import { Link } from "react-router-dom";
import BrandLogo from "../../assets/icons/BrandLogo";




export default function Header() {

    const {user, logout} = useAuthContext();
    const [menu, setMenu] = useState(false);


    function handleMenu() {

        setMenu(!menu);
    }
    return(
        <div className="header wrap">
            <div className="nameslogan">
        <h2><BrandLogo/></h2>
        <h5>Matchmaking B2Org </h5>
        </div>
        <div className="linkheader">
            {user ? (
                <div>
                    <h5>Perfil de : {user.denominacion} </h5>
                    <button onClick={() =>logout()}>Logout</button>
                </div>
            ):(
                <>
            <Link className="buttonheader aboutus" to="/empacthy">¿Quiénes somos?</Link>
            
            <button className="buttonheader registroheader"  onClick={() => handleMenu()}>REGÍSTRATE</button>
            {menu && (
                <div className="containermenu">
                    <Link to="/registro"className="linkcontainer">Soy una Empresa</Link>
                    <Link to="/registroorg" className="linkcontainer">Soy una Organización</Link>
                </div>
            ) }
            
            <Link className="buttonheader loginheader" to="/login">Iniciar Sesion</Link>
            </>
            )}
        </div>
        </div>
    )
}