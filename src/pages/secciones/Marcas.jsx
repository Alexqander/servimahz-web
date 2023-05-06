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
import 'swiper/css'
import 'swiper/css/navigation'
import { A11y, Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Marcas = () => {
	const marcas = [
		{
			source: whp,
			title: 'whirlpool',
		},
		{
			source: mabe,
			title: 'mabe',
		},
		{
			source: maytag,
			title: 'maytag',
		},
		{
			source: samsung,
			title: 'samsung',
		},
		{
			source: lg,
			title: 'lg',
		},
		{
			source: electrolux,
			title: 'electrolux',
		},
		{
			source: secop,
			title: 'secop',
		},
		{
			source: quimobasicos,
			title: 'quimobasicos',
		},
		{
			source: embraco,
			title: 'embraco',
		},
		{
			source: gb,
			title: 'grupo barreto',
		},
		{
			source: oster,
			title: 'oster',
		},
		{
			source: hb,
			title: 'hb',
		},
		{
			source: presto,
			title: 'presto',
		},
		{
			source: tfal,
			title: 'tfal',
		},
		{
			source: ecko,
			title: 'ecko',
		},
	]

	return (
		<>
			<div className='container my-auto'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='w-20 h-20 text-blue-800 mx-auto mb-10'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
					/>
				</svg>

				<h2 className='text-3xl text-center text-blue-800 font-bold tracking-tight sm:text-4xl'>
					Contamos con las mejores marcas
				</h2>
				<p className='text-center text-gray-500 mt-6'>
					En servimahz, entendemos la importancia de contar con refacciones de
					calidad para garantizar el óptimo funcionamiento de tus
					electrodomésticos. Por ello, nos esforzamos en ofrecerte solo las
					mejores marcas del mercado. Trabajamos con proveedores reconocidos y
					confiables, asegurándonos de que nuestras refacciones sean duraderas y
					compatibles con tus equipos. Con servimahz, puedes confiar en que tus
					electrodomésticos estarán siempre en las mejores manos, respaldados
					por las marcas líderes en el sector.
				</p>
			</div>

			<div className='container my-auto'>
				<Swiper
					modules={[Navigation, A11y, Autoplay]}
					loop={true}
					slidesPerView={3}
					spaceBetween={10}
					scrollbar={{ draggable: true }}
					autoplay={{
						delay: 2500,
					}}
					breakpoints={{
						640: {
							centeredSlides: true,
							slidesPerView: 1.25,
						},
						1024: {
							centeredSlides: false,
							slidesPerView: 1.5,
						},
					}}
				>
					{marcas.map((image, i) => (
						<SwiperSlide key={i}>
							<img src={image.source} className='' alt={image.title} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}
