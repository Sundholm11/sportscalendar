import axios from 'axios'

const getSports = async () => {
    console.log("Request sent")
    const response = await axios.get('http://localhost:3003/api/sports')
    return response.data
}

export default { getSports }