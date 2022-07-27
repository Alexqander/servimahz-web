import '../assets/css/main.css'
import '../assets/css/cards.css'
import lavadora from '../assets/img/lavgonzalo.png'
import licuadora from '../assets/img/licuadora.jpeg'
import refrig from '../assets/img/repa-min.png'
import secadora from '../assets/img/secadora-min.png'
import ventiladores from '../assets/img/ventiladores.png'
import { CardServi } from '../components/cards/CardServi'
import { Cabezera } from '../components/Cabezera'

export const Servicios = () => {
	return (
		<>
			<div className='row'>
				<Cabezera titulo={'Servicios'} />
				<div className='col-12 col-md-6 col-lg-4 my-5 px-4 px-md-4'>
					<CardServi
						title={'Reparacion de Refrigeradores'}
						content='Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.'
						imgref={refrig}
						titButton='Agenda una cita'
					/>
				</div>
				<div className='col-12 col-md-6 col-lg-4 my-5 px-4 px-md-4'>
					<CardServi
						title={'Reparacion de lavadoras'}
						content='Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.'
						imgref={lavadora}
						titButton='Agenda una cita'
					/>
				</div>
				<div className='col-12 col-md-6 col-lg-4 my-5 px-4 px-md-4'>
					<CardServi
						title={'Reparacion de Secadoras'}
						content='Contamos con tecnicos capacitados y listos para brindarle el mejor servicio al mejor precio.'
						imgref={secadora}
						titButton='Agenda una cita'
					/>
				</div>
				<div className='col-12 col-md-6 col-lg-4 my-5 px-4 px-md-4'>
					<CardServi
						title={'Venta de refacciones'}
						content='Contamos con un amplio surtido de refacciones para electrodomesticos ¡Cotiza ahora mismo!'
						imgref={ventiladores}
						titButton='Cotiza'
					/>
				</div>
				<div className='col-12 col-md-6 col-lg-4 my-5 px-4 px-md-4'>
					<CardServi
						title={'Licuadoras y estufas'}
						content='Contamos con servicio y venta de refacciones , de las mejores marcas para tus licuadoras, estufas y ollas express'
						imgref={licuadora}
						titButton={'Cotiza'}
					/>
				</div>
			</div>
		</>
	)
}
