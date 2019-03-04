import React, { Component } from 'react';
import './css/LoginBody.css';
// import defaultimage from './main-logo.png'

class LoginBody extends Component {
  render() {
    return (
      <div>

   
        <div className="container">
          <form className="main-form">
            <div className="title">
              Sign UP
						</div>

            <div className="user-name">
              Username
						</div>
            <div data-validate="Username is required">
              <input type="text" name="username" />
            </div>

            <div className="password">
              Password
						</div>
            <div data-validate="Password is required">
              <input type="password" name="pass" />
            </div>

            <div className="forgot-pass">
              <a href="https://www.google.com">
                Forgot?
							</a>
            </div>

            <div className="submit-button">
              <button type="submit">
                Sign In
							</button>
            </div>

            <div className="btn-facebook">
              <button className='btn btn-primary' >
                <a href="https://www.google.com" style={{ color: 'white' }}>
                  Facebook
								</a>
              </button>
            </div>

            <div className="btn-google">
              <button className="btn btn-secondary">
                <a href="/users/google-oauth/" style={{ textTransform: "none" }}>
                  <div className="left">
                    <img width="20px" alt="Google &quot;G&quot; Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png" />
                  </div>
                  Google
                </a>
              </button>
            </div>

            <hr></hr>

            <div>
              <div className="text">
                Not a member?
							</div>

              <div className="sign-up">
                <a href="/signup">
                  Sign up
								</a>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginBody;