import Request from './index';

export function validateToken(token) {
    return Request.get('login/validate', token);
}
