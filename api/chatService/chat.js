import Request from "../index";

const ChatRequest = new Request('http://localhost:4000');

export async function chatMessage(data) {
    return await ChatRequest.post("chat/:roomId", data);
}