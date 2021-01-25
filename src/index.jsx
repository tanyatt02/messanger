import React from 'react';
import ReactDom from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/css/styles.css';

import { BrowserRouter } from 'react-router-dom';
import Router from './router.jsx';

import { Provider } from 'react-redux';
import { initStore, history } from './store/index.js';
import { ConnectedRouter } from 'connected-react-router';



const container = document.getElementById('app');

//let messages = ['Привет', 'Как дела??'];



ReactDom.render( 
    <Provider store={ initStore() }>    <ConnectedRouter history={history}>
        <Router />
    </ConnectedRouter>
    </Provider>

    ,
    container
);


