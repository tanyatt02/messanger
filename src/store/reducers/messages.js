import { SEND_MESSAGE, SUCCESS_MESSAGES_LOADING } from '../actions/message-actions.js';
import update from 'react-addons-update';


const storeMSG={
    messages: []
};

export default ( store = storeMSG, action ) => {
        switch(action.type) {

            case SUCCESS_MESSAGES_LOADING: {
            console.log('from server Messages', action.payload);
            
            return update (store, { messages: {$set: action.payload.messages}})}
            
            case SEND_MESSAGE: {
//               return update (store, { messages: {$set: action.payload.messages}})} 
            let { text, sender, chatId } = action.payload;
                console.log('new msg data = ',{ text, sender, chatId });
             
            return update (store, { messages: {$set: action.payload}})}
            
            
        default: return(store);
    }
}

