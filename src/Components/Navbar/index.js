import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Contexts } from "../Context";
import Sidebar from "./Sidebar";
import Top from "./Top";

export default function Navbar() {
    const { menu, toggleMenu } = useContext(Contexts)
    const location = useLocation()
    useEffect(() => {
        if(menu) {
            toggleMenu()
        }
    }, [location.pathname])
    return(
        <div className="sticky top-0 z-20">
            <Top />
            <Sidebar />
        </div>
    )
}