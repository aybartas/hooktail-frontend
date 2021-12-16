import { apiUrl,collectionsEndpoint } from "../common/api-constans";
import http from '../common/axios-common'

export class CollectionService{
    
    static async getAll(){
        return http.get(`${apiUrl+collectionsEndpoint}`); 
    }

    static async get(id) {
        return http.get(`/${apiUrl+collectionsEndpoint}/${id}`);
      }
    
    static async create(data) {
    return http.post(`${apiUrl+collectionsEndpoint}`, data);
    }

    static async update(id, data) {
    return http.put(`/${apiUrl+collectionsEndpoint}/${id}`, data);
    }

    static async delete(id) {
    return http.delete(`/${apiUrl+collectionsEndpoint}/${id}`);
    }

}