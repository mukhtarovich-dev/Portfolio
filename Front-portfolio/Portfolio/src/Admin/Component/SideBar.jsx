import rasm1 from "../img/resic.png"
import {Link, useLocation} from "react-router-dom";

export const SideBar = () => {
    const location = useLocation().pathname
    const bArre = [
        {
            name: "Dashboard",
            link: "/auth/admin",
            icon: "bi bi-speedometer"
        },
        {
            name: "Project",
            link: "/auth/admin/projects",
            icon: "bi bi-terminal-plus"
        }, {
            name: "Description",
            link: "/auth/admin/description",
            icon: "bi bi-fullscreen-exit"
        }, {
            name: "Lit",
            link: "/auth/admin/lit",
            icon: "bi bi-filetype-json"
        }, {
            name: "Photo",
            link: "/auth/admin/photo",
            icon: "bi bi-images"
        }
    ]
    return (
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <a href="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary">
                        <i className="fa fa-user-edit me-2"></i>Resume</h3>
                </a>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src={rasm1} alt=""
                             style={{width: "50px", height: "50px"}}
                        />
                        <div
                            className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Mukhtarovich
                        </h6>
                        <span className={"text-light"}>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <div className="nav-item">
                        {bArre.map((item) => (
                            <Link to={item.link}
                                  className={location === item.link ? "nav-link active" : "nav-link"}> <i
                                className={item.icon} style={{fontSize: "35px"}}></i>{item.name}</Link>

                        ))}
                    </div>

                </div>
            </nav>
        </div>
    )
}