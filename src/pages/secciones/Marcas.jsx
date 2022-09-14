import { Carrusel } from '../../components/Carrusel'
import { Cabezera } from '../../components/Cabezera'
import mabe from '../../assets/img/img-carrusell/tamaño2/mabe-min2.png'
import whp from '../../assets/img/img-carrusell/tamaño2/whirlpool-min2.png'
import samsung from '../../assets/img/img-carrusell/tamaño2/samsung-min2.png'
import lg from '../../assets/img/img-carrusell/tamaño2/lg-min2.png'
import electrolux from '../../assets/img/img-carrusell/tamaño2/electrolux-min2.png'
import embraco from '../../assets/img/img-carrusell/tamaño2/embraco-min2.png'
import maytag from '../../assets/img/img-carrusell/tamaño2/maytag-min2.png'
import ecko from '../../assets/img/img-carrusell/tamaño2/ecko-min2.png'
import oster from '../../assets/img/img-carrusell/tamaño2/oster-min2.png'
import hb from '../../assets/img/img-carrusell/tamaño2/hb-min2.png'
import gb from '../../assets/img/img-carrusell/tamaño2/gb-min2.png'
import secop from '../../assets/img/img-carrusell/tamaño2/secop-min2.png'
import presto from '../../assets/img/img-carrusell/tamaño2/presto-min2.png'
import quimobasicos from '../../assets/img/img-carrusell/tamaño2/quimobasicos-min2.png'
import tfal from '../../assets/img/img-carrusell/tamaño2/tfal-min2.png'
export const Marcas = () => {
	const marcas = [
		{
			source: whp,
			title: '',
			description: '',
		},
		{
			source: mabe,
			title: '',
			description: '',
		},
		{
			source: maytag,
			title: '',
			description: '',
		},
		{
			source: samsung,
			title: '',
			description: '',
		},
		{
			source: lg,
			title: '',
			description: '',
		},
		{
			source: electrolux,
			title: '',
			description: '',
		},
		{
			source: secop,
			title: '',
			description: '',
		},
		{
			source: quimobasicos,
			title: '',
			description: '',
		},
		{
			source: embraco,
			title: '',
			description: '',
		},
		{
			source: gb,
			title: '',
			description: '',
		},
		{
			source: oster,
			title: '',
			description: '',
		},
		{
			source: hb,
			title: '',
			description: '',
		},
		{
			source: presto,
			title: '',
			description: '',
		},
		{
			source: tfal,
			title: '',
			description: '',
		},
		{
			source: ecko,
			title: '',
			description: '',
		},
	]

	const size = { width: '100%', height: '50%' }
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
