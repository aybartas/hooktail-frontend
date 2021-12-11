import http from '../common/axios-common'
import {usersEndpoint} from '../common/api-constans'

export class UserService{

    getAll(){
        return http.get(`${usersEndpoint}`); 
    }

    get(id) {
        return http.get(`/${usersEndpoint}/${id}`);
      }
    
    create(data) {
    return http.post(`${usersEndpoint}`, data);
    }

    update(id, data) {
    return http.put(`/${usersEndpoint}/${id}`, data);
    }

    delete(id) {
    return http.delete(`/${usersEndpoint}/${id}`);
    }
}

