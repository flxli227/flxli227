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

      // Take the current URL and get what is after /#/
      let currentURL = window.location.href;
      let searchTerm = "/#/";
      let UrlAfterSearchTerm = currentURL.indexOf(searchTerm) + searchTerm.length;

      // Removes spaces/ captial letters etc
      let slug = sluggify(currentURL.substring(UrlAfterSearchTerm));

      // Make the className default as "menuItem"
      let className = "menuItem";
      // If the menuItem.name is included in the slug, add " menuItemSelcted" at the end of the classname
      if(slug.includes(sluggify(menuItem.name))){
        className += " menuItemSelected"
      }

      return(
        <Link 
          key={menuItem.name}
          to={"/"+ menuItem.name}
          className = {className}
          onClick={this.SideNavClose}
        >
          <div>
            {menuItem.name}
          </div>
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
            <Link
              to={"/"}  
            >
              Felix Li
            </Link>
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
