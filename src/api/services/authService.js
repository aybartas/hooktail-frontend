import { apiUrl,authEndpoint } from "../common/api-constans";
import http from '../common/axios-common'

export class AuthService{
    static signInEndpoint = "/SignIn";
    static signUp = "/SignUp";
    static signOutEndpoint = "/SignOut";

    static async signIn(data) {
    return http.post(`${apiUrl+authEndpoint + this.signInEndpoint}`, data);
    }
    
}