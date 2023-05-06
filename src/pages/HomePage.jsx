import { FooterServi } from '../components/FooterServi'
import { NavServi } from '../components/NavServi'
import { Contacto } from './secciones/Contacto'
import { Nosotros } from './secciones/Nosotros'
import { Servicios } from './secciones/Servicios'
import { Marcas } from './secciones/Marcas'
import { WhathsappButton } from '../components/botones/WhathsappButton'
import { Inicio } from './secciones/Inicio'
import GooglePlaceReviews from '../components/GooglePlaceReviews '

export const HomePage = () => {
	return (
		<>
			<NavServi></NavServi>
			<WhathsappButton
				message='Hola me podrias proporcionar mas informacion de tus servicios'
				number={527774576803}
			/>
			<div className='mt-24'>
				<Inicio />
			</div>

			<div className='bg-white' id='seccNosotros' data-aos='fade-up'>
				<Nosotros />
			</div>
			<div className='my-6' id='seccServicios'>
				<Servicios />
			</div>

			<section className='bg-white'>
				<div className='container h-[600px] mx-auto' id='seccMarcas'>
					<div className='h-full grid grid-cols-1 gap-6 lg:grid-cols-2'>
						<Marcas />
					</div>
				</div>
			</section>
			<section className='container w-full mx-auto' id='seccComentarios'>
				<GooglePlaceReviews />
			</section>

			<section className='bg-white'>
				<div className='' id='seccContacto'>
					<Contacto />
				</div>
			</section>
			<FooterServi />
		</>
	)
}
