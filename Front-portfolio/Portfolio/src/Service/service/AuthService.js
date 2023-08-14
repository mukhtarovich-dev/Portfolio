import {BaseConfig} from "../BaseConfig.js";
import {Api} from "../Api.js";
import {ifStatus} from "../../utils/utils.js";
import {toast} from "react-toastify";

export const LoginHandler = async (data) => {
    if (data.phoneNumber.trim().length === 0) {
        return toast.error("tel raqam kiritish shart")
    }
    if (data.password.trim().length === 0) {
        return toast.error("parolda xatolik")
    }
    try {
        const res = await BaseConfig.doPost(Api.login, data)
        if (ifStatus(res.status)) {
            console.log(res.data)
            localStorage.setItem("id", res.data.user.id)
            localStorage.setItem("firstName", res.data.user.firstName)
            localStorage.setItem("lastName", res.data.user.lastName)
            localStorage.setItem("phoneNumber", res.data.user.phoneNumber)
            localStorage.setItem("role", res.data.user.authorities.roleName)
            localStorage.setItem("token", res.data.resToken.token)
            localStorage.setItem("tokenType", res.data.resToken.tokenType)
            toast.success("kuting...")
            setTimeout(() => {
                window.location.reload()
            }, 2000)
        }
    } catch (err) {
        toast.error("xatolik")
    }
}