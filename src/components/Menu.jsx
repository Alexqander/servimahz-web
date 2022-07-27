import PropTypes from 'prop-types'
import { useRef, useState } from 'react'

export const Menu = ({ links }) => {
	const [isVisible, setVisible] = useState(false)

	const viewMenu = () => {
		isVisible ? setVisible(false) : setVisible(true)
	}

	const menuItem = useRef(null)
	if (isVisible) {
		const navegar = () => {
			console.log('entre a la funcion')
			setVisible(false)
		}

		if (menuItem !== null) {
			setTimeout(() => {
				menuItem.current.addEventListener('click', navegar)
			}, 500)
		}
	}

	return (
		<>
			<div className='menu-responsive'>
				<button className='btn-menu' onClick={viewMenu}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='36'
						height='36'
						fill='currentColor'
						className='bi bi-list'
						viewBox='0 0 16 16'
					>
						<path
							fillRule='evenodd'
							d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
						/>
					</svg>
				</button>
			</div>
			<div className='menu'>
				{isVisible === true ? (
					<>
						<div className='row' ref={menuItem}>
							{links.map((link, i) => {
								return (
									<>
										<a
											className='col-12 menu-items'
											key={i}
											href={link.reference}
										>
											<p className=' mx-4 my-2'>{link.name}</p>
										</a>
									</>
								)
							})}
						</div>
					</>
				) : (
					<div></div>
				)}
			</div>
		</>
	)
}

Menu.propTypes = {
	links: PropTypes.array,
}
