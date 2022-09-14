import { ButtonServi } from '../../components/botones/ButtonServi'
import btnStyles from '../../assets/css/buttonServi.module.css'
import styles from '../../assets/css/secInicio.module.css'
import { DuplexLav } from '../../assets/img/svg/DuplexLav'
export const Inicio = () => {
	return (
		<>
			<div className={`row gx-5 ${styles.seccInicio}`} id='seccInicio'>
				<div
					className={`${styles.cajaInicio} col-md-6 ${styles.titulo} d-sm-flex flex-sm-column justify-content-sm-center align-items-sm-center d-md-flex flex-md-column justify-content-md-center py-sm-5`}
				>
					<h2 className='text-center'>
						Tus electrodomesticos le dan vida a tu hogar , no permitas que esa
						vida termine
					</h2>
					<h5 className='text-center'>
						Servimahz es el lugar perfecto para todas sus necesidades de
						refrigeracion y lavadoras. Con una amplia gama de productos ,
						servicio técnico y venta de refacciones, Servimahz es el lugar al
						que acudir para todas sus necesidades de electrodomésticos.
					</h5>
					<div className='row gx-5 botones' style={{ width: '100%' }}>
						<div className='col-12 col-md-6 my-2 my-md-0'>
							<ButtonServi
								isLink={true}
								message='Llamanos'
								design={btnStyles.boton2}
								reference='tel:7773210948'
							/>
						</div>
						<div className='col-12 col-md-6 my-2 my-md-0'>
							<ButtonServi
								isLink={true}
								message='Conocenos'
								design={btnStyles.boton1}
								reference='#seccNosotros'
							/>
						</div>
					</div>
				</div>
				<div className='col-12 col-md-6 d-none d-flex flex-row justify-content-center align-items-start d-md-flex flex-md-row justify-content-md-center align-items-md-center'>
					<DuplexLav width={400} height={640} />
				</div>
			</div>
		</>
	)
}
