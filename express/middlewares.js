import cors from "cors";
import bodyParser from 'body-parser';
import {userValidationMiddleware} from "./Auth/middleware";

export function loadMiddlewares(app) {
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(userValidationMiddleware);
}
