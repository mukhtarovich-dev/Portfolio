import {BaseUrl} from "./BaseUrl.js";
import axios from "axios";

export const BaseConfig = {
    doPost: (url, data) => axios.post(
        BaseUrl + url, data
    ),
    doGet: (url) => axios.get(
        BaseUrl + url
    ),
    doPut: (url, id, data) => axios.put(
        `${BaseUrl}${url}/${id}`, data
    ),
    doDelete: (url) => axios.delete(
        BaseUrl+url
    )
}