import refri2 from '../../assets/img/img-cards/nuevas/refri1rep.jpeg'
import lavadora from '../../assets/img/img-cards/nuevas/lavadora1.jpeg'
import licuadora from '../../assets/img/img-cards/nuevas/licuadora.jpeg'
import ventiladores from '../../assets/img/img-cards/nuevas/ventiladores.jpg'
import { CardServi } from '../../components/cards/CardServi'

export const Servicios = () => {
	const infoCards = [
		{
			id: 1,
			title: 'Reparacion de lavadoras',
			content:
				'Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.',
			image: lavadora,
			subtitle: 'Linea blanca',
			isReverse: false,
		},
		{
			id: 2,
			title: 'Reparacion de Refrigeradores',
			content:
				'Nuestros tecnicos capacitados estan listos para brindarle el mejor servicio a un precio justo',
			image: refri2,
			btnMessage: 'Agenda una cita',
			subtitle: 'Refrigeracion',
			isReverse: true,
		},
		{
			id: 3,
			title: 'Refacciones y servicio de licuadoras',
			content:
				'Encuentra todo para tu licuadora , estufa , olla express, al mejor precio',
			subtitle: 'Linea blanca',
			image: licuadora,
			isReverse: false,
		},
		{
			id: 4,
			title: 'Venta de refacciones',
			content:
				'Ofrecemos una amplia gama de refacciones originales y compatibles para tus electrodomésticos, garantizando la calidad y durabilidad de nuestros productos. ',
			subtitle: 'Ventas',
			image: ventiladores,
			isReverse: true,
		},
	]

	return (
		<>
			<div className='container px-6 py-10 mx-auto'>
				<h1 className='text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl'>
					Nuestros Servicios
				</h1>

				<section className='mt-8 space-y-8 lg:mt-12'>
					{infoCards.map((card) => {
						return (
							<CardServi
								key={card.id}
								title={card.title}
								content={card.content}
								images={card.image}
								subtitle={card.subtitle}
								isReverse={card.isReverse}
							/>
						)
					})}
				</section>
			</div>
		</>
	)
}
