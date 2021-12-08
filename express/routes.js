import auth from './Auth/router';
import chat from "./Chat/router";

export default function loadRoutes(app) {
    app.use('/auth', auth)
    app.use('/chat', chat)
}