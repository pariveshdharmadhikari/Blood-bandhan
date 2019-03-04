import React, { Component } from 'react';
import './css/Header.css';
import defaultimage from './main-logo.png'

class Header extends Component {
    render() {
      return(
        <div>
          <div className="headermain" >
            <img alt="logo" className="imagesetleft" src={defaultimage} ></img>
            <div className="headername">
              <h1 className='headerText'>Blood-बंधन</h1>  
            </div>
          </div>
        </div>
      );
    }
}

export default Header;