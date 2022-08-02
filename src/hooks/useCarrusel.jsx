import { useEffect, useRef } from 'react'

function useCarrusel(automatic) {
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

	const isAutomatic = () => {
		setInterval(() => {
			siguiente()
		}, 3000)
	}

	useEffect(() => {
		automatic ? isAutomatic() : siguiente()
	})

	return {
		siguiente,
		atras,
		slideshow,
	}
}

export default useCarrusel
