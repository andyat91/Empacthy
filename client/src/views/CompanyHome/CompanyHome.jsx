
import { Link } from "react-router-dom"
import "./CompanyHome.css"


export default function CompanyHome() {




    return(

        <div className="companyhome wrap">

            <div>
                <h4>Mis preferencias de match</h4>

                <div>
                    <p>Valores: (select valores)</p>
                    <p>ODS: (Select ODS)</p>
                </div>
                <button>Cambiar preferencias</button>
            </div>
            <div> 
                <h4>Mis KPIS</h4>
            <div>
                <p>Info de matchs ejemplo matches: 8</p>
                <p>Dinero donado: 300euris</p>

                </div>
            </div>
            <div>
                <h4>Mis Matches</h4>
                <div>
                    <p>No puedo poner nombre de la empresa</p>
                </div>
            </div>
            <Link to="/perfil">Perfil</Link>
        </div>
    )
}