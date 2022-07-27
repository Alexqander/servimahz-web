import PropTypes from 'prop-types'

export const Cabezera = ({ titulo, doble }) => {
	return (
		<>
			{doble ? (
				<div className='tit-seccion'>
					<div className='lineas'></div>
					<h3 className='mx-3'>{titulo}</h3>
					<div className='lineas'></div>
				</div>
			) : (
				<>
					<div className='tit-seccion'>
						<div className='lineas'></div>
						<h3 className='mx-3'>{titulo}</h3>
						<div className='lineas'></div>
					</div>
				</>
			)}
		</>
	)
}

Cabezera.propTypes = {
	titulo: PropTypes.string,
	doble: PropTypes.bool,
}
