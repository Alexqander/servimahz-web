import PropTypes from 'prop-types'
export const CardServi = ({
	title,
	content,
	images,
	horizontal,
	reference,
}) => {
	return (
		<>
			{horizontal ? (
				<>
					<div className='xl:w-1/4 md:w-1/2 p-4'>
						<div className='bg-gray-100 p-6 rounded-lg'>
							<img
								src={images}
								className='h-40 rounded w-full object-cover object-center mb-6'
								width={'auto'}
							/>
							<h3 className='tracking-widest text-blue-500 text-xs font-medium title-font'>
								Linea blanca
							</h3>
							<h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
								{title}
							</h2>
							<p className='leading-relaxed text-base'>
								Fingerstache flexitarian street art 8-bit waistcoat. Distillery
								hexagon disrupt edison bulbche.
							</p>
						</div>
					</div>
				</>
			) : (
				<>
					<div className='xl:w-1/4 md:w-1/2 p-4' data-aos='zoom-in'>
						<div className='bg-gray-100 p-6 rounded-lg'>
							<img
								src={images}
								className='h-40 rounded w-full object-cover object-center mb-6'
								width={'auto'}
							/>
							<h3 className='tracking-widest text-blue-500 text-xs font-medium title-font'>
								Linea blanca
							</h3>
							<h2 className='text-lg text-gray-900 font-medium title-font mb-4'>
								{title}
							</h2>
							<p className='leading-relaxed text-base'>{content}</p>
						</div>
					</div>
				</>
			)}
		</>
	)
}

CardServi.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	images: PropTypes.string,
	titButton: PropTypes.string,
	horizontal: PropTypes.bool,
	reference: PropTypes.string,
}
