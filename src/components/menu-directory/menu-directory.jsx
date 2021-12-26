import React from 'react'
import MenuItem from './../menu-item/menu-item';
import {CollectionService} from '../../api/services/collectionService';
import {shopEndPoint} from '../../api/common/api-constans';

class MenuDirectory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: []
        }
    }

    async getCollections(){
        await CollectionService.getAll()
        .then(response => {
            this.setState({
                sections: response.data
            })
        })
        .catch(error => {
            console.log(error);
        })
    }
    async componentDidMount(){
        await this.getCollections();
    }

    render() {
        let sections = this.state.sections;
        return (sections.length > 0) ? 
        (<div>
            {sections
            .filter(section => section.products.length > 0)
            .map(section => (<MenuItem key={section.id} title={section.name} imagePath={section.products[0].imagePath} linkUrl= {shopEndPoint + "/" +section.name.toLowerCase() } ></MenuItem>))}
        </div>):
        null;
    }
}

export default MenuDirectory;