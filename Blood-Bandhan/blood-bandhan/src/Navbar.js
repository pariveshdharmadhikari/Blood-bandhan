import React, { Component } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = { time: '', showHomeBody: true, showSignupBody: false, showLoginBody: false };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ time: this.tConvert(new Date().toLocaleTimeString()) })
        }, 1000)
    }

    tConvert (time) {
        // Check correct time format and split into components
        time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
      
        if (time.length > 1) { // If time format correct
          time = time.slice (1);  // Remove full string match value
          time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
          time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join (''); // return adjusted time or original string
      }


    // showOffline = (e) => {
    //     document.getElementById('Home').classList.remove('active');
    //     document.getElementById('Login').classList.remove('active');
    //     document.getElementById('Signup').classList.remove('active');
    //     document.getElementById('About').classList.remove('active');
    //     document.getElementById("" + e.target.id).classList.add('active');
    //     // document.getElementById('LoginBody').innerHTML=<div><LoginBody /></div>
    // }

    // renderHomeBody = (e) => {
    //     this.setState({ showHomeBody: true, showLoginBody: false, showSignupBody: false });
    //     return this.showOffline(e);
    // }

    // renderLoginBody = (e) => {
    //     this.setState({ showLoginBody:true, showHomeBody: false, showSignupBody: false });
    //     return this.showOffline(e);
    // }

    // renderSignupBody = (e) => {
    //     this.setState({ showSignupBody: true, showLoginBody: false, showHomeBody: false });
    //     return this.showOffline(e);
    // }






    render() {
        return (
            
                <div>
                    <div className="navbar">
                        <ul style={{ margin: 0, float: 'left', listStyleType: 'none', paddingInlineStart: '0px' }}>
                            <Link to="/" ><li id="Home" value="Home">Home</li></Link>
                            <Link to="/login" ><li id="Login" >Login</li></Link>
                            <Link to="/signup" ><li id="Signup" >Signup</li></Link>
                            <Link to="/about" ><li id="About" >About</li></Link>
                            <label id="time" >{this.state.time}</label>
                        </ul>
                    </div>
                </div>
           
);
    }
}

export default Navbar;