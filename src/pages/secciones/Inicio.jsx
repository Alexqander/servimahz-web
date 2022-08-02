import { ButtonServi } from '../../components/botones/ButtonServi'
import btnStyles from '../../assets/css/buttonServi.module.css'
import styles from '../../assets/css/secInicio.module.css'
export const Inicio = () => {
	return (
		<>
			<div className={`row pt-4 ${styles.seccInicio}`} id='seccInicio'>
				<div
					className={`${styles.cajaInicio} col-md-6 ${styles.titulo} d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center d-md-flex flex-md-column justify-content-md-center py-sm-5 px-5`}
				>
					<h2>¿TU REFRIGERADOR O LAVADORA ESTAN FALLANDO?</h2>
					<h5>
						En Servimahz te brindamos el mejor servicio de reparacion,
						mantenimiento y venta de refacciones para tus electrodomesticos.
					</h5>
					<div className='row botones' style={{ width: '100%' }}>
						<div className='col-12 col-md-6 my-2 my-md-0'>
							<ButtonServi
								isLink={true}
								message='Conocenos'
								design={btnStyles.boton1}
								reference='#seccNosotros'
							/>
						</div>
						<div className='col-12 col-md-6 my-2 my-md-0'>
							<ButtonServi
								isLink={true}
								message='Llamanos'
								design={btnStyles.boton2}
								reference='tel:7773210948'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
