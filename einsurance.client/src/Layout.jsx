import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ResponseProvider } from "./context/ResponseContext";


function Layout(){
    return(
        <>
            <Header />
        <ResponseProvider>
                <Outlet />
            </ResponseProvider>
        <Footer/>
        </>
    )
}

export default Layout