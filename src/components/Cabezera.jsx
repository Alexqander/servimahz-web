import PropTypes from 'prop-types'
import styles from '../assets/css/cabezera.module.css'

export const Cabezera = ({ titulo, doble }) => {
	return (
		<>
			{doble ? (
				<div className={styles.titSeccionDoble}>
					<div className={styles.lineasDoble}></div>
					<h3 className='mx-3'>{titulo}</h3>
					<div className={styles.lineasDoble}></div>
				</div>
			) : (
				<>
					<div className={styles.titSeccion}>
						<div className={styles.lineas}></div>
						<h3 className='mx-3'>{titulo}</h3>
						<div className={styles.lineas}></div>
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
