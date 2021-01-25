import msgReducer from './messages';
import chtReducer from './chats';
import usrReducer from './users';


import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

export default history => combineReducers(
{msgReducer, chtReducer,usrReducer, router: connectRouter(history)})
