import refri2 from '../../assets/img/img-cards/tamaño-2/repa-min2.png'
import sec2 from '../../assets/img/img-cards/tamaño-2/secadora-min2.png'
import licuadora from '../../assets/img/img-cards/tamaño-2/licuadora.png'
import refacciones from '../../assets/img/img-cards/tamaño-2/refacciones.png'
import { CardServi } from '../../components/cards/CardServi'

export const Servicios = () => {
	const urlconfig = `https://wa.me/527774576803/?text=Hola necesito la cotizacion de una pieza`
	const infoCards = [
		{
			title: 'Reparacion de lavadoras',
			content:
				'Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.',
			image: sec2,
			btnMessage: 'Agenda una cita',
			horizontal: false,
			space: 'col-12 col-md-6 col-lg-3 my-5 px-4 px-md-4',
		},
		{
			title: 'Reparacion de Refrigeradores',
			content:
				'Nuestros tecnicos capacitados estan listos para brindarle el mejor servicio a un precio justo',
			image: refri2,
			btnMessage: 'Agenda una cita',
			horizontal: false,
			space: 'col-12 col-md-6 col-lg-3 my-5 px-4 px-md-4',
		},
		{
			title: 'Refacciones y servicio de licuadoras',
			content:
				'Encuentra todo para tu licuadora , estufa , olla express, al mejor precio',

			btnMessage: 'Cotiza',
			horizontal: false,
			space: 'col-12 col-md-6 col-lg-3 my-5 px-4 px-md-4',
			image: licuadora,
		},
		{
			title: 'Venta de refacciones',
			content: ' loco',
			btnMessage: 'Cotiza',
			horizontal: true,
			image: refacciones,
			space: 'col-md-12 col-lg-9 col-12',
			reference: urlconfig,
		},
	]

	return (
		<>
			<section className='bg-white text-gray-600 body-font'>
				<div className='container px-12 py-24 mx-auto'>
					<div className='flex flex-wrap w-full mb-20'>
						<div className='lg:w-1/2 w-full mb-6 lg:mb-0'>
							<h1 className='sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900'>
								Nuestros Servicios
							</h1>
							<div className='h-1 w-20 bg-blue-500 rounded' />
						</div>
						<p className='lg:w-1/2 w-full leading-relaxed text-gray-500'>
							Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
							gentrify, subway tile poke farm-to-table. Franzen you probably
							haven heard of them man bun deep jianbing selfies heirloom prism
							food truck ugh squid celiac humblebrag.
						</p>
					</div>

					<div className='flex flex-wrap -m-4'>
						{infoCards.map((card, i) => {
							return (
								<>
									<CardServi
										key={`crd--${i}`}
										title={card.title}
										content={card.content}
										images={card.image}
										horizontal={card.horizontal}
									/>
								</>
							)
						})}
					</div>
				</div>
			</section>
		</>
	)
}
