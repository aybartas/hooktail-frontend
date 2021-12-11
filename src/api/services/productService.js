
import http from '../common/axios-common'
import { productsEndpoint } from '../common/api-constans';


export class ProductService{

    getAll(){
        return http.get(`${productsEndpoint}`); 
    }

    get(id) {
        return http.get(`/${productsEndpoint}/${id}`);
      }
    
    create(data) {
    return http.post(`${productsEndpoint}`, data);
    }

    update(id, data) {
    return http.put(`/${productsEndpoint}/${id}`, data);
    }

    delete(id) {
    return http.delete(`/${productsEndpoint}/${id}`);
    }
    
}

