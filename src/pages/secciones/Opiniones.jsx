import GooglePlaceReviews from '../../components/GooglePlaceReviews '

export const Opiniones = () => {
	const apiKey = 'AIzaSyA96w5lxQO9IhgrGcF9pXPfDM-DMBRMH_Y'
	const placeId = 'ChIJk8y4Z_N1zoURLpVHrYIFGvA'

	return (
		<>
			<GooglePlaceReviews apiKey={apiKey} placeId={placeId} />
		</>
	)
}
