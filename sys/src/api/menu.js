import axios from '../utils/axios'

export function menu() {
    return axios.get('/menu')
}