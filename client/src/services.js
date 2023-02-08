import axios from 'axios'

const getSports = async () => {
	const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/sports`)
	return response.data
}

const getGyms = async () => {
	const response = await axios.get(`${process.env.VUE_APP_API_ENDPOINT}api/gyms`)
	return response.data
}

export default { getSports, getGyms }