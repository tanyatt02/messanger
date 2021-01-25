import { RSAA, getJSON } from 'redux-api-middleware'

// export let LOAD_CHATS = '@@chats/LOAD_CHATS'

export const START_CHATS_LOADING = '@@chats/START_CHATS_LOADING'
export const SUCCESS_CHATS_LOADING = '@@chats/SUCCESS_CHATS_LOADING'
export const ERR_CHATS_LOADING = '@@chats/ERR_CHATS_LOADING'


export const loadChats = (userId) => ({
    [RSAA]: {
        endpoint: '/api/chats/'+userId,
        method: 'GET',
        headers: {'Content-Type': 'application/json' },
        types: [
            START_CHATS_LOADING,
            {
                type: SUCCESS_CHATS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ chats: data.chats }))
            },
            ERR_CHATS_LOADING
        ]
    }
})

export const START_CONTACTS_LOADING = '@@chats/START_CONTACTS_LOADING'
export const SUCCESS_CONTACTS_LOADING = '@@chats/SUCCESS_CONTACTS_LOADING'
export const ERR_CONTACTS_LOADING = '@@chats/ERR_CONTACTS_LOADING'

export const loadContacts = (userId) => ({
    [RSAA]: {
        endpoint: '/api/chats/'+userId,
        method: 'GET',
        headers: {'Content-Type': 'application/json' },
        types: [
            START_CONTACTS_LOADING,
            {
                type: SUCCESS_CONTACTS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ contacts: data.contacts }))
            },
            ERR_CONTACTS_LOADING
        ]
    }
})

export const START_CHATS_SENDING = '@@chats/START_CHATS_SENDING'
export const SUCCESS_CHATS_SENDING = '@@chats/SUCCESS_CHATS_SENDING'
export const ERR_CHATS_SENDING = '@@chats/ERR_CHATS_SENDING'


export const addMsgToChat = (msgId) => ({
    [RSAA]: {
        endpoint: '/api/chat/c-1',
        method: 'POST',
        headers: {'Content-Type': 'application/json' },
        types: [
            START_CHATS_SENDING,
            {
                type: SUCCESS_CHATS_SENDING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({ messages: data.messages }))
            },
            ERR_CHATS_SENDING
        ]
    }
})