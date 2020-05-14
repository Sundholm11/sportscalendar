import axios from 'axios'
const baseUrl = '/api'

const getSports = async () => {
    const response = await axios.get(`${baseUrl}/sports`)
    return response.data
}

const getGyms = async () => {
    const response = await axios.get(`${baseUrl}/gyms`)
    return response.data
}

export default { getSports, getGyms }