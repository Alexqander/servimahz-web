import { Link } from 'react-router-dom'
import { LogoAzul } from '../assets/img/svg/LogoAzul'

export const NavServi = () => {
	return (
		<>
			<header
				aria-label='Site Header'
				className='bg-white shadow-sm fixed top-0 w-full z-50'
			>
				<div className='mx-auto max-w-screen-xl p-4'>
					<div className='flex items-center justify-between gap-4 lg:gap-10'>
						<div className='flex lg:w-0 lg:flex-1'>
							<a href='#'>
								<LogoAzul width='55%' height='auto'></LogoAzul>
							</a>
						</div>

						<nav
							aria-label='Site Nav'
							className='hidden gap-8 text-sm font-medium md:flex'
						>
							<Link to={'/home'}>
								<p className='text-gray-500 underline-none'>Inicio</p>
							</Link>

							<a className='text-gray-500 underline-none' href='#seccNosotros'>
								Nosotros
							</a>
							<a className='text-gray-500 underline-none' href='#seccNosotros'>
								Servicios
							</a>
							<a className='text-gray-500 underline-none' href='#seccContacto'>
								Contacto
							</a>
						</nav>

						<div className='hidden flex-1 items-center justify-end gap-4 sm:flex'>
							<button className='rounded-lg bg-gray-100 px-5 py-2 text-sm font-medium text-gray-500'>
								Log in
							</button>

							<button className='rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium text-white'>
								Sign up
							</button>
						</div>

						<div className='lg:hidden'>
							<button
								className='rounded-lg bg-gray-100 p-2 text-gray-600'
								type='button'
							>
								<span className='sr-only'>Open menu</span>
								<svg
									aria-hidden='true'
									className='h-5 w-5'
									fill='none'
									stroke='currentColor'
									viewbox='0 0 24 24'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M4 6h16M4 12h16M4 18h16'
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth='2'
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</header>
		</>
	)
}
