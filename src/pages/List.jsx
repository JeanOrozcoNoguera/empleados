// componetes
import Filter from "../components/Filter"
import Table from "../components/Table"



const List = () => {
  return (
    <main className='container mx-auto px-4 py-4'>
      <article>
        <Filter />
        <Table/>
      </article>
    </main>
  )
}

export default List