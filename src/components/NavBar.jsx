// Flowbite
import { Navbar } from "flowbite-react"
// router
import {Link, useLocation} from 'react-router-dom'


const NavBar = () => {
  let location = useLocation();
  console.log(location.pathname);

  return (
    <Navbar
      fluid={true}
      rounded={true}
      className='bg-white'
    >
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white uppercase text-sky-500">
          Mis Empleados
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      {location.pathname === '/' && 
        <Navbar.Collapse>
          <Link to="register">Nuevo Empleado</Link>
        </Navbar.Collapse>
      }
    </Navbar>
  )
}

export default NavBar