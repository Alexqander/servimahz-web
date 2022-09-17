import { Container, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Menu } from './Menu'
import styles from '../assets/css/navServi.module.css'
import { Logo } from '../assets/img/svg/Logo'

export const NavServi = () => {
	const links = [
		{ name: 'Inicio', reference: '/home' },
		{ name: 'Nosotros', reference: '#seccNosotros' },
		{ name: 'Servicios', reference: '#seccServicios' },
		{ name: 'Contacto', reference: '#seccContacto' },
	]

	return (
		<>
			<Navbar
				className={`p-0 ${styles.navPrincipal}`}
				variant='light'
				style={{ position: 'fixed', zIndex: '1' }}
			>
				<Container
					fluid
					className='d-flex flex-row justify-content-between align-items-center py-3'
				>
					<Navbar.Brand href='/home'>
						<Logo width='55%' height='auto'></Logo>
					</Navbar.Brand>
					<Nav>
						<div className={`pt-2 ${styles.cajaLinks}`}>
							<Link className={styles.enlace} to={'/home'}>
								<p className='mx-5'>Inicio</p>
							</Link>
							<a className={styles.enlace} href='#seccNosotros'>
								<p className='mx-5'>Nosotros</p>
							</a>
							<a href='#seccServicios' className={styles.enlace}>
								<p className=' mx-5'>Servicios</p>
							</a>
							<a href='#seccContacto' className={styles.enlace}>
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
