import { FooterServi } from '../components/FooterServi'
import { NavServi } from '../components/NavServi'
import { Contacto } from './secciones/Contacto'
import { Nosotros } from './secciones/Nosotros'
import { Servicios } from './secciones/Servicios'
import { Marcas } from './secciones/Marcas'
import { WhathsappButton } from '../components/botones/WhathsappButton'
import { Inicio } from './secciones/Inicio'
import { Opiniones } from './secciones/Opiniones'

export const HomePage = () => {
	return (
		<>
			<NavServi></NavServi>
			<div className='container w-full mx-auto'>
				<WhathsappButton
					message='Hola me podrias proporcionar mas informacion de tus servicios'
					number={527774576803}
				/>
				<Inicio />
				<div className='my-5 bg-white' id='seccNosotros' data-aos='fade-up'>
					<Nosotros />
				</div>
				<div className='my-5' id='seccServicios'>
					<Servicios />
					<Marcas />
				</div>
				<div className='my-5 bg-white' id='secComentarios'>
					<Opiniones />
				</div>
				<div className='my-5' id='seccContacto'>
					<Contacto />
				</div>
			</div>
			<FooterServi />
		</>
	)
}
