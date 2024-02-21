import { createContext, useState, useContext } from "react";
import toast from "react-hot-toast";
import { host } from "../const/host";


const AuthContext = createContext({
  user: null,
  login: () => {},
  logout: () => {},
  errorMessage: "",
});

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(
        localStorage.getItem("user")
          ? JSON.parse(localStorage.getItem("user"))
          : null
      );

  const [errorMessage, setErrorMessage] = useState("");

  async function login(user) {
    try {
      const response = await fetch(`${host}/user/logincompany`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        const userLogged = await response.json();
        setUser(userLogged);
        console.log(userLogged)
        localStorage.setItem("user", JSON.stringify(userLogged));
        setErrorMessage("");
        toast.success(`Estas en la Home de ${userLogged.denominacion}`)
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("Error en el servidor");
    }
  }

  function logout() {
    setUser(null);
    localStorage.removeItem("user");
  }

  const value = {
    user,
    login,
    logout,
    errorMessage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
