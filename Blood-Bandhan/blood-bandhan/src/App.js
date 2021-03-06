import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRouter from './MainRouter'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <MainRouter />
                </div>
            </Router>
        );
    }
}

export default App;
