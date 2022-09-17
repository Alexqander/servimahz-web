import PropTypes from 'prop-types'
import styles from '../assets/css/carrusel.module.css'
import useCarrusel from '../hooks/useCarrusel'

export const Carrusel = ({ images, buttons, size, automatic, info }) => {
	const { siguiente, atras, slideshow } = useCarrusel(automatic)
	return (
		<>
			<div className='row' data-aos='fade-up'>
				<div
					className={styles.carrusel}
					style={{ width: size.width, height: size.height }}
				>
					<div className={styles.slidePadre} ref={slideshow}>
						{images.map((image, i) => {
							return (
								<>
									<div className={styles.slideItem} key={`im--${i}`}>
										<img src={image.source} className={styles.imgMarca} />
										{info ? (
											<>
												<div className='info-item'>
													<h5>{image.title}</h5>
													<span>{image.description}</span>
												</div>
											</>
										) : (
											<>
												<div></div>
											</>
										)}
									</div>
								</>
							)
						})}
					</div>

					{buttons ? (
						<>
							<div className='caja-buttons'>
								<button className='btn-siguiente' onClick={siguiente}></button>
								<button className='btn-anterior' onClick={atras}></button>
							</div>
						</>
					) : (
						<div></div>
					)}
				</div>
			</div>
		</>
	)
}

Carrusel.propTypes = {
	images: PropTypes.array,
	buttons: PropTypes.bool,
	size: PropTypes.object,
	automatic: PropTypes.bool,
	info: PropTypes.bool,
}
