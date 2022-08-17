import { useState } from 'react'

function useMenu(initialState, itemReference) {
	const [isVisible, setVisible] = useState(initialState)

	const viewMenu = () => {
		isVisible ? setVisible(false) : setVisible(true)
	}
	if (isVisible) {
		const navegar = () => {
			setVisible(false)
		}

		if (itemReference !== null) {
			setTimeout(() => {
				itemReference.current.addEventListener('click', navegar)
			}, 500)
		}
	}
	return {
		viewMenu,
		isVisible,
	}
}

export default useMenu
