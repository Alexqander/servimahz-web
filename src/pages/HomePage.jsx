import { FooterServi } from '../components/FooterServi'
import { NavServi } from '../components/NavServi'
import { Contacto } from './Contacto'
import { Nosotros } from './Nosotros'
import { Servicios } from './Servicios'
import refri from '../assets/img/refri.jpeg'
import { Marcas } from './Marcas'

export const HomePage = () => {
	return (
		<>
			<NavServi></NavServi>
			<div className='container-fluid'>
				<div className='row py-4'>
					<div className='col-md-5 titulo d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center d-md-flex flex-md-column justify-content-md-center py-sm-5 px-4'>
						<h2>¿TU LAVADORA Ó REFRIGERADOR ESTAN FALLANDO?</h2>
						<h5>
							En servimahz te brindamos el mejor servicio de reparacion y
							mantenimiento para tus electrodomesticos.{' '}
						</h5>
						<div className='row botones' style={{ width: '100%' }}>
							<div className='col-12 col-md-6 my-2 my-md-0'>
								<a href='#' className='btn-contacto'>
									Conocenos
								</a>
							</div>
							<div className='col-12 col-md-6 my-2 my-md-0'>
								<a href='#' className='btn-grad '>
									Contactanos
								</a>
							</div>
						</div>
					</div>
					<div className='col-md-7 px-0 py-md-5 d-flex align-items-center '>
						<img src={refri} className='lavadora' />
					</div>
				</div>
				<div className='row my-5 my-lg-1'>
					<Nosotros />
				</div>
				<div className='my-5'>
					<Servicios />
					<Marcas />
				</div>
				<div className='my-5'>
					<Contacto />
				</div>
				<FooterServi />
			</div>
		</>
	)
}
