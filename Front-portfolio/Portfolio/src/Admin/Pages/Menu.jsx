import {ClearMessage, GetDescription, GetLit, getMessage, GetProject} from "../../Service/service/AppService.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Menu = () => {
    const [product, setProduct] = useState([])
    const [lit, setLit] = useState([])
    const [description, setDescription] = useState([])
    const [message, setMessage] = useState([])
    const navigate = useNavigate()
    const getAll = async () => {
        try {
            await getMessage(setMessage)
            await GetDescription(setDescription)
            await GetLit(setLit)
            await GetProject(setProduct)
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
        <div style={{width: "80%", marginLeft: "240px"}}>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-graph-up-arrow" style={{fontSize: "40px", color: "red"}}></i>
                            <div className="ms-3">
                                <p className="mb-2">Loyihalar Soni</p>
                                <h6 className="mb-0">{product.length}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-bar-chart-line" style={{fontSize: "40px", color: "red"}}></i>
                            <div className="ms-3">
                                <p className="mb-2">Skillar Soni</p>
                                <h6 className="mb-0">{lit.length}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-clipboard2-data-fill" style={{fontSize: "40px", color: "red"}}></i>
                            <div className="ms-3">
                                <p className="mb-2">Statuslar soni</p>
                                <h6 className="mb-0">{description.length}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="bg-secondary rounded d-flex align-items-center justify-content-between p-4">
                            <i className="bi bi-pie-chart-fill" style={{fontSize: "40px", color: "red"}}></i>
                            <div className="ms-3">
                                <p className="mb-2">Habarlar Soni</p>
                                <h6 className="mb-0">{message.length}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pt-4 px-4">
                <div className="bg-secondary text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Recent Salse</h6>
                        <a href="">Show All</a>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                            <tr className="text-white">
                                <th scope="col"><input className="form-check-input" type="checkbox"/></th>
                                <th scope="col">Date</th>
                                <th scope="col">Invoice</th>
                                <th scope="col">Customer</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td><input className="form-check-input" type="checkbox"/></td>
                                <td>01 Jan 2045</td>
                                <td>INV-0123</td>
                                <td>Jhon Doe</td>
                                <td>$123</td>
                                <td>Paid</td>
                                <td><a className="btn btn-sm btn-primary" href="">Detail</a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-2">
                                <h6 className="mb-0">Messages</h6>
                                <button className={"btn btn"} onClick={() => clear()}>clerar all</button>
                            </div>
                            {message.length === 0 ? (
                                <p>Habarlar yoq</p>
                            ) : (
                                message.map((item) => (
                                    <div className="d-flex align-items-center pt-3">
                                        <div className="w-100 ms-3">
                                            <div className="d-flex w-100 justify-content-between">
                                                <h6 className="mb-0"> {item.phone}</h6>
                                            </div>
                                            <span>{item.message}</span>
                                        </div>
                                    </div>

                                ))
                            )}
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">Calender</h6>
                                <a href="">Show All</a>
                            </div>
                            <div id="calender"></div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-6 col-xl-4">
                        <div className="h-100 bg-secondary rounded p-4">
                            <div className="d-flex align-items-center justify-content-between mb-4">
                                <h6 className="mb-0">To Do List</h6>
                                <a href="">Show All</a>
                            </div>
                            <div className="d-flex mb-2">
                                <input className="form-control bg-dark border-0" type="text" placeholder="Enter task"/>
                                <button type="button" className="btn btn-primary ms-2">Add</button>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox" checked/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span><del>Short task goes here...</del></span>
                                        <button className="btn btn-sm text-primary"><i className="fa fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center border-bottom py-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pt-2">
                                <input className="form-check-input m-0" type="checkbox"/>
                                <div className="w-100 ms-3">
                                    <div className="d-flex w-100 align-items-center justify-content-between">
                                        <span>Short task goes here...</span>
                                        <button className="btn btn-sm"><i className="fa fa-times"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}