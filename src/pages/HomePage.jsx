import { FooterServi } from '../components/FooterServi'
import { NavServi } from '../components/NavServi'
import { Contacto } from './Contacto'
import { Nosotros } from './Nosotros'
import { Servicios } from './Servicios'
import { Marcas } from './Marcas'
import { WhathsappButton } from '../components/botones/WhathsappButton'
import { ButtonServi } from '../components/botones/ButtonServi'

export const HomePage = () => {
	return (
		<>
			<NavServi></NavServi>
			<div className='container-fluid'>
				<WhathsappButton
					message='Hola me podrias proporcionar mas informacion de tus servicios'
					number={527774576803}
				/>
				<div className='row pt-4 seccInicio' id='seccInicio'>
					<div className='caja-inicio col-md-6 titulo d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center d-md-flex flex-md-column justify-content-md-center py-sm-5 px-5'>
						<h2>¿TU REFRIGERADOR O LAVADORA ESTAN FALLANDO?</h2>
						<h5>
							En Servimahz te brindamos el mejor servicio de reparacion,
							mantenimiento y venta de refacciones para tus electrodomesticos.
						</h5>
						<div className='row botones' style={{ width: '100%' }}>
							<div className='col-12 col-md-6 my-2 my-md-0'>
								<ButtonServi
									isLink={true}
									message='Conocenos'
									design='boton-1'
									reference='#seccNosotros'
								/>
							</div>
							<div className='col-12 col-md-6 my-2 my-md-0'>
								<ButtonServi
									isLink={true}
									message='Llamanos'
									design='boton-2'
									reference='tel:7773210948'
								/>
							</div>
						</div>
					</div>
				</div>
				<div className='row my-5 my-lg-1' id='seccNosotros'>
					<Nosotros />
				</div>
				<div className='my-5 ' id='seccServicios'>
					<Servicios />
					<Marcas />
				</div>
				<div className='my-5' id='seccContacto'>
					<Contacto />
				</div>
				<FooterServi />
			</div>
		</>
	)
}
