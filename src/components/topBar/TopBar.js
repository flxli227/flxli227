import { Outlet, Link } from "react-router-dom";
import React from 'react';
import './TopBar.css';
import {sluggify} from './../../Utils'

class TopBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      sideNavIsOpened: false,
    };
  }

  changeSideNavStatus = () => {
    this.setState(
      {sideNavIsOpened: !this.state.sideNavIsOpened}
    );
  }

  SideNavClose = () => {
    this.setState(
      {sideNavIsOpened: false}
    );
  }

  render() {

    // Show each menu item
    let menuItems = this.props.menuItemsData.map((menuItem) => {

      // Get the URL of the page minus the domain name and "/"
      let slug = sluggify(window.location.pathname).slice(1);

      // Make the className default as "menuItem"
      let className = "menuItem";
      // If the menuItem.name is the same as the slug add " menuItemSelcted" at the end of the classname
      if(sluggify(menuItem.name) === slug){
        className += " menuItemSelected"
      }

      return(
        <Link 
          key={menuItem.name}
          to={"/"+ menuItem.name}
          className = {className}
          onClick={this.SideNavClose}
        >
          {menuItem.name}
        </Link>
      )
    })

    

    // Hide or show Side Nav Bar
    let sideNav;
    sideNav = this.state.sideNavIsOpened?(
      <>
        <div className="sideNav">
          <div className="menuItemContainer">
            {menuItems}
          </div>
          <div 
            className="closeButton"
            onClick={this.SideNavClose}
          ></div>
        </div>
        <div 
          className="backgroundDarker"
          onClick={this.SideNavClose}
        />
      </>
    ):<></> 
      
    return (
      <>
        <div className="TopBar">
          <div className="nameContainer">
            Felix Li
            <div className="hamburgerContainer">
              <div 
                className="hamburger"
                onClick={this.changeSideNavStatus}
              />
            </div>
          </div>
          {sideNav}
          <div className="desktopMenuItemsContainer">
            {menuItems}
          </div>
        </div>
        <Outlet />
      </>
    );
  }
}

export default TopBar;
