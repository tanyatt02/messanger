import { RSAA, getJSON } from 'redux-api-middleware'

//export let SEND_MSG='@@messages/SEND';
//
//
//
//export let sendMessage = (text,sender, senderName)=>({
//    type: SEND_MSG, text, sender, senderName
//})


export const START_MESSAGES_LOADING = '@@chats/START_MESSAGES_LOADING'
export const SUCCESS_MESSAGES_LOADING = '@@chats/SUCCESS_MESSAGES_LOADING'
export const ERR_MESSAGES_LOADING = '@@chats/ERR_MESSAGES_LOADING'



export const loadMessages = (chatId) => ({
    [RSAA]: {
        endpoint: '/api/chat/'+chatId,
        method: 'GET',
        headers: {'Content-Type': 'application/json' },
        types: [
            START_MESSAGES_LOADING,
            {
                type: SUCCESS_MESSAGES_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ messages: data.messages }))
            },
            ERR_MESSAGES_LOADING
        ]
    }
})

export const SEND_MESSAGE = '@@chats/SEND_MESSAGE'


//const addSnack = (message: EventMessage) => ({ type: ADD_SNACK, payload: { message } });


export const sendMessage = (text, sender, chatId) => ({ type: SEND_MESSAGE, payload: { text: text, sender: sender, chatId: chatId } })