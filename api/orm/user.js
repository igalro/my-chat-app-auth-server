import Request from "../index";
import OrmRequest from "./index";

const AuthRequest = new Request('http://localhost:6000/');

export async function registerUser(data) {
    const user = await OrmRequest.post("user/register", data);
    if (user) {
        const res = await AuthRequest.post("/login", data);
        return res;
    }
}

export async function loginUser(data) {
    return await AuthRequest.post("login", data);
}
