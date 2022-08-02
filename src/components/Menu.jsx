import PropTypes from 'prop-types'
import { useRef } from 'react'
import { MenuIcon } from '../assets/img/svg/MenuIcon'
import useMenu from '../hooks/useMenu'
import styles from '../assets/css/menu.module.css'

export const Menu = ({ links }) => {
	const menuItem = useRef(null)
	const { viewMenu, isVisible } = useMenu(false, menuItem)

	return (
		<>
			<div className={styles.menuResponsive}>
				<button className={styles.btnMenu} onClick={viewMenu}>
					<MenuIcon />
				</button>
			</div>
			<div className={styles.menu}>
				{isVisible === true ? (
					<>
						<div className='row' ref={menuItem}>
							{links.map((link, i) => {
								return (
									<>
										<a
											className={`col-12 ${styles.menuItems}`}
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
