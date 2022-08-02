import lav2 from '../../assets/img/img-cards/tamaño-2/lavgonzalo-min2.png'
import sec2 from '../../assets/img/img-cards/tamaño-2/secadora-min2.png'
import { CardServi } from '../../components/cards/CardServi'
import { Cabezera } from '../../components/Cabezera'

export const Servicios = () => {
	const infoCards = [
		{
			title: 'Reparacion de lavadoras',
			content:
				'Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.',
			image: lav2,
			btnMessage: 'Agenda una cita',
		},
		{
			title: 'Reparacion de Secadoras',
			content:
				'Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.',
			image: sec2,
			btnMessage: 'Agenda una cita',
		},
	]

	return (
		<>
			<div className='row'>
				<Cabezera titulo={'Servicios'} />

				{infoCards.map((card, i) => {
					return (
						<>
							<div
								className='col-12 col-md-6 col-lg-4 my-5 px-4 px-md-4'
								key={`crd--${i}`}
							>
								<CardServi
									title={card.title}
									content={card.content}
									images={card.image}
									titButton={card.btnMessage}
								/>
							</div>
						</>
					)
				})}
			</div>
		</>
	)
}
