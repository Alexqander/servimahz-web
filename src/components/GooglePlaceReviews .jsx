import { PropTypes } from 'prop-types'
import React, { useState, useEffect } from 'react'
import { RatingStar } from './cards/RatingStar'
import useGooglePlaceReviews from '../hooks/useGooglePlaceReviews'

const GooglePlaceReviews = ({ apiKey, placeId }) => {
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
		<section className='bg-white'>
			<div className='container px-6 py-10 mx-auto'>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<div>
						<h1 className='text-2xl font-semibold text-gray-800 lg:text-3xl'>
							Lo que nuestros clientes estan diciendo
						</h1>
						<div className='flex mx-auto mt-6'>
							<span className='inline-block w-40 h-1 bg-blue-500 rounded-full' />
							<span className='inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full' />
							<span className='inline-block w-1 h-1 bg-blue-500 rounded-full' />
						</div>
					</div>
					<div className='flex justify-between mt-8 md:mt-0'>
						<button
							title='left arrow'
							className='p-2 mx-3 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M15 19l-7-7 7-7'
								/>
							</svg>
						</button>
						<button
							title='right arrow'
							className='p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 hover:bg-gray-100'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-6 h-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M9 5l7 7-7 7'
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className='relative'>
					<section className='grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3 transition-all duration-300 ease-in-out'>
						{reviews.map((review, index) => (
							<div key={index} className='p-8 border rounded-lg'>
								<p className='leading-loose text-gray-500 '>{review.text}</p>
								<RatingStar rating={review.rating}></RatingStar>
								<div className='flex items-center mt-8 -mx-2'>
									<img
										className='object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 '
										src={review.profile_photo_url}
										alt
									/>
									<div className='mx-2'>
										<h1 className='text-sm text-gray-500 dark:text-gray-400'>
											{review.relative_time_description}
										</h1>
										<h1 className='font-semibold text-gray-800'>
											{review.author_name}
										</h1>
									</div>
								</div>
							</div>
						))}
					</section>
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
