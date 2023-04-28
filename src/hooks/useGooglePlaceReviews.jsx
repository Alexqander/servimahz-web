import { useState, useEffect } from 'react'

const useGooglePlaceReviews = (apiKey, placeId) => {
	const [reviews, setReviews] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		const loadScript = (src, callback) => {
			const script = document.createElement('script')
			script.src = src
			script.async = true
			script.defer = true
			script.onload = callback
			document.body.appendChild(script)
		}

		const initGoogleMaps = () => {
			if (!window.google) {
				setError('Google Maps JavaScript API no está cargada')
				setLoading(false)
				return
			}

			const service = new window.google.maps.places.PlacesService(
				document.createElement('div')
			)

			service.getDetails(
				{
					placeId: placeId,
					fields: ['review'],
				},
				(place, status) => {
					if (status === window.google.maps.places.PlacesServiceStatus.OK) {
						setReviews(place.reviews)
						setLoading(false)
					} else {
						setError(`Error al obtener los comentarios: ${status}`)
						setLoading(false)
					}
				}
			)
		}

		if (!window.google) {
			const googleMapsScriptUrl = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`
			window.initMap = initGoogleMaps
			loadScript(googleMapsScriptUrl, () => {})
		} else {
			initGoogleMaps()
		}

		return () => {
			window.initMap = undefined
		}
	}, [apiKey, placeId])

	return { reviews, loading, error }
}

export default useGooglePlaceReviews
