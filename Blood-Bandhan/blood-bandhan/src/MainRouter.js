import React from 'react';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import HomeBody from './HomeBody'
import SignupBody from './SignupBody'
import LoginBody from './LoginBody'
import Navbar from './Navbar';
import Header from './Header';

const mainRouter = (props) => {
    return (
        <div>

            <Router>
                <div>
                    <Header />
                    <Navbar />
                    <Route path="/" exact component={HomeBody} />
                    <Route path="/login" component={LoginBody} />
                    <Route path="/signup" component={SignupBody} />
                </div>
            </Router>
        </div>


    );

}
export default mainRouter;