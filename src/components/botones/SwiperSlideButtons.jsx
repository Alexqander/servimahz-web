import { AtrasIcon } from '../../assets/img/svg/AtrasIcon'
import { NextIcon } from '../../assets/img/svg/NextIcon'
import { useSwiper } from 'swiper/react'
export const SwiperSlideButtons = () => {
	const swiper = useSwiper()
	const handlePrev = () => {
		swiper.slidePrev()
	}
	const handleNext = () => {
		swiper.slideNext()
	}

	return (
		<>
			<button
				onClick={handlePrev}
				className='prev-button rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white'
			>
				<span className='sr-only'>Previous Slide</span>
				<AtrasIcon
					strokeWidth='2'
					className='h-5 w-5 rtl:rotate-180'
					strokeLinecap='round'
					strokeLinejoin='round'
				></AtrasIcon>
			</button>

			<button
				onClick={handleNext}
				className='next-button rounded-full border border-blue-600 p-3 text-blue-600 hover:bg-blue-600 hover:text-white'
			>
				<span className='sr-only'>Next Slide</span>
				<NextIcon
					className='h-5 w-5 rtl:rotate-180'
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth='2'
				></NextIcon>
			</button>
		</>
	)
}
