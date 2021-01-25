import { SUCCESS_MESSAGES_LOADING, sendMessage} from '../store/actions/message-actions.js';

export default store => next => action => {
    switch(action.type) {
        case SUCCESS_MESSAGES_LOADING: {
            if ( action.sender == 'Darth Vader' ){
                setTimeout(() => {
                    return store.dispatch( sendMessage('La-la-la', 'Bot'), 1000);
                    console.log('BOT');
                })
            }
        }
    }
    return next(action);
}