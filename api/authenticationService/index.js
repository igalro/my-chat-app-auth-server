import config from 'config';
import Request from "../index";
const {authenticationServiceUrl} = config;
export default new Request(authenticationServiceUrl);