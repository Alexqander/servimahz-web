import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'

export const NavServi = () => {
	const links = [
		{ name: 'Inicio', reference: '/home' },
		{ name: 'Nosotros', reference: '#seccNosotros' },
		{ name: 'Servicios', reference: '#seccServicios' },
		{ name: 'Contacto', reference: '#seccContacto' },
		{ name: 'Tienda', reference: '/Tienda' },
	]

	return (
		<>
			<Navbar
				className='navBackground p-0 navPrincipal'
				variant='light'
				style={{ position: 'fixed' }}
			>
				<Container
					fluid
					className='d-flex justify-content-between align-items-center'
				>
					<Navbar.Brand href='/home'>
						<h4 className='marca'>sm</h4>
					</Navbar.Brand>
					<Nav>
						<div className='caja-links'>
							<Link className='enlace' to={'/home'}>
								<p className='mx-5'>Inicio</p>
							</Link>
							<a className='enlace' href='#seccNosotros'>
								<p className='mx-5'>Nosotros</p>
							</a>
							<a href='#seccServicios' className='enlace'>
								<p className=' mx-5'>Servicios</p>
							</a>
							<Link className='enlace' to={'/Tienda'}>
								<p className=' mx-5'>Tienda</p>
							</Link>
							<a href='#seccContacto' className='enlace'>
								<p className=' mx-5'>Contacto</p>
							</a>
						</div>
					</Nav>
				</Container>
			</Navbar>
			<Menu links={links} />
		</>
	)
}
