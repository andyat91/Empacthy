import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/Home/home";
import Login from "./views/login/Login";
import Registro from "./views/Registro/Registro";
import AboutUs from "./views/AboutUs/AboutUs";
import AuthContextProvider from "./context/AuthContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
    <Toaster/>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/empacthy" element={<AboutUs />} />
          </Route>
        </Routes>
      </AuthContextProvider>
   
    </BrowserRouter>
  );
}

export default App;
