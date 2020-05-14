require('dotenv').config()

import axios from 'axios'

const getSports = async () => {
    const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}/sports`)
    return response.data
}

const getGyms = async () => {
    const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}/gyms`)
    return response.data
}

export default { getSports, getGyms }