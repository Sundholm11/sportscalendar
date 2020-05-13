import axios from 'axios'

const getSports = async () => {
    const response = await axios.get('http://localhost:3003/api/sports')
    return response.data
}

const getGyms = async () => {
    const response = await axios.get('http://localhost:3003/api/gyms')
    return response.data
}

export default { getSports, getGyms }