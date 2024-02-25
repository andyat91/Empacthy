import { Outlet } from "react-router-dom";
import "./Layout.css"
import Footer from "../Footer/Footer";
import Header from "../header/Header";


export default function Layout() {


    return (
    <div >
    <Header />
    <Outlet/>
    <Footer/>
    </div>
    )
}