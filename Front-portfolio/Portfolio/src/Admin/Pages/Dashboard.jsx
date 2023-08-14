import {Navbar} from "../Component/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {SideBar} from "../Component/SideBar.jsx";
import {Footer} from "../Component/Footer.jsx";
import {NotFound} from "../Component/NotFoundPage.jsx";

export const Dashboard = () => {
    return (
        localStorage.getItem("token") ? (
            <div className="">
                <SideBar/>
                <div>
                    <Navbar/>
                </div>
                <Outlet/>
                <Footer/>

            </div>
        ) : (
            <NotFound/>
        )
    )
}