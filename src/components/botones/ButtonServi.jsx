import PropTypes from 'prop-types'
import styles from '../../assets/css/buttonServi.module.css'
import { CheckIcon } from '../../assets/img/svg/CheckIcon'
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
					<a
						href={reference}
						className={design}
						target='_blank'
						rel='noreferrer'
					>
						{message}
					</a>
				</>
			) : (
				<>
					{isLoading ? (
						<>
							<button
								className={styles.boton4}
								onClick={accion}
								type={formulario}
							>
								<div className={styles.loader}></div>
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
