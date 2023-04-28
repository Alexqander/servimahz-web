import React from 'react'
import { PropTypes } from 'prop-types'

export const RatingStar = ({ rating }) => {
	const stars = Array.from({ length: 5 }, (_, index) => index < rating)

	return (
		<>
			<div className='my-5'>
				<div className='flex flex-col items-first gap-2'>
					<span className='flex items-center gap-4 text-sm rounded text-slate-500'>
						<span
							className='flex gap-1 text-amber-400'
							role='img'
							aria-label={`Rating: ${rating} out of 5 stars`}
						>
							{stars.map((isFilled, index) => (
								<span aria-hidden='true' key={index}>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill={isFilled ? 'currentColor' : 'none'}
										stroke={isFilled ? 'none' : 'currentColor'}
										strokeWidth={isFilled ? '0' : '1.5'}
										className='w-6 h-6'
									>
										<path
											fillRule='evenodd'
											d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
											clipRule='evenodd'
										/>
									</svg>
								</span>
							))}
						</span>
						<span>{rating} de 5</span>
					</span>
				</div>
			</div>
		</>
	)
}

RatingStar.propTypes = { rating: PropTypes.number }
