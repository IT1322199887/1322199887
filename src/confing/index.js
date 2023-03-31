import base from "@/api/base";
let baseUrl = {
    code: base + "/api/v1"
}
if (process.env.NODE_ENV == "production") {
    baseUrl.code = process.env.VUE_APP_YRL + "/api/v1"
}
export default baseUrl