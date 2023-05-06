import refribanner from '../../assets/img/fondo/refrigerador.jpeg'

export const Inicio = () => {
	return (
		<>
			<section className='container-fluid'>
				<div
					className='w-full bg-center bg-cover h-[52rem]'
					style={{
						backgroundImage: `url(${refribanner})`,
					}}
				>
					<div className='px-4 lg:px-0 flex items-center justify-center w-full h-full bg-gray-900/60'>
						<div className='text-center'>
							<h1 className='text-3xl font-semibold text-white lg:text-4xl'>
								Tus <span className='text-blue-600'>electrodomesticos</span> le
								dan vida a tu hogar , no permitas que esa vida termine
							</h1>
							<div className=' items-center w-1/2 mx-auto mt-4'>
								<p className='text-white text-xl mb-8 leading-relaxed'>
									Servimahz es el lugar perfecto para todas sus necesidades de
									refrigeracion y lavadoras. Con una amplia gama de productos ,
									servicio técnico y venta de refacciones, Servimahz es el lugar
									al que acudir para todas sus necesidades de electrodomésticos.
								</p>
							</div>

							<a
								href='tel:7773210948'
								className='px-24 py-3 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md lg:w-auto hover:bg-blue-500 focus:outline-none focus:bg-blue-500'
							>
								Llamanos
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
