import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";


export default function PublicRoutes() {

const {user} = useAuthContext();
const location = useLocation();

return user ? (
    <Navigate to="/companyhome" state={{from: location }} replace/>
) : (
    <Outlet/>
)

}