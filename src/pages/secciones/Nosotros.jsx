import NosotrosImage from '../../assets/img/img-cards/nuevas/negocio1.jpg'

export const Nosotros = () => {
	return (
		<>
			<section className='text-gray-600 body-font'>
				<div className='container px-5 py-24 mx-auto flex flex-wrap'>
					<div className='flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10'>
						<div className='w-full sm:p-4 px-4 mb-6'>
							<h1 className='title-font font-medium text-xl mb-2 text-blue-600 my-4'>
								Servicio de refrigeracion mahz
							</h1>
							<div className='leading-relaxed'>
								Servimahz es una empresa de servicio tecnico y venta de
								repuestos para refrigeradores y lavadoras. Estamos comprometidos
								a proporcionar a nuestros clientes el mejor servicio posible, y
								nuestros expertos técnicos están listos para ayudar con
								cualquier problema que pueda tener con su electrodoméstico. Ya
								sea que necesite reemplazar piezas o que su máquina sea
								revisada, estamos aquí para ayudar. Servimahz también ofrece una
								amplia variedad de modelos de lavadoras y frigoríficos, para que
								pueda encontrar el electrodoméstico perfecto para su hogar.
								Nuestro equipo de ventas estará encantado de poder encontrar el
								electrodoméstico perfecto para su hogar, y nuestro equipo de
								entrega se asegurará de que esté instalado y funcionando
								correctamente para usted. Así que no dude en ponerse en contacto
								con nosotros: ¡estamos aquí para ayudarte!
							</div>
						</div>
						<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
							<h2 className='title-font font-medium text-3xl text-blue-600'>
								+15
							</h2>
							<p className='leading-relaxed'>Años en el mercado</p>
						</div>
						<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
							<h2 className='title-font font-medium text-3xl text-blue-600'>
								+1.8K
							</h2>
							<p className='leading-relaxed'>Refacciones</p>
						</div>
						<div className='p-4 sm:w-1/2 lg:w-1/4 w-1/2'>
							<h2 className='title-font font-medium text-3xl text-blue-600'>
								+4.5K
							</h2>
							<p className='leading-relaxed'>Reparaciones</p>
						</div>
					</div>
					<div className='lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0'>
						<img
							className='object-cover object-center w-full h-full'
							src={NosotrosImage}
							alt='stats'
						/>
					</div>
				</div>
			</section>
		</>
	)
}
