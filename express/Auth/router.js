import express from "express";
import {asyncHandler} from "../ErrorHandler";
import {registerUser} from "../../lib/Auth/service";
import {loginUser} from "../../api/orm/user";

const auth = express.Router();

auth.get('/', asyncHandler(async (req, res) => {
    return res.send("hi");
}));

auth.post('/login', async (req, res) => {
    try{
        const data = req.body;
        const response = await loginUser(data);
        return res.send(response);
    }
    catch (e) {
        res.status(500).send(e)
    }
});

auth.post('/register', asyncHandler(async (req, res) => {
    try{
        const data = req.body;
        const response = await registerUser({...data, email: data.email, password: data.password});
        return res.send(response);
    }
    catch (e) {
        res.status(500).send(e)
    }
}))

export default auth;
