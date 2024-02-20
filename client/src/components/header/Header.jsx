import "./Header.css"
import { Link } from "react-router-dom";


export default function Header() {


    return(
        <div className="header wrap">
            <div className="nameslogan">
        <h4>Empacthy</h4>
        <h5>Match making B2Org</h5>
        </div>
        <div className="linkheader">
            <Link className="buttonheader aboutus" to="/empacthy">¿Quiénes somos?</Link>
            <Link className="buttonheader registroheader" to="/registro">REGÍSTRATE</Link>
            <Link className="buttonheader loginheader" to="/login">Iniciar Sesion</Link>
            
        </div>
        </div>
    )
}