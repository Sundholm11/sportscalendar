import axios from 'axios'

const getSports = async () => {
	const response = await axios.get(`api/sports`)
	return response.data
}

const getGyms = async () => {
	const response = await axios.get(`api/gyms`)
	return response.data
}

export default { getSports, getGyms }