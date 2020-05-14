import axios from 'axios'
let baseUrl = 'http://localhost:3003'

if (process.env.NODE_ENV === 'production') {
    baseUrl = 'https://sport-cal.herokuapp.com'
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