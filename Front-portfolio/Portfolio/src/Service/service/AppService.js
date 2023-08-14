import {toast} from "react-toastify";
import {BaseConfig} from "../BaseConfig.js";
import {Api} from "../Api.js";

export const AddProject = async (data) => {
    try {
        await BaseConfig.doPost(Api.product, data)
        toast.success("Project Saqlandi")
    } catch (err) {
        toast.error(err.response.data.message)
    }

}
export const UploadPhoto = async (photo) => {
    try {
        const res = await BaseConfig.doPost(Api.uploadPhoto, photo)
        return res.data
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const DeleteProject = async (id) => {
    try {
        await BaseConfig.doDelete(Api.product + "?id=" + id)
        toast.success("O'chirildi")
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const ClearMessage = async () => {
    try {
        await BaseConfig.doDelete(Api.message)
        toast.success("Barcha habarlar tozalandi")
        window.location.reload()
    } catch (err) {
        toast.error(err.response.data.message)

    }
}
export const deleteDescription = async (id) => {
    try {
        await BaseConfig.doDelete(Api.description + "/" + id)
        toast.success("O'chirildi")
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const GetDescription = async (setDescription) => {
    try {
        const res = await BaseConfig.doGet(Api.description)
        setDescription(res.data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const AddDescription = async (data) => {
    try {
        await BaseConfig.doPost(Api.description, data)
        toast.success("Status Saqlandi")
    } catch (err) {
        toast.error(err.response.data.message)

    }
}

export const GetProject = async (setProject) => {
    try {
        const res = await BaseConfig.doGet(Api.product)
        setProject(res.data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const GetLit = async (setLit) => {
    try {
        const res = await BaseConfig.doGet(Api.lit)
        setLit(res.data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const SaveLit = async (data) => {
    try {
        await BaseConfig.doPost(Api.lit, data)
        toast.success("Skill Saqlandi")
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const deleteLit = async (id) => {
    try {
        await BaseConfig.doDelete(Api.lit + "/" + id)
        toast.success("skill O'chirildi")

    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const GetOneDescription = async (name, setDescription) => {
    try {
        const res = await BaseConfig.doGet(Api.description + "/" + name)
        setDescription(res.data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const sendMessage = async (data) => {
    try {
        await BaseConfig.doPost(Api.message, data)
        toast.success("Habar Yuborildi")
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const addPhoto = async (data) => {
    try {
        await BaseConfig.doPost(Api.photo, data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const getPhoto = async (setPhoto) => {
    try {
        const res = await BaseConfig.doGet(Api.photo)
        setPhoto(res.data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}
export const deletePhoto = async (id) => {
    try {
        await BaseConfig.doDelete(Api.photo + "/" + id)
    } catch (err) {
        toast.error(err.response.data.message)

    }
}
export const getMessage = async (setMessage) => {
    try {
        const res = await BaseConfig.doGet(Api.message)
        setMessage(res.data)
    } catch (err) {
        toast.error(err.response.data.message)
    }
}