import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import { host } from "../const/host";


const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  updateUser: ()=> {},
  errorMessage: "",

});

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : null
      );

  const [errorMessage, setErrorMessage] = useState("");

  async function login(user,logintype) {
    
let response ;

    try {

      if(logintype === "Soy una Empresa") {

       response = await fetch(`${host}/user/logincompany`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {

       response = await fetch(`${host}/user/loginorganization`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

    }
    const userLogged = await response.json();
    console.log(logintype)
      if (response.ok) {
        
        setUser({...userLogged, logintipo:logintype });
       
        localStorage.setItem("user", JSON.stringify(userLogged));
        setErrorMessage("");
        toast.success(`Estas en la Home de ${userLogged.denominacion}`)
      } else {
        setErrorMessage(response.message);
        toast.error(userLogged.message);
      }
    } catch (error) {
      setErrorMessage("Error en el servidor");
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  function updateUser(user) {
setUser(user);
  }

  const value = {
    user,
    login,
    logout,
    updateUser,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
