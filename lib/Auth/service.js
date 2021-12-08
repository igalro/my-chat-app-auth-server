import {registerUser as registerManagerApi} from "../../api/orm/user";

export async function registerUser(data) {
    const user = await registerManagerApi(data);
    return user;
}