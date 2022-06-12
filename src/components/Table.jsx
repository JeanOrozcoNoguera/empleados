const Table = () => {
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td className="px-6 py-4">Jhofran</td>
            <td className="px-6 py-4">Jose</td>
            <td className="px-6 py-4">Briceño</td>
            <td className="px-6 py-4">Peñalver</td>
            <td className="px-6 py-4">C.C</td>
            <td className="px-6 py-4">123121221</td>
            <td className="px-6 py-4">Colombia</td>
            <td className="px-6 py-4">micorreo@gmail.com</td>
            <th
              scope="row"
              className="px-6 py-4 font-medium text-lime-400 dark:text-white whitespace-nowrap"
            >
              Activo
            </th>
            <td className="px-6 py-4 text-right">
              <a
                href="#"
                className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
