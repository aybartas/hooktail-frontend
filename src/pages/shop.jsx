import React from 'react'
import CollectionPreview from '../components/collection-preview/collection-preview.jsx'
import {CollectionService} from '../api/services/collectionService'
class ShopPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            collections:[]
        }
    }

    async getProducts(){
        await CollectionService.getAll()
        .then(response => {
            this.setState({
                collections: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    async componentDidMount(){
        await this.getProducts();
    }

    render (){

        const collections = this.state.collections;

        return (collections.length > 0) ? (<div>                
            <div className = 'shop-page'>                  
                {
                    collections.map(collection => (             
                        <CollectionPreview key = {collection.id}  items = {collection.products} title = {collection.name} ></CollectionPreview>))
                }
            </div>
            </div>) 
        : null;
    }
}

export default ShopPage;