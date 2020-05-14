import axios from 'axios'
let baseUrl = 'https://sport-cal.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseUrl = 'http://localhost:3003'
}

const getSports = async () => {
    console.log("Baseurl:", baseUrl)
    const response = await axios.get(`${baseUrl}/api/sports`)
    return response.data
}

const getGyms = async () => {
    const response = await axios.get(`${baseUrl}/api/gyms`)
    return response.data
}

export default { getSports, getGyms }