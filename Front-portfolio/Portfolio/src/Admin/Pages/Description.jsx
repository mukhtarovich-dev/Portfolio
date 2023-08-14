import {useEffect, useState} from "react";
import {AddDescription, deleteDescription, DeleteProject, GetDescription} from "../../Service/service/AppService.js";
import {toast} from "react-toastify";

export const Description = () => {
    const [description, setDescription] = useState([])
    const [id, setId] = useState('')
    const getAll = async () => {
        try {
            await GetDescription(setDescription)
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
            con ? (
                await deleteDescription(id),
                    window.location.reload()
            ) : (
                getAll()
            )
        } catch (err) {
            console.log(".")
            toast.error(err.response.data.message)
        }
    }

    return (
        <>
            <AddDescriptions/>
            <div className={"container d-flex"} style={{marginTop: "50px", marginLeft: "300px"}}>
                <button type="button" data-bs-toggle="offcanvas"
                        style={{height: "40px"}} data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                        className={"btn btn-danger mb-5"}>
                    <i className="bi bi-file-plus-fill"></i> add
                </button>
                {description.length === 0 ? (
                    <h1 className={"text-center text-danger"}>Ma'lumot mavjud emas "Qoshish uchun -bosh,ikki,uch-"</h1>
                ) : (
                    description.map((item) => (
                        <>
                            <div className="card border border-danger shadow m-3" style={{maxWidth: "18rem"}}
                                 data-bs-toggle="modal" onClick={() => setId(item.id)}
                                 data-bs-target="#exampleModal">
                                <div className="card-header bg-transparent border-danger">{item.name}</div>
                                <div className="card-body text-danger">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                            </div>

                        </>
                    ))
                )}
            </div>
            <div className="modal fade " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Project Settings</h1>
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
    )
}
const AddDescriptions = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const saveProject = async () => {
        const data = {
            name, description
        }
        await AddDescription(data)
        window.location.reload()
        toast.success("saqlandi")
    }
    return (
        <div>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight"
                 aria-labelledby="offcanvasRightLabel" style={{backgroundColor: "black"}}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" style={{color: "red"}} id="offcanvasRightLabel">Add description</h5>
                    <button type="button" className="btn-close btn-danger" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                </div>
                <h6>Qoshish uchun nom -bosh,ikki,uch-</h6>
                <div className="offcanvas-body">
                    <form>
                        <label style={{color: "red"}} htmlFor={"name"}>Malomot nomi</label>
                        <input style={{backgroundColor: "red"}} className={"form-control mb-3"} type="text" id={"name"}
                               placeholder={"Status nomini kiriting"}
                               onChange={event => setName(event.target.value)} name={"name"}/>
                        <label style={{color: "red"}} htmlFor={"name"}>Status</label>
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