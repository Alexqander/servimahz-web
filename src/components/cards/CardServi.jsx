import PropTypes from 'prop-types'
import styles from '../../assets/css/cardServi.module.css'
import { ButtonServi } from '../botones/ButtonServi'
import btnStyles from '../../assets/css/buttonServi.module.css'
export const CardServi = ({
	title,
	content,
	images,
	titButton,
	horizontal,
}) => {
	return (
		<>
			{horizontal ? (
				<>
					<div className={`row ${styles.cardServiH}`}>
						<div className={`col-12 col-lg-4 ${styles.tituloH}`}>{title}</div>
						<div className={`col-12 col-lg-6 ${styles.imagenH}`}>
							<img
								src={images}
								className={styles.imagen}
								width={'auto'}
								height={190}
							/>
						</div>
						<div className={`col-12 col-lg-2 ${styles.botonH}`}>
							<ButtonServi
								isLink={true}
								message={'Cotizacion'}
								design={btnStyles.boton1}
							/>
						</div>
					</div>
				</>
			) : (
				<>
					<div className={styles.cardServi}>
						<div className={styles.cuerpo}>
							<img
								src={images}
								className={styles.imagen}
								width={'auto'}
								height={215}
							/>
						</div>
						<div className={`${styles.pie} d-flex justify-content-center px-5`}>
							<h5>{title}</h5>
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
}
