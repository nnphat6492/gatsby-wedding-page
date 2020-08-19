import React, { Component } from "react";
import {Link, NavLink} from "react-router-dom";
import "../assets/stylesheets/navbar.sass"
import logo_light from "../assets/images/logo_light.png";
import logo_dark from "../assets/images/logo_dark.png";




function Navbar(){
  const textColor = 'light'


  return (
    <section className="navbar-wrapper">
        <nav className={'navbar-custom nav-text-' + textColor}>
          <div className="nav-logo-and-tagline">
            <a className="nav-logo" to={"/"}>
              <img src={ logo_light } alt="logo"/>
            </a>
            <div className="nav-separator-wrapper">
              <div className="nav-separator"></div>
            </div>
            <div className="nav-tagline">
              capture best moments
            </div>
          </div>
          <ul className="nav-menu">
            <li className="nav-item">
              <a to="/">ABOUT</a>
            </li>
            <nav className="nav-item">
              <a className="nav-item-text" to="/" className="clearfix">GALLERY</a>
              <div className="nav-sub-menu-wrapper">
                <div className="nav-sub-menu">
                  <a className="nav-sub-link" to="/gallery">WEDDING</a>
                  <a className="nav-sub-link" to="/gallery">FAMILY</a>
                  <a className="nav-sub-link" to="/gallery">NEW BORN</a>
                  <a className="nav-sub-link" to="/gallery">PREGNANT</a>
                </div>
              </div>

            </nav>
            <div className="nav-item">
              <a to="/">BLOG</a>
            </div>
            <div className="nav-item">
              <a to="/">CONTACT</a>
            </div>
          </ul>
        </nav>
      </section>
  );
}

// export default class Navbar extends Component {
//   state = {
//     isOpen: false
//   };
//   handleToggle = () => {
//     this.setState({ isOpen: !this.state.isOpen });
//   };
//   render() {
    
//   }
// }

export default Navbar
