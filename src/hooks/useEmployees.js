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

<<<<<<< HEAD
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
=======
  const getEmployees = async () => {
    const url = 'http://127.0.0.1:8000/api/v1/list-employees'
    try {
      const response = await axios.get(url)
      console.log(response)
      return response.data.employees ? response.data.employees.data : false
    } catch (error) {
      console.log(error)
      return false
>>>>>>> 267257f04d18cc2d392675e85c0a6dc632650e69
    }

    return {
        postEmployee,
        getEmployees
    }
}

export default useEmployees