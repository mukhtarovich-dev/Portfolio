import {UNavbar} from "../Ucomponent/UNavbar.jsx";
import {Outlet} from "react-router-dom";
import {UFooter} from "../Ucomponent/UFooter.jsx";

export const Udashboard = () => {
    return (
        <div>
            <UNavbar/>
            <Outlet/>
            <UFooter/>
        </div>
    )
}