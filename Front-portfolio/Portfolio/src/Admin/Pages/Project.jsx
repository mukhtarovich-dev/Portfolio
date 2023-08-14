import {useEffect, useState} from "react";
import {AddProject, DeleteProject, GetProject} from "../../Service/service/AppService.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";

export const Project = () => {
    const [product, setProduct] = useState([])
    const [id, setId] = useState('')
    const navigate = useNavigate()
    const getAll = async () => {
        try {
            await GetProject(setProduct)
        } catch (err) {
            console.log(".")
        }
    }
    useEffect(() => {
        getAll()
    }, [])
    const delteProject = async () => {
        try {
            let con = confirm("o'chirasizmi")
            if (con) {
                await DeleteProject(id)
                navigate('/auth/admin/projects')
            } else {
                getAll()
            }
        } catch (err) {
            console.log(".")
        }
    }
    return (
        <div className={"container d-flex"} style={{marginTop: "50px", marginLeft: "300px"}}>
            <AddProjects/>
            <button type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" style={{height: "40px"}}
                    className={"btn btn-danger m-5"}>
                <i className="bi bi-file-plus-fill"></i> add
            </button>
            <div className={"row row-cols-3"}>
                {product.length === 0 ? (
                    <h1 className={"text-center text-danger"}>Ma'lumot mavjud emas</h1>
                ) : (
                    product.map((item) => (
                        <>
                            <div className="col card border border-danger shadow m-3"
                                 style={{width: "18rem", display: "flex"}}>
                                <div data-bs-toggle="modal" onClick={() => setId(item.id)}
                                     data-bs-target="#exampleModal"
                                     className="card-header bg-transparent border-danger">{item.name}</div>
                                <div className="card-body text-danger">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <a href={item.link} className="btn btn-danger bg-transparent border-danger"><h5
                                    className={"text-danger"}>Ko'rish</h5></a>
                            </div>

                            <div className="modal fade " id="exampleModal" tabIndex="-1"
                                 aria-labelledby="exampleModalLabel"
                                 aria-hidden="true">
                                <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Project
                                                Settings</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body"></div>
                                        <button className={"btn btn-danger mb-3"} onClick={() => delteProject()}
                                                style={{width: "80%", marginLeft: "40px"}}>O'chirish
                                        </button>
                                        <button className={"btn btn-warning "}
                                                style={{width: "80%", marginLeft: "40px"}}>Tahrirlash
                                        </button>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                    data-bs-dismiss="modal">Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))
                )}

            </div>
        </div>
    )
}
const AddProjects = () => {
    const [name, setName] = useState('')
    const [link, setLink] = useState('')
    const [description, setDescription] = useState('')
    const saveProject = async () => {
        const data = {
            name, link, description
        }
        await AddProject(data)
        window.location.reload()
        toast.success("saqlandi")
    }
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel" style={{backgroundColor: "black"}}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" style={{color: "red"}} id="offcanvasRightLabel">Add project</h5>
                    <button type="button" className="btn-close btn-danger" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <form>
                        <label style={{color: "red"}} htmlFor={"name"}>Project nomi</label>
                        <input style={{backgroundColor: "red"}} className={"form-control"} type="text" id={"name"}
                               placeholder={"Project nomini kiriting"}
                               onChange={event => setName(event.target.value)} name={"name"}/>
                        <label style={{color: "red"}} htmlFor={"name"}>Project Linki</label>
                        <input style={{backgroundColor: "red"}} type="text" className={"form-control"}
                               placeholder={"Project Linkini kiritng kiriting"}
                               onChange={event => setLink(event.target.value)} name={"name"}/>
                        <label style={{color: "red"}} htmlFor={"name"}>Project haqida</label>
                        <textarea name="description" style={{backgroundColor: "red"}} placeholder={"Statusni kiriting"}
                                  id="description" cols="47" rows="4" value={description}
                                  onChange={e => setDescription(e.target.value)}/>
                    </form>
                </div>
                <button className={"btn btn-danger"} onClick={() => saveProject()}> Save</button>
            </div>

        </div>
    )
}