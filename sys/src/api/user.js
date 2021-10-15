import axios from '../utils/axios'

export function getUsers(){
    return axios.get('/user')
}

export function login(params) {
    return axios.post('/user/login', params)
}

export function searchUser(params) {
    return axios.get('/user/search', params)
}