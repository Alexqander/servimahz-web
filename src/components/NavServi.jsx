import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const NavServi = () => {
  return (
    <>
      <Navbar
        className="navBackground p-0 navPrincipal"
        variant="light"
        style={{ position: 'fixed' }}
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center"
        >
          <Navbar.Brand href="/home">
            <h4 className="marca">sm</h4>
          </Navbar.Brand>
          <Nav className="">
            <Link className="enlace" to={'/home'}>
              <p className="mx-5">Inicio</p>
            </Link>
            <Link className="enlace" to={'/Nosotros'}>
              <p className="mx-5">Nosotros</p>
            </Link>
            <Link className="enlace" to={'/Servicios'}>
              <p className=" mx-5">Servicios</p>
            </Link>
            <Link className="enlace" to={'/Tienda'}>
              <p className=" mx-5">Tienda</p>
            </Link>
            <Link className="iniciarSesi" to={'/login'}>
              <p className=" mx-4 my-2">Ingresar</p>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
