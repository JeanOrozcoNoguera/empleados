import axios from "axios"


const useEmployees = () => {

  const postEmployee = async (body) => {
    const url = 'http://127.0.0.1:8000/api/v1/register-employee'
    try {
      const response = await axios.post(url, body)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    postEmployee
  }
}

export default useEmployees