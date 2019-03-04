import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App'
import { Provider } from 'react-redux';
import {createStore,compose,applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import Reducers from './reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(Reducers,composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

