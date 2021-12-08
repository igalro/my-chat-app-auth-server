process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

import express from 'express';
import loadRoutes from "./express/routes";
import {loadMiddlewares} from "./express/middlewares";

const app = express();
const PORT = process.env.PORT || 5000;

loadMiddlewares(app);
loadRoutes(app);

app.listen(PORT, () => {
    console.log("express server started at port "+PORT);
});
