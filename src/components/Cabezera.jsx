import PropTypes from 'prop-types'
import styles from '../assets/css/cabezera.module.css'

export const Cabezera = ({ titulo, doble }) => {
	return (
		<>
			{doble ? (
				<div className={` my-5 ${styles.titSeccionDoble}`}>
					<h3 className='mx-3'>{titulo}</h3>
				</div>
			) : (
				<>
					<div className={` my-3 ${styles.titSeccion}`}>
						<h3 className='mx-3'>{titulo}</h3>
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
