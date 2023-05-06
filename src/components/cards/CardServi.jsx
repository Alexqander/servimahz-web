import PropTypes from 'prop-types'
export const CardServi = ({ title, content, images, subtitle, isReverse }) => {
	return (
		<>
			<section
				className={`lg:flex lg:items-center ${
					isReverse ? 'flex-row-reverse' : ''
				} `}
			>
				<div className='lg:w-1/2 px-10'>
					<p className='text-lg tracking-wider text-blue-500'>{subtitle}</p>
					<h2 className='mt-2 text-2xl font-semibold text-gray-800 capitalize '>
						{title}
					</h2>
					<p className='text-lg tracking-wider text-gray-500'>{content}</p>
				</div>
				<div className='mt-4 lg:w-1/2 lg:mt-0'>
					<img
						className='object-cover w-full h-64 rounded-lg md:h-96'
						src={images}
						alt='servicio'
					/>
				</div>
			</section>
		</>
	)
}

CardServi.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	images: PropTypes.string,
	titButton: PropTypes.string,
	subtitle: PropTypes.string,
	isReverse: PropTypes.bool,
}
