import rasm from "../images/big_image_3.jpg"
import {Link} from "react-router-dom";
import {useState} from "react";
import {sendMessage} from "../../Service/service/AppService.js";
import "../CSS/css/css.css"
import {InputMask} from 'primereact/inputmask';
import {toast} from "react-toastify";
import React from 'react';

export const UFooter = () => {
    const [message, setMessage] = useState('')
    const [phone, setPhone] = useState('')
    const SendMessage = async () => {
        if (phone.trim().length !== 14) {
            return toast.error("Raqamni kiriting")
        }
        if (message.trim().length === 0) {
            return toast.error("Habarni kriting")
        }
        const data = {
            message, phone
        }
        try {

            await sendMessage(data)
            setPhone("")
            setMessage("")
        } catch (err) {
            console.log(".")
        }
    }
    return (
        <div>
            <footer className="site-footer d-block" id={"footer"} style={{backgroundImage: `url(${rasm})`}}>
                <div className="container">
                    <div className="row mb-5">
                        <div id={"tel"} className="col-md-4">
                            <p>Men bilan bog'lanish uchun: <br/>
                                <i id={"tel1"} className="bi bi-telephone-outbound"
                                   style={{fontSize: "30px", color: "darkgrey"}}>+998-50-053-70- 27 </i> <br/>
                                <i id={"tel1"} className="bi bi-telephone-outbound"
                                   style={{fontSize: "30px", color: "darkgrey"}}>+998-90-870-32-55</i>
                            </p>
                        </div>
                        <div className="col-md-6 ml-auto mt-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <ul id={"lit"} className="list-unstyled" style={{marginRight: "-300px"}}>
                                        <Link to={"https://t.me/dilbekk070"}>
                                            <i className="bi bi-telegram m-3"
                                               style={{fontSize: "30px", color: "darkgrey"}}></i>
                                        </Link>
                                        <Link to={"https://www.instagram.com/mdcooder/"}>
                                            <i className="bi bi-instagram m-3"
                                               style={{fontSize: "30px", color: "darkgrey"}}></i>
                                        </Link>
                                        <Link to={"https://github.com/mukhtarovich-dev"}>
                                            <i className="bi bi-github m-3"
                                               style={{fontSize: "30px", color: "darkgrey"}}></i>
                                        </Link>
                                        <Link to={"https://www.facebook.com/profile.php?id=100091413892001"}>
                                            <i className="bi bi-facebook m-3"
                                               style={{fontSize: "30px", color: "darkgrey"}}></i>
                                        </Link>
                                        <Link to={"https://www.linkedin.com/in/dilbekk070/"}>
                                            <i className="bi bi-linkedin m-3 mt5"
                                               style={{fontSize: "30px", color: "darkgrey"}}></i> <br/>
                                        </Link>
                                    </ul>
                                    <div id={"footerInput"}>
                                        <label id={"label"} className={"text-light mb-2"}
                                               htmlFor="message">Telefon</label>
                                        <InputMask id="phone" mask="(99) 999-99-99"
                                                   onChange={e => setPhone(e.target.value)} value={phone}
                                                   placeholder="(99) 999-99-99"></InputMask>
                                        {/*<input className={"form"} type="number" id={"phone"}*/}
                                        {/*       placeholder={"+998_--_---_--_--"}*/}
                                        {/*       style={{width: "245px"}} value={phone}*/}
                                        {/*       onChange={e => setPhone(e.target.value)}/>*/}
                                        <label id={"label"} className={"text-light mb-2"}
                                               htmlFor="message">Habar</label>
                                        <textarea name="message"
                                                  placeholder={"Habarni  kiriting"}
                                                  id="message" cols="30" rows="3" value={message}
                                                  onChange={e => setMessage(e.target.value)}/>
                                        <button id={"sendmsg"} className={"btn btn-primary"}
                                                onClick={() => SendMessage()}>Yuborish
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}