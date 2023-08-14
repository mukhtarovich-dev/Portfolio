import {BaseUrl} from "./BaseUrl.js";

export const Api = {
    message: '/message',
    login: '/auth/login',
    product: '/project',
    photo: '/photo',
    lit: "/lit",
    description: '/description',
    uploadPhoto: '/attachment/upload',
    downloadPhoto: BaseUrl + '/attachment/download?id='
}