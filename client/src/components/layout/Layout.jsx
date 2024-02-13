import { Outlet } from "react-router-dom";

import Footer from "../Footer/Footer";
import Header from "../header/Header";
import Nav from "../nav/Nav";

export default function Layout() {


    return (
    <>
    <Header/>
    <Nav/>
    <Outlet/>
    <Footer/>
    </>
    )
}