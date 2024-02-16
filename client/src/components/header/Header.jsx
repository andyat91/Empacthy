import "./Header.css"
import { Link } from "react-router-dom";


export default function Header() {


    return(
        <div className="header wrap">
        <h4>Empacthy</h4>
        <div className="linkheader">
            <Link className="buttonheader" to="/empacthy">¿Quienes somos?</Link>
            <Link className="buttonheader" to="/registro">REGISTRATE</Link>
            <Link className="buttonheader" to="/registro">Iniciar Sesion</Link>
            
        </div>
        </div>
    )
}