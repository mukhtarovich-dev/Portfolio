import {Link} from "react-router-dom";
import rasm1 from "../../Admin/img/resic.png";
import React from "react";

export const UNavbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-md shadow">
                <div className="container">
                    <Link className="navbar-brand absolute"
                          to={"/"}>
                        <img className="rounded-circle m-3 text-decoration-none" src={rasm1} alt=""
                             style={{width: "40px", height: "40px", textDecoration: "none"}}/>
                        Mukhtarovich</Link>

                    <div className="collapse navbar-collapse navbar-light" id="navbarsExample05">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <a className="nav-link active text-decoration-none" href={"/"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href={"#home"} className="nav-link text-decoration-none">About</a>
                            </li>
                            <li className="nav-item">
                                <a href={"#blog"} className="nav-link text-decoration-none">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a href={"#skill"} className="nav-link text-decoration-none">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a href={"#footer"} className="nav-link text-decoration-none">Contact</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    )
}