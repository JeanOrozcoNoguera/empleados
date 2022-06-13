import { useEffect, useState } from "react"
// hooks
import useEmployees from "../hooks/useEmployees"
import { Link } from 'react-router-dom'



const Table = () => {
  const [ employees, setEmployees ] = useState([]);
  const { getEmployees } = useEmployees()

  useEffect(() => { 
    const result = getResponse();
    result.then(res => {
      setEmployees(res.data.employees.data);
    })
  }, []);
  
  const getResponse = () => {
    return getEmployees();
  }

  return (
    <div className="relative overflow-x-auto mt-4 rounded shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Primer Nombre
            </th>
            <th scope="col" className="px-6 py-3">
              Otro Nombres
            </th>
            <th scope="col" className="px-6 py-3">
              Primer Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Segundo Apellido
            </th>
            <th scope="col" className="px-6 py-3">
              Tipo Indentificación
            </th>
            <th scope="col" className="px-6 py-3">
              Número Indentificación
            </th>
            <th scope="col" className="px-6 py-3">
              País
            </th>
            <th scope="col" className="px-6 py-3">
              Correo
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{employee.name}</td>
                <td className="px-6 py-4">{employee.other_names}</td>
                <td className="px-6 py-4">{employee.surname}</td>
                <td className="px-6 py-4">{employee.second_surname}</td>
                <td className="px-6 py-4">{employee.type_id}</td>
                <td className="px-6 py-4">{employee.number_id}</td>
                <td className="px-6 py-4">{employee.country}</td>
                <td className="px-6 py-4">{employee.email}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-lime-400 dark:text-white whitespace-nowrap"
                >
                  Activo
                </th>
                <td className="px-6 py-4 text-right">
                  <Link to={`edit/${employee.id}`}>
                    <span
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </span>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">name</td>
              <td className="px-6 py-4">other</td>
              <td className="px-6 py-4">surname</td>
              <td className="px-6 py-4">second</td>
              <td className="px-6 py-4">type</td>
              <td className="px-6 py-4">number</td>
              <td className="px-6 py-4">country</td>
              <td className="px-6 py-4">email</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-lime-400 dark:text-white whitespace-nowrap"
              >
                Activo
              </th>
              <td className="px-6 py-4 text-right">

                <span
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </span>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
