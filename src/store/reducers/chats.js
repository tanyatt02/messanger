import { SUCCESS_CHATS_LOADING, SUCCESS_CHATS_SENDING, SUCCESS_CONTACTS_LOADING } from '../actions/chat-actions.js';
import update from 'react-addons-update';


const storeCHT={
    chats: [], contacts: []
};

export default (store=storeCHT, action) => {
    switch(action.type) {
        case SUCCESS_CHATS_LOADING: {
            console.log('from server', action.payload);
            
            return  update (store, { chats: {$set: action.payload.chats}})
        }
            
        case SUCCESS_CONTACTS_LOADING: {
            console.log('from server Contacts = ', action.payload);
            
            return update (store, { contacts: {$set: action.payload.contacts}})}
            
        case SUCCESS_CHATS_SENDING: {
            console.log('from server', action.payload);
            let { chatId }=action;
            return update (store,  { messages: {$push: [chatId]}})}
            
        
        default: return store ;
    }
}

