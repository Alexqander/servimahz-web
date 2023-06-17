import { Link } from 'react-router-dom'
import { useState } from 'react'
import { LogoNuevo } from '../assets/img/svg/LogoNuevo'

export const NavServi = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<>
			<header className='bg-white shadow-sm fixed top-0 w-full z-50'>
				<nav className='container p-6 mx-auto lg:flex lg:justify-between lg:items-center'>
					<div className='flex items-center justify-between'>
						<a href='#'>
							<LogoNuevo width='70%' height='100%'></LogoNuevo>
						</a>
						{/* Mobile menu button */}
						<div className='flex lg:hidden'>
							<button
								onClick={toggleMenu}
								type='button'
								className='text-gray-500  hover:text-gray-600  focus:outline-none focus:text-gray-600 '
								aria-label='toggle menu'
							>
								{!isOpen ? (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M4 8h16M4 16h16'
										/>
									</svg>
								) : (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-6 h-6'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
										strokeWidth='2'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6 18L18 6M6 6l12 12'
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
					{/* Mobile Menu open: "block", Menu closed: "hidden" */}
					<div
						className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:translate-x-0 opacity-100 lg:bg-transparent  lg:shadow-none  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:flex lg:items-center ${
							isOpen
								? 'translate-x-0 opacity-100'
								: 'opacity-0 -translate-x-full'
						}`}
					>
						<div className='flex flex-col space-y-4 lg:mt-0 lg:flex-row lg:-px-8 lg:space-y-0'>
							<Link to={'/home'}>
								<p className='text-gray-800 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500'>
									Inicio
								</p>
							</Link>
							<a
								className='text-gray-700 transition-colors duration-300 transform lg:mx-8  hover:text-blue-500'
								href='#seccNosotros'
							>
								Nosotros
							</a>
							<a
								className='text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500'
								href='#seccServicios'
							>
								Servicios
							</a>
							<a
								className='text-gray-700 transition-colors duration-300 transform lg:mx-8   hover:text-blue-500'
								href='#seccComentarios'
							>
								Comentarios
							</a>
						</div>
						<a
							className='block px-5 py-2 mt-4 text-sm text-center text-white capitalize bg-blue-600 rounded-lg lg:mt-0 hover:bg-blue-500 lg:w-auto'
							href='#seccContacto'
						>
							Contacto
						</a>
					</div>
				</nav>
			</header>
		</>
	)
}
