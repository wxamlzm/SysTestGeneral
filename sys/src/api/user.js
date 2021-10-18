import axios from '../utils/axios'

// export function getUsers(){
//     return axios.get('/user')
// }

export function login(params) {
    return axios.post('/user/login', params)
}

export function getUsers(params) {
    return axios.get('/user/search', params)
}