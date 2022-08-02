import PropTypes from 'prop-types'
import styles from '../../assets/css/cardServi.module.css'

export const CardServi = ({ title, content, images, titButton }) => {
	return (
		<>
			<div className={styles.cardServi}>
				<div className={styles.cabezera}>
					<h5>{title}</h5>
				</div>
				<div className={styles.cuerpo}>
					<div className={styles.cajaImg}>
						<img src={images} className={styles.imagen} />
					</div>
					<p>{content}</p>
				</div>
				<div className={`${styles.pie} py-4 px-4`}>
					<button className={styles.botonCard}>{titButton}</button>
				</div>
			</div>
		</>
	)
}

CardServi.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	images: PropTypes.string,
	titButton: PropTypes.string,
}
