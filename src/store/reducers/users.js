import { SUCCESS_USERS_LOADING } from '../actions/user-actions.js';
import update from 'react-addons-update';


const storeUSR={
    id:'',
    name: '',
    users: []
};

export default (store=storeUSR, action) => {
    switch(action.type) {
        case SUCCESS_USERS_LOADING: {
            console.log('from server Users reducer', action.payload);
            
            return update (store, { id: {$set: action.payload.id }, name: {$set: action.payload.name }, users: {$set: action.payload.users}})}
            
        
            
        
        default: return store ;
    }
}

