import axios from "axios"


const useEmployees = () => {

    const postEmployee = async(body) => {
        const url = 'http://127.0.0.1:8000/api/v1/register-employee'
        try {
            const response = await axios.post(url, body)
            return true
        } catch (error) {
            console.log(error)
            return false
        }
    }

    const getEmployees = async() => {
        const url = 'http://127.0.0.1:8000/api/v1/list-employees'
        try {
            const response = await axios.get(url)
            console.log(response)
            return response.data ? response.data : false
        } catch (error) {
            console.log(error)
            return false
        }
    }

    return {
        postEmployee,
        getEmployees
    }
}

export default useEmployees