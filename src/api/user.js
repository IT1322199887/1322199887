import request from "@/utils/request"
import base from "./base"

let BASEROOT = base
if (process.env.NODE_ENV == "production") {
    BASEROOT = process.env.VUE_APP_URL
}
const user = {
    login(data) {
        return request({
            url: BASEROOT + "/data",
            method: "get",
            params: data
        })
    }
}
export default user