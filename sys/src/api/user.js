import axios from '../utils/axios'

export function getUsers(){
    return axios.get('/user')
}

export function login(params) {
    return axios.post('/user/login', params)
}