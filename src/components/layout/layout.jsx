import React from 'react'
import Navbar from './../navbar/navbar';
import MenuItem from './../menu-item/menu-item';


const Layout = () => {

    return (
        <div className="container">
            <div className="row">
                <Navbar></Navbar>
            </div>
            <div className="row">
                <div className="col">
                    <MenuItem></MenuItem>
                </div>
                <div className="col">
                    <MenuItem></MenuItem>

                </div>
                <div className="col">
                    <MenuItem></MenuItem>

                </div>
            </div>
        </div>
    );
}

export default Layout;

