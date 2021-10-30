import React from 'react'
import SHOP_DATA from '../static/shopData.js'
import CollectionPreview from '../components/collection-preview/collection-preview.jsx'

class ShopPage extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            collections:SHOP_DATA
        }
    }

    render (){

        const collections = this.state.collections;

        return(
            <div>
                <div>SHOP PAGE</div>
                
                <div className = 'shop-page'>                  
                    {
                        collections.map(collection => (             
                            <CollectionPreview key = {collection.id}  items = {collection.items} title = {collection.title} ></CollectionPreview>))
                    }
                </div>
            </div>
        );
    }

}

export default ShopPage;