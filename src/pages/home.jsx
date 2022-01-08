
import React from 'react'
import MenuDirectory from './../components/menu-directory/menu-directory';
import { connect } from 'react-redux';
const HomePage = ({currentUser}) => {
    console.log("home page render");
    console.log("currentUser:" + currentUser);

    return(
            <MenuDirectory></MenuDirectory>
    );
}

const mapStateToProps = ({ user }) => ({
    currentUser: user.authenticatedUser
  })


export default connect(mapStateToProps,null)(HomePage);