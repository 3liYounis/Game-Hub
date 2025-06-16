import axios from "axios";
import { AxiosError, CanceledError } from "axios";
export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "THIS-IS-A-SECRET"
    }
})
export { AxiosError, CanceledError };