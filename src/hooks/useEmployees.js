import axios from "axios"
// router
import { useNavigate } from 'react-router-dom';


const useEmployees = () => {
    let navigate = useNavigate();

    const postEmployee = async(body) => {
        const url = 'http://127.0.0.1:8000/api/v1/register-employee'
        try {
            const response = await axios.post(url, body)
            navigate('/')
            return true
        } catch (error) {
            console.log(error)
            alert('Error: Revise bien la info o ingresa otros datos, antes de Registra.')
            return false
        }
    }

    const putEmployee = async(body) => {
        const url = 'http://127.0.0.1:8000/api/v1/update-information'
        try {
            const response = await axios.post(url, body)
            console.log(response, 'xs');
            navigate('/')
            return true
        } catch (error) {
            console.log(error)
            alert('Error: Revise bien la info o ingresa otros datos, antes de actualizar.')
            return false
        }
    }

    const getEmployees = async() => {
        try {
            const url = 'http://127.0.0.1:8000/api/v1/list-employees'
            const result = await axios.get(url);
            return result;
        } catch (error) {
            console.log(error)
            alert('Error: No se listo bien la info')
            return false
        }

    }

    const getEmployee = async(id) => {
        try {
            const url = `http://127.0.0.1:8000/api/v1/information-employee&id=${id}`
            const result = await axios.get(url);
            return result;
        } catch (error) {
            console.log(error)
            alert('Error: Al mostra esta info.')
            return false
        }
    }

    return {
        postEmployee,
        getEmployees,
        getEmployee,
        putEmployee
    }

}

export default useEmployees