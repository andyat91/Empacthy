import "./UserInformation.css"
import { useAuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Perfil from "../../assets/icons/Perfil";



export default function UserInformation() {

    const { user } = useAuthContext();
    return(

        <div id="userinformation">
            <div className="perfil">
            <h3>Perfil</h3>
            <h3><Perfil/> </h3>
            </div>
            <p>Nombre: {user.nombre} </p>
            <p>Apellidos: {user.apellidos} </p>
            <p>Cargo: {user.cargo} </p>
            <p>Teléfono: {user.telefono} </p>
            <p>Email: {user.email} </p>
            <Link  className="buttonmodify" to="/companyhome/modify" >Editar</Link>
           
          
        </div>
    )
}

