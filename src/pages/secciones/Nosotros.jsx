import styles from '../../assets/css/secNosotros.module.css'
import { NosotrosImg } from '../../assets/img/svg/NosotrosImg'
import { Cabezera } from '../../components/Cabezera'

export const Nosotros = () => {
	return (
		<>
			<Cabezera titulo={'¿Quienes Somos ?'} />
			<div className='col-12 col-md-6 d-flex flex-row align-items-center'></div>
			<div
				className={`col-12 col-md-6 py-4 d-flex flex-row align-items-center ${styles.secNosotros}`}
			>
				<h4>
					Servimahz es una empresa de servicio tecnico y venta de repuestos para
					refrigeradores y lavadoras. Estamos comprometidos a proporcionar a
					nuestros clientes el mejor servicio posible, y nuestros expertos
					técnicos están listos para ayudar con cualquier problema que pueda
					tener con su electrodoméstico. Ya sea que necesite reemplazar piezas o
					que su máquina sea revisada, estamos aquí para ayudar. Servimahz
					también ofrece una amplia variedad de modelos de lavadoras y
					frigoríficos, para que pueda encontrar el electrodoméstico perfecto
					para su hogar. Nuestro equipo de ventas estará encantado de poder
					encontrar el electrodoméstico perfecto para su hogar, y nuestro equipo
					de entrega se asegurará de que esté instalado y funcionando
					correctamente para usted. Así que no dude en ponerse en contacto con
					nosotros: ¡estamos aquí para ayudarte!
				</h4>
			</div>
		</>
	)
}
