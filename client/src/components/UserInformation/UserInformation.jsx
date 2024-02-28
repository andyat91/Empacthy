import "./UserInformation.css"
import { useAuthContext } from "../../context/AuthContext";
export default function UserInformation() {

    const { user } = useAuthContext();
    return(

        <div id="userinformation">
            <h4>Usuario vinculado</h4>

            <p>{user.nombre} </p>
            <p>{user.apellidos} </p>
            <p>{user.cargo} </p>
            <p>{user.telefono} </p>
            <p>{user.email} </p>
            <button>editar</button>
        </div>
    )
}

