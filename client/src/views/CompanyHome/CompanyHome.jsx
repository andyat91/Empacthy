import { useAuthContext } from "../../context/AuthContext"


export default function CompanyHome() {

const { user } = useAuthContext();

console.log(user.descripcion)
    return(

        <>
        <h1>Esta es la Home de la empresa</h1>
        <h2>{user.denominacion} </h2>
        </>
    )
}