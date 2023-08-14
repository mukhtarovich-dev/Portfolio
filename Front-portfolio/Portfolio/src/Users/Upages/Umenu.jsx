import rasm from "../images/big_image_1.jpg"
import rasm1 from "../images/big_image_3.jpg"
import {GetDescription, GetLit, getPhoto, GetProject} from "../../Service/service/AppService.js";
import {useEffect, useState} from "react";
import {Api} from "../../Service/Api.js";
import resume from '../../../public/Mukhtarovich_Resume.pdf'
import {Link} from "react-router-dom";

export const Umenu = () => {
    const [description, setDescription] = useState([])
    const [project, setProject] = useState([])
    const [lit, setLit] = useState([])
    const [photo, setPhoto] = useState([])
    const getOne = async () => {
        await GetDescription(setDescription)
        await getPhoto(setPhoto)
        await GetLit(setLit)
        await GetProject(setProject)
    }

    useEffect(() => {
        getOne()
    }, [])
    return (
        <div>
            <section className="site-hero overlay" id={"home"} data-stellar-background-ratio="0.5"
                     style={{backgroundImage: `url(${rasm})`}}
            >
                <div className="container">
                    <div className="row align-items-center site-hero-inner justify-content-center">
                        <div className="col-md-8 text-center">
                            <div className="element">
                                <h1>Full-Stack
                                    <h4 className={"text-light"}>developer</h4>
                                </h1>
                                <p className="lead">
                                    {description.map((item) => (
                                        item.name === 'bosh' ? (
                                            item.description
                                        ) : (
                                            " "
                                        )
                                    ))
                                    }
                                </p>
                                <p><a className="btn btn-primary text-decoration-none" href={resume}>full Resume</a></p>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="school-features d-flex" style={{
                backgroundImage: `url(${rasm1})`
            }}>

                < div id={"blog"} className="inner">
                    {description.map((item) => (
                        item.name === 'tort' ? (
                            <div className="media d-block feature">
                                < div className="icon">< span className="flaticon-video-call"> < /span></div>
                                < div className="media-body">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ) : (
                            ""
                        )
                    ))}

                </div>
            </section>
            <section className="site-section" id={"project"}>
                <div className="container">
                    <section className="school-features text-dark row">
                        {project.map((item) => (
                            <>
                                <div className="col-12 col-md-4 col-sm-12 card border border-primary shadow m-2"
                                     style={{width: "18rem"}}>
                                    <div
                                        className="card-header text-center bg-transparent border-primary">{item.name}</div>
                                    <div className="card-body text-primary">
                                        <p className="card-title text-center"> {item.description}</p>
                                    </div>
                                    <Link to={item.link} className={"card-footer text-decoration-none"}>
                                        <h5 className={"text-primary text-center"} style={{borderBottom: "none"}}>Ko'rish</h5>
                                    </Link>
                                </div>

                            </>
                        ))}
                    </section>


                </div>
            </section>
            <section className="site-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center">
                            <h1>programming web </h1> <h2>development <br/><i className="bi bi-laptop"
                                                                              style={{fontSize: "100px"}}></i></h2>
                            <p className="lead">
                                {description.map((item) => (
                                    item.name === 'ikki' ? (
                                        item.description
                                    ) : (
                                        " "
                                    )
                                ))
                                }
                            </p>
                        </div>
                    </div>
                    <div className="row top-course shadow" id={"skill"}>
                        <>
                            <div className="skil-nav">
                                <div className="skill__icon-wrap"><i
                                    className="bi bi-file-earmark-code"
                                    style={{fontSize: "100px", marginLeft: "45%"}}></i></div>
                                <ul className="row">
                                    {lit.map((item) => (
                                        <li id={"skiill"}
                                            className="col-12 col-md-2 col-sm-12 d-flex border-primary m-5">
                                            <img src={Api.downloadPhoto + item.photoId} alt={item.name}
                                                 style={{width: "40px", height: "40px", borderRadius: "50%"}}/>
                                            <h3 className={"border-primary"}>
                                                {item.name}
                                            </h3>
                                        </li>

                                    ))}

                                </ul>
                            </div>
                        </>
                    </div>
                </div>
            </section>
            <section className="overflow">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-7 order-lg-3 order-1 mb-lg-0 mb-5">
                            {photo.map(item => (
                                item.name === 'bosh' ? (
                                    <img src={Api.downloadPhoto + item.photoId} alt="Image placeholder"
                                         className="img-md-fluid"/>
                                ) : (
                                    ""
                                )
                            ))}
                        </div>
                        <div className="col-lg-1 order-lg-2">
                        </div>
                        <div className="col-lg-4 order-lg-1 order-2 mb-lg-0 mb-5">
                            <i className="bi bi-code-slash" style={{fontSize: "90px", marginLeft: "150px"}}></i>
                            <blockquote className="testimonial">
                                {description.map((item) => (
                                    item.name === 'uch' ? (
                                        item.description
                                    ) : (
                                        ""
                                    )
                                ))}
                            </blockquote>
                            <p>&mdash; Dilbek Mukhtarovich web fullstack developer</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}