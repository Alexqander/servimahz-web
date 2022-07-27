import mabe from '../assets/img/mabe.png'
import whp from '../assets/img/whirlpool.png'
import samsung from '../assets/img/samsung.png'
import lg from '../assets/img/lg.png'
import electrolux from '../assets/img/electrolux.png'
import embraco from '../assets/img/embraco.png'
import maytag from '../assets/img/maytag.png'
import ecko from '../assets/img/ecko.png'
import oster from '../assets/img/oster.png'
import hb from '../assets/img/hb.png'
import gb from '../assets/img/gb.png'
import secop from '../assets/img/secop.png'
import presto from '../assets/img/presto.png'
import quimobasicos from '../assets/img/quimobasicos.png'
import tfal from '../assets/img/tfal.png'
import { Carrusel } from '../components/Carrusel'
import { Cabezera } from '../components/Cabezera'

export const Marcas = () => {
	const marcas = [
		{ source: mabe, title: '', description: '' },
		{ source: whp, title: '', description: '' },
		{ source: samsung, title: '', description: '' },
		{ source: lg, title: '', description: '' },
		{ source: electrolux, title: '', description: '' },
		{ source: embraco, title: '', description: '' },
		{ source: maytag, title: '', description: '' },
		{ source: secop, title: '', description: '' },
		{ source: quimobasicos, title: '', description: '' },
		{ source: oster, title: '', description: '' },
		{ source: hb, title: '', description: '' },
		{ source: ecko, title: '', description: '' },
		{ source: presto, title: '', description: '' },
		{ source: tfal, title: '', description: '' },
		{ source: gb, title: '', description: '' },
	]

	const size = { width: '100%', height: 'auto' }
	return (
		<>
			<Cabezera titulo={'Encuentra las mejores marcas'} doble={true} />
			<Carrusel
				images={marcas}
				buttons={false}
				size={size}
				automatic={true}
				info={false}
			/>
		</>
	)
}
