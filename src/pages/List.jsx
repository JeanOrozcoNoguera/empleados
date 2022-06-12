// componetes
import { useEffect } from "react"
import { useState } from "react"
import Filter from "../components/Filter"
import Table from "../components/Table"
// hooks
import useEmployees from "../hooks/useEmployees"


const List = () => {

  const [employees, setEmployees] = useState([])

  useEffect(() => {
    const response = getEmployees()
    console.log(response);
  }, [])

  const { getEmployees } = useEmployees()

  return (
    <main className='container mx-auto px-4 py-4'>
      <article>
        <Filter />
        <Table />
      </article>
    </main>
  )
}

export default List