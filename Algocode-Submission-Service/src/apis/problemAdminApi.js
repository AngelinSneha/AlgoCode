const axiosInstance = require('../config/axiosInstance');
const { PROBLEM_ADMIN_SERVICE_URL } = require('../config/serverConfig')

const PROBLEM_ADMIN_API_URL = `${PROBLEM_ADMIN_SERVICE_URL}/api/v1`;

async function fetchProblemDetials(problemId) {
    try {
        const uri = PROBLEM_ADMIN_API_URL + `/problems/${problemId}`;
        const response = await axiosInstance.get(uri);
        console.log("API Response: ", response);
        return response.data;
    } catch (error) {
        console.log('Something went wrong', error)
    }
}

module.exports = {
    fetchProblemDetials
}