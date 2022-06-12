// Flowbite
import { Navbar } from "flowbite-react"
// router
import {Link} from 'react-router-dom'


const NavBar = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='bg-white'
    >
      <Navbar.Brand href="https://flowbite.com/">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Mis Empleados
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link to="register">Nuevo Empleado</Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar