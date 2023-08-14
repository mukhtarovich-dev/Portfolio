import React, {useEffect, useState} from "react";
import rasm1 from "../img/resic.png"
import {useNavigate} from "react-router-dom";
import {ClearMessage, getMessage} from "../../Service/service/AppService.js";

export const Navbar = () => {
    const navigate = useNavigate()
    const [message, setMessage] = useState([])
    const logOut = () => {
        localStorage.clear()
        navigate("/")
    }
    const getAll = async () => {
        try {
            await getMessage(setMessage)
        } catch (err) {
            console.log(".")
        }
    }

    useEffect(() => {
        getAll()
    }, [])
    const clear = async () => {
        try {
            await ClearMessage()
        } catch (err) {
            navigate("/")
        }
    }

    return (
        <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0"
             style={{color: "dark", width: "83%", height: "80px", marginLeft: "250px"}}>

            <a className="sidebar-toggler btn btn" style={{fontSize: "30px"}}>
                <i className="bi bi-list"></i>
            </a>
            <form className="d-none d-md-flex ms-4">
                <input className="form-control bg-dark border-0" type="search" placeholder="Search"/>
            </form>
            <div className="navbar-nav align-items-center ms-auto">

                <div className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                        <i className="fa fa-envelope me-lg-2"></i>

                        {message.length === 0 ? (
                            <span className="d-none d-lg-inline-flex">Message</span>

                        ) : (
                            <span className="d-none d-lg-inline-flex ">Message
                            <p className={"text-center text-light"} style={{
                                backgroundColor: "blue",
                                borderRadius: "50%",
                                width: "25px"
                            }}>{"  " + message.length}</p>
                            </span>
                        )}
                    </a>
                    <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                        {message.length === 0 ? (
                            <h6 className={"text-center text-danger"}>Habarlar mavjud emas</h6>
                        ) : (
                            <>
                                {message.map((item) => (
                                    <div className="dropdown-item">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle" src={rasm1} alt=""
                                                 style={{width: "40px", height: " 40px"}}/>
                                            <div className="ms-2">
                                                <h6 className="fw-normal mb-0">{item.phone}</h6>
                                                <small>{item.message}</small>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                < button onClick={() => clear()} className="dropdown-item text-center">Clear
                                    all
                                </button>
                            </>
                        )
                        }
                    </div>
                </div>
                <button onClick={() => logOut()} className={"btn btn m-3"}>Log Out</button>
            </div>
        </nav>

    )
}