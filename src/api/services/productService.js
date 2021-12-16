import http from '../common/axios-common'
import {apiUrl ,productsEndpoint } from '../common/api-constans';
    
    
    export class ProductService{
    
        static async getAll(){
            return http.get(`${apiUrl+productsEndpoint}`); 
        }
    
        static async get(id) {
            return http.get(`/${apiUrl+productsEndpoint}/${id}`);
          }
        
        static async create(data) {
        return http.post(`${apiUrl+productsEndpoint}`, data);
        }
    
        static async update(id, data) {
        return http.put(`/${apiUrl+productsEndpoint}/${id}`, data);
        }
    
        static async delete(id) {
        return http.delete(`/${apiUrl+productsEndpoint}/${id}`);
        }

    }