


const Filter = () => {
  return (
    <div className="bg-white p-3 rounded shadow">
      <label
        htmlFor="countries"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        Filtrar por:
      </label>
      <select
        id="countries"
        defaultValue='default'
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Seleccione...</option>
        <option value="PN">Primer Nombre</option>
        <option value="ON">Otros Nombres</option>
        <option value="PA">Primer Apellido</option>
        <option value="SA">Segundo Apellido</option>
        <option value="TI">Tipo de Identificación</option>
        <option value="NI">Numero de Identificación</option>
        <option value="PE">País</option>
        <option value="CE">Correo</option>
        <option value="ES">Estado</option>
      </select>
      <div className="mt-2">
        <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Buscar..."/>
      </div>
    </div>
  );
};

export default Filter;
