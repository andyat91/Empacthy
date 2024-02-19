import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./views/Home/home";
import Login from "./views/login/Login";
import Registro from "./views/Registro/Registro";



function App() {

  return (
    
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/registro" element={<Registro/>}/>
      </Route>
    </Routes>
    
  </BrowserRouter>

    
    
  )
}

export default App;
