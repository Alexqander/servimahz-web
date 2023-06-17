
import { LogoNuevo } from '../assets/img/svg/LogoNuevo'


import { WhatsAppIcon } from '../assets/img/svg/WhatsAppIcon'

export const FooterServi = () => {
	return (
		<>
			<footer aria-label='Site Footer' className='bg-white'>
				<div className='mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8'>
					<div className='flex justify-center text-teal-600'>
						<LogoNuevo width='225' height='100%'></LogoNuevo>
					</div>

					<p className='mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500'>
						servicio de refrigeracion mahz®
					</p>

					<nav aria-label='Footer Nav' className='mt-12'>
						<ul className='flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
							<li>
								<a
									className='text-gray-700 transition hover:text-gray-700/75'
									href='/'
								>
									Inicio
								</a>
							</li>

							<li>
								<a
									className='text-gray-700 transition hover:text-gray-700/75'
									href='#seccNosotros'
								>
									Nosotros
								</a>
							</li>

							<li>
								<a
									className='text-gray-700 transition hover:text-gray-700/75'
									href='#seccServicios'
								>
									Servicios
								</a>
							</li>

							<li>
								<a
									className='text-gray-700 transition hover:text-gray-700/75'
									href='#seccComentarios'
								>
									Comentarios
								</a>
							</li>

							<li>
								<a
									className='text-gray-700 transition hover:text-gray-700/75'
									href='#seccContacto'
								>
									Contacto
								</a>
							</li>
						</ul>
					</nav>

					<ul className='mt-12 flex justify-center gap-6 md:gap-8'>
						<li>
							<a
								href='https://www.facebook.com/servimahz'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:text-gray-700/75'
							>
								<span className='sr-only'>Facebook</span>
								<svg
									className='h-6 w-6'
									fill='currentColor'
									viewBox='0 0 24 24'
									aria-hidden='true'
								>
									<path
										fillRule='evenodd'
										d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
										clipRule='evenodd'
									/>
								</svg>
							</a>
						</li>

						<li>
							<a
								href='mailto:servimahz@hotmail.com?Subject=Cotizacion'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:text-gray-700/75'
							>
								<span className='sr-only'>email</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										d='M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25'
									/>
								</svg>
							</a>
						</li>

						<li>
							<a
								href='https://wa.me/527774576803/?text=Hola me podrias proporcionar mas informacion de tus servicios'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:text-gray-700/75'
							>
								<span className='sr-only'>Whatsapp</span>

								<WhatsAppIcon height='24' width='24'></WhatsAppIcon>
							</a>
						</li>

						<li>
							<a
								href='tel:7773210948'
								rel='noreferrer'
								target='_blank'
								className='text-gray-700 transition hover:text-gray-700/75'
							>
								<span className='sr-only'>telefono</span>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='w-6 h-6'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
									/>
								</svg>
							</a>
						</li>
					</ul>
				</div>
			</footer>
		</>
	)
}
