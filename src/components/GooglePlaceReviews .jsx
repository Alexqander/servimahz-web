import { PropTypes } from 'prop-types'
import { RatingStar } from './cards/RatingStar'
import { A11y, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import useGooglePlaceReviews from '../hooks/useGooglePlaceReviews'
import { SwiperSlideButtons } from './botones/SwiperSlideButtons'

const GooglePlaceReviews = () => {
	const apiKey = import.meta.env.VITE_GOOGLE_API_KEY
	const placeId = import.meta.env.VITE_GOOGLE_PLACE_ID
	const { reviews, loading, error } = useGooglePlaceReviews(apiKey, placeId)
	if (loading) {
		return <div>Loading reviews...</div>
	}

	if (error) {
		return (
			<>
				<div className='w-full text-white bg-red-500'>
					<div className='container flex items-center justify-between px-6 py-4 mx-auto'>
						<div className='flex'>
							<svg viewBox='0 0 40 40' className='w-6 h-6 fill-current'>
								<path d='M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z' />
							</svg>
							<p className='mx-3'> Error : {error}</p>
						</div>
						<button className='p-1 transition-colors duration-300 transform rounded-md hover:bg-opacity-25 hover:bg-gray-600 focus:outline-none'>
							<svg
								className='w-5 h-5'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M6 18L18 6M6 6L18 18'
									stroke='currentColor'
									strokeWidth={2}
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
				</div>
			</>
		)
	}

	return (
		<section className='bg-gray-100'>
			<div className='mx-auto max-w-[1340px] px-4 py-16 sm:px-6 sm:py-24 lg:me-0 lg:pe-0 lg:ps-8'>
				<div className='grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:items-center lg:gap-x-16'>
					<div className='max-w-xl text-center ltr:sm:text-left rtl:sm:text-right'>
						<h2 className='text-blue-800 text-3xl font-bold tracking-tight sm:text-4xl'>
							No confíe solo en nuestra palabra...
							<br className='hidden sm:block lg:hidden' />
							Lea las reseñas de nuestros clientes
						</h2>

						<p className='mt-4 text-gray-500'>
							En servimahz, valoramos la opinión de nuestros clientes y nos
							enorgullecemos de brindar un servicio excepcional en cada visita.
							Pero no queremos que simplemente confíes en lo que decimos,
							queremos que escuches directamente de aquellos que ya han
							experimentado nuestra dedicación y profesionalismo.
						</p>
					</div>

					<div className='-mx-6 lg:col-span-2 lg:mx-0'>
						<Swiper
							modules={[Navigation, Pagination, A11y]}
							loop={true}
							slidesPerView={1}
							spaceBetween={32}
							autoplay={{
								delay: 8000,
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
							{reviews.map((review, index) => (
								<SwiperSlide key={index}>
									<div className='container'>
										<blockquote className='flex h-[580px] md:h-96 flex-col justify-between bg-white p-12'>
											<RatingStar rating={review.rating}></RatingStar>
											<img
												className='h-16 w-16 rounded-full'
												src={review.profile_photo_url}
												alt={review.author_name}
											/>
											<div className='mt-4'>
												<p className='text-2xl font-bold text-blue-600 sm:text-3xl'></p>

												<p className='mt-4 leading-relaxed text-gray-500'>
													{review.text}
												</p>
											</div>

											<footer className='mt-8 text-sm text-gray-500'>
												&mdash; {review.author_name}
											</footer>
										</blockquote>
									</div>
								</SwiperSlide>
							))}

							<div className='hidden lg:mt-8 lg:flex lg:justify-center lg:gap-4'>
								<SwiperSlideButtons></SwiperSlideButtons>
							</div>
							<div className='mt-8 flex justify-center gap-4 lg:hidden'>
								<SwiperSlideButtons></SwiperSlideButtons>
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</section>
	)
}

GooglePlaceReviews.propTypes = {
	apiKey: PropTypes.string,
	placeId: PropTypes.string,
	isScriptLoaded: PropTypes.bool,
	isScriptLoadSucceed: PropTypes.bool,
}

export default GooglePlaceReviews
