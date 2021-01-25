 import { RSAA, getJSON } from 'redux-api-middleware'





export const START_USERS_LOADING = '@@chats/START_USERS_LOADING'
export const SUCCESS_USERS_LOADING = '@@chats/SUCCESS_USERS_LOADING'
export const ERR_USERS_LOADING = '@@chats/ERR_USERS_LOADING'



export const loadUsers = (userId) => ({
    [RSAA]: {
        endpoint: '/api/user/'+userId,
        method: 'GET',
        headers: {'Content-Type': 'application/json' },
        types: [
            START_USERS_LOADING,
            {
                type: SUCCESS_USERS_LOADING,
                payload: (action, state, res) => getJSON(res)
                    .then(data => ({id: userId, name: data.name,  users: data.users }))
            },
            ERR_USERS_LOADING
        ]
    }
})