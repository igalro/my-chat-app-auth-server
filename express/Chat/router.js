import express from "express";
import {asyncHandler} from "../ErrorHandler";
import {chatMessage} from "../../api/chatService/chat";

const chat = express.Router();

chat.post('/chat/1', asyncHandler(async (req, res) => {
    try {
        const data = req.body;
        const response = await chatMessage({...data, roomId: data.roomId});
        return res.send(response);
    } catch (e) {
        res.status(500).send(e)
    }
}));

export default chat;