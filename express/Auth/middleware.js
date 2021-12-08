import _ from "underscore";
import {nonSecurePaths, nonSecureRegex, secureAndUnsecurePaths} from "./consts";
import {validateToken} from "../../api/authenticationService/login";

export async function userValidationMiddleware(req, res, next) {
    try{
        const token = req.headers['authorization'];
        if ( _.contains(nonSecurePaths, req.path) ||
            (nonSecureRegex.find(r => r.test(req.path))) ||
            (_.contains(secureAndUnsecurePaths, req.path) && token === undefined)) return next();
        const response = await validateToken(token);
        res.locals.userId = response.userId;
        next()
    }
    catch (e) {
        res.status(401).send('Unauthorized')
    }
}
