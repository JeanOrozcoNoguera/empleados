import { useState, useEffect } from 'react';
// router
import { useParams } from "react-router-dom";
// hooks
import useEmployees from '../hooks/useEmployees'



const INITIAL_STATE = {
  name : "",
  other_names : "",
  surname : "",
  second_surname : "",
  country : 1,
  type_id : 1,
  number_id : "",
  date_admission : "",
  area : 1
}

const Edit = () => {

  const [employee, setEmployee] = useState(INITIAL_STATE)
  const { putEmployee, getEmployee } = useEmployees()
  let params = useParams();


  useEffect(() => { 
    const result = getResponse();
    result.then(res => {
      setEmployee(res.data.information);
    })
  }, []);
  
  const getResponse = () => {
    return getEmployee(params.id);
  }

  const handleChange = (e) => {
    setEmployee(
      {
        ...employee,
        [e.target.name]: e.target.value,
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const response = putEmployee(employee)
  }

  return (
    <main className="container mx-auto px-4 py-4">
      <form onSubmit={handleSubmit} className="bg-white p-3 rounded shadow">
        <div className="grid gap-6 mb-6 lg:grid-cols-2">
          {/* primer nombre */}
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primer Nombre
            </label>
            <input
              id="first_name"
              type="text"
              name='name'
              value={employee.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Nombre"
              onChange={handleChange}
              required
              pattern="[A-Z]+"
              maxLength="20"
            />
          </div>
          {/* Otros nombres */}
          <div>
            <label
              htmlFor="others"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Otros Nombres
            </label>
            <input
              id="others"
              type="text"
              name='other_names'
              value={employee.other_names}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Otros Nombres"
              onChange={handleChange}
              maxLength="50"
              pattern="[A-Z]+"
            />
          </div>
          {/* Apellido */}
          <div>
            <label
              htmlFor="surname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Primer Apellido
            </label>
            <input
              type="text"
              id="surname"
              name='surname'
              value={employee.surname}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Apellido"
              onChange={handleChange}
              required
              pattern="[A-Z]+"
              maxLength="20"
            />
          </div>
          {/* segundo apellido */}
          <div>
            <label
              htmlFor="second_surname"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Segundo Apellido
            </label>
            <input
              type="text"
              id="second_surname"
              name='second_surname'
              value={employee.second_surname}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Segundo Apellido"
              onChange={handleChange}
              maxLength="20"
              pattern="[A-Z ]+"
            />
          </div>
          {/* pais */}
          <div>
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              País
            </label>
            <select
              id="countries"
              name='country'
              value={employee.country}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              required
            >
              <option value="default">Seleccione...</option>
              <option value={1}>Colombia</option>
              <option value={2}>Estados Unidos</option>
            </select>
          </div>
          {/* tipo I */}
          <div>
            <label
              htmlFor="type_id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Tipo de Identificación
            </label>
            <select
              id="type_id"
              name='type_id'
              value={employee.type_id}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              required
            >
              <option value="default">Seleccione...</option>
              <option value={1}>Cédula de Ciudadanía</option>
              <option value={2}>Cédula de Extranjería</option>
              <option value={3}>Pasaporte</option>
              <option value={4}>Permiso Especial</option>
            </select>
          </div>
        </div>
        {/* # I */}
        <div className="mb-6">
          <label
            htmlFor="number_id"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Numero de Identificación
          </label>
          <input
            type="text"
            id="number_id"
            name='number_id'
            value={employee.number_id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="1000000105"
            onChange={handleChange}
            required
            maxLength="20"
            pattern="[A-Z0-9]+"
          />
        </div>
        {/* Fecha */}
        <div className="mb-6">
          <label
            htmlFor="date_admission"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Fecha de Ingreso
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              id='date_admission'
              datepicker='true'
              name='date_admission'
              value={employee.date_admission}
              type="date"
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange}
              required
            />
          </div>
        </div>
        {/* Area */}
        <div className="mb-6">
          <label
            htmlFor="area"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            Área
          </label>
          <select
            id="area"
            name='area'
            value={employee.area}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            required
          >
            <option value="default">Seleccione...</option>
            <option value={1}>Administración</option>
            <option value={2}>Financiera</option>
            <option value={3}>Compras</option>
            <option value={4}>Infraestructura</option>
            <option value={5}>Operación</option>
            <option value={6}>Talento Humano</option>
            <option value={7}>Servicios Varios</option>
          </select>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Editar
        </button>
      </form>
    </main>
  );
};

export default Edit;
