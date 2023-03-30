import request from "@/utils/request"
import base from "./base"

let BASEROOT = base + "/api/v1"
if (process.env.NODE_ENV == "production") {
    BASEROOT = process.env.VUE_APP_URL + "/api/v1"
}
const user = {
    login(data) {
        return request({
            url: BASEROOT + "/login",
            method: "post",
            params: data
        })
    }
}
export default user