import { createStore, compose, applyMiddleware } from 'redux';
import initReducers from './reducers';
import middlewares from '../middlewares';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';


const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};
//export default () => {
     // let initStore = { a: 100500 };
     // return createStore(initReducers, initStore)
//     return createStore(initReducers, {});
// }

export const history = createBrowserHistory();

export function initStore ()  { 
    return createStore(
        initReducers(history), 
        {},
        compose(
            applyMiddleware(routerMiddleware(history), ...middlewares),
        reduxDevTool)
        );
}

//export function initStore() {
//    return createStore(
//        initReducers(history), 
//        {},
//        compose(
//            applyMiddleware(routerMiddleware(history), ...middlewares),
//            reduxDevTool
//            )
//        );
//}