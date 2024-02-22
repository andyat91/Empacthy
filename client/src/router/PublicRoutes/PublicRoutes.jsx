import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";


export default function PublicRoutes() {

const {user} = useAuthContext();
const location = useLocation();
const destinationLogin = user?.tipo === "Soy una Empresa" ? "/companyhome" : "/organizationhome" ;

return user ? (
    <Navigate to={destinationLogin} state={{from: location }} replace/>
) : (
    <Outlet/>
)

}