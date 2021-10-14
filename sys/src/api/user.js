import axios from '../utils/axios'

export function getUsers(params){
    return axios.get('/user', params)
}

export function login(params) {
    return axios.post('/user/login', params)
}