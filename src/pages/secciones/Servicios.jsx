import refri2 from '../../assets/img/img-cards/tamaño-2/repa-min2.png'
import sec2 from '../../assets/img/img-cards/tamaño-2/secadora-min2.png'
import licuadora from '../../assets/img/img-cards/tamaño-2/licuadora.png'
import refacciones from '../../assets/img/img-cards/tamaño-2/refacciones.png'
import { CardServi } from '../../components/cards/CardServi'
import { Cabezera } from '../../components/Cabezera'

export const Servicios = () => {
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
		},
	]

	return (
		<>
			<div className='row gx-5 d-flex flex-row justify-content-center px-4 px-md-1 px-lg-1'>
				<Cabezera titulo={'Servicios'} />

				{infoCards.map((card, i) => {
					return (
						<>
							<div className={card.space} key={`crd--${i}`}>
								<CardServi
									title={card.title}
									content={card.content}
									images={card.image}
									titButton={card.btnMessage}
									horizontal={card.horizontal}
								/>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}
