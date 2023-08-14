import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "../Admin/Pages/Dashboard.jsx";
import {Menu} from "../Admin/Pages/Menu.jsx";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/scss/bootstrap.scss";
import {Profile} from "../Admin/Pages/Profile.jsx";
import {Udashboard} from "../Users/Upages/Udashboard.jsx";
import {Umenu} from "../Users/Upages/Umenu.jsx";
import "../Users/CSS/css/style.css"
import "../Users/CSS/css/animate.css"
import "../Users/CSS/scss/style.scss"
import "../Users/CSS/scss/bootstrap-reboot.scss"
import "../Users/CSS/css/owl.carousel.min.css"
import "../Users/CSS/scss/mixins/_transition.scss"
import {Login} from "../Users/Upages/Login.jsx";
import {NotFound} from "../Admin/Component/NotFoundPage.jsx";
import {Project} from "../Admin/Pages/Project.jsx";
import {Description} from "../Admin/Pages/Description.jsx";
import {Lit} from "../Admin/Pages/Lit.jsx";
import {Photo} from "../Admin/Pages/Photo.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/auth/admin"} element={<Dashboard/>}>
                        <Route index element={<Menu/>}/>
                        <Route path={"/auth/admin/profile"} element={<Profile/>}/>
                        <Route path={"/auth/admin/description"} element={<Description/>}/>
                        <Route path={"/auth/admin/projects"} element={<Project/>}/>
                        <Route path={"/auth/admin/lit"} element={<Lit/>}/>
                        <Route path={"/auth/admin/photo"} element={<Photo/>}/>
                    </Route>
                    <Route path={"/auth/admin/dilbekk070"} element={<Login/>}/>
                    <Route path={"/"} element={<Udashboard/>}>
                        <Route index element={<Umenu/>}/>
                    </Route>
                    <Route path={"*"} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App