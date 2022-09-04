import { Cabezera } from '../../components/Cabezera'
import styles from '../../assets/css/opiniones.module.css'
export const Opiniones = () => {
	return (
		<>
			<Cabezera titulo={'Opiniones'} />
			<div className='row'>
				<h4 className={`mx-5 ${styles.subtitulo}`}>
					Conoce todo lo que nuestros clientes dicen de nosotros
				</h4>
			</div>
		</>
	)
}
