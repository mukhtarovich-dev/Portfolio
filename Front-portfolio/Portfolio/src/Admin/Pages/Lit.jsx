import {deleteLit, GetLit, SaveLit, UploadPhoto} from "../../Service/service/AppService.js";
import {useEffect, useState} from "react";
import {toast} from "react-toastify";
import {Api} from "../../Service/Api.js";

export const Lit = () => {
    const [lit, setLit] = useState([])
    const [id, setId] = useState('')
    const getAll = async () => {
        try {
            await GetLit(setLit)
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
                await deleteLit(id),
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
            <AddLit/>
            <>
                <button type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" className={"btn btn-danger "}>
                    <i className="bi bi-file-plus-fill"></i> add
                </button>
                <div className={"container"} style={{marginTop: "50px", marginLeft: "300px"}}>
                    <button type="button" data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"
                            className={"btn btn-danger mb-5"}>
                        <i className="bi bi-file-plus-fill"></i> add
                    </button>
                    <div className={"row"}>
                        {lit.length === 0 ? (
                            <h1 className={"text-center text-danger"}>Ma'lumot mavjud emas</h1>
                        ) : (
                            lit.map((item) => (
                                <>
                                    <div className="col-10 col-md-6 col-sm-10 card border border-danger shadow m-3"
                                         style={{width: "18rem"}}
                                         data-bs-toggle="modal" onClick={() => setId(item.id)}
                                         data-bs-target="#exampleModal">
                                        <div className="card-header bg-transparent border-danger">{item.name}</div>
                                        <div className="card-body text-danger">
                                            <h5 className="card-title"></h5>
                                            <img style={{width: "250px"}} src={Api.downloadPhoto + item.photoId}
                                                 className="card-text"/>
                                        </div>
                                    </div>

                                </>
                            ))
                        )}

                    </div>
                </div>

            </>
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
const AddLit = () => {
    const [name, setName] = useState('')
    const saveProject = async () => {
        const file = new FormData()
        let rasm = document.getElementById("img")
        file.append("rasm", rasm.files[0])
        let photoId = await UploadPhoto(file)

        const data = {
            name, photoId
        }
        await SaveLit(data)
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
                        <label style={{color: "red"}} htmlFor={"name"}>Malomot nomi</label>
                        <input style={{backgroundColor: "red"}} className={"form-control"} type="text" id={"name"}
                               placeholder={"Status nomini kiriting"}
                               onChange={event => setName(event.target.value)} name={"name"}/>
                        <label style={{color: "red"}} htmlFor={"name"}>rasm</label>
                        <input type="file" className={"form-control"} id={"img"} name={"img"}/>
                    </form>
                </div>
                <button className={"btn btn-danger"} onClick={() => saveProject()}> Save</button>
            </div>

        </div>
    )
}