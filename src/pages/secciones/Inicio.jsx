import { ButtonServi } from '../../components/botones/ButtonServi'
import { DuplexLav } from '../../assets/img/svg/DuplexLav'
export const Inicio = () => {
	return (
		<>
			<section className='text-gray-600 body-font w-full'>
				<div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
					<div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
						<h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
							Tus electrodomesticos le dan vida a tu hogar , no permitas que esa
							vida termine
						</h1>
						<p className='mb-8 leading-relaxed'>
							Servimahz es el lugar perfecto para todas sus necesidades de
							refrigeracion y lavadoras. Con una amplia gama de productos ,
							servicio técnico y venta de refacciones, Servimahz es el lugar al
							que acudir para todas sus necesidades de electrodomésticos.
						</p>
						<div className='flex justify-center'>
							<ButtonServi
								isLink={true}
								message='Llamanos'
								design={
									'inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'
								}
								reference='tel:7773210948'
							/>
							<ButtonServi
								isLink={true}
								message='Conocenos'
								design={
									'ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg'
								}
								reference='#seccNosotros'
							/>
						</div>
					</div>
					<div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
						<DuplexLav width={400} height={640} />
					</div>
				</div>
			</section>
		</>
	)
}
