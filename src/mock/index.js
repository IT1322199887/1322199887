import axios from "axios"
import MockAdapter from "axios-mock-adapter"
import login from "./login.json"
const Mock = new MockAdapter(axios)
Mock.onPost("http://10.0.0.100/api/v1/login").reply(config => {
    return [200, {
        ...login
    }]
})
export default Mock