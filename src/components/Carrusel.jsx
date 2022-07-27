import PropTypes from 'prop-types'
import { useRef, useEffect } from 'react'

export const Carrusel = ({ images, buttons, size, automatic, info }) => {
	const slideshow = useRef(null)

	const siguiente = () => {
		if (slideshow.current.children.length > 0) {
			const primerElemento = slideshow.current.children[0]
			// eslint-disable-next-line quotes
			slideshow.current.style.transition = `5000ms ease-out all`

			const tamañoSlide = slideshow.current.children[0].offsetWidth
			// eslint-disable-next-line quotes
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

			const transicion = () => {
				// eslint-disable-next-line quotes
				slideshow.current.style.transition = `none`
				// eslint-disable-next-line quotes
				slideshow.current.style.transform = `translateX(0)`
				slideshow.current.appendChild(primerElemento)
			}

			slideshow.current.addEventListener('transitionend', transicion)
		}
	}

	const atras = () => {}

	automatic
		? useEffect(() => {
				setInterval(() => {
					siguiente()
				}, 3000)
		  }, [])
		: useEffect(() => {
				siguiente()
		  }, [])

	return (
		<>
			<div className='row'>
				<div
					className='carrusel'
					style={{ width: size.width, height: size.height }}
				>
					<div className='slide-padre' ref={slideshow}>
						{images.map((image, i) => {
							return (
								<>
									<div className='slide-item' key={i}>
										<img src={image.source} alt='' className='img-marca' />
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
