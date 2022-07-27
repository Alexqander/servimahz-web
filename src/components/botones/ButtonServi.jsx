import PropTypes from 'prop-types'

import '../../assets/css/Button.css'
import { CheckIcon } from '../../assets/img/CheckIcon'
export const ButtonServi = ({
	design,
	isLink,
	isLoading,
	message,
	accion,
	reference,
	formulario,
}) => {
	return (
		<>
			{isLink ? (
				<>
					<a href={reference} className={design}>
						{message}
					</a>
				</>
			) : (
				<>
					{isLoading ? (
						<>
							<button className='boton-4' onClick={accion} type={formulario}>
								<div className='loader'></div>
								Enviando
							</button>
						</>
					) : (
						<>
							<button className={design} onClick={accion} type={formulario}>
								<CheckIcon width='20' height='20' color='#ffff' />
								{message}
							</button>
						</>
					)}
				</>
			)}
		</>
	)
}

ButtonServi.propTypes = {
	design: PropTypes.string,
	isLink: PropTypes.bool,
	isLoading: PropTypes.bool,
	reference: PropTypes.string,
	message: PropTypes.string,
	accion: PropTypes.func,
	formulario: PropTypes.string,
}
