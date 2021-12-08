import config from 'config';
import Request from "../index";
export const {ormUrl} = config;
export default new Request(ormUrl);
