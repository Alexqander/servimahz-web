import { Cabezera } from '../../components/Cabezera'
import { ContacForm } from '../../components/formularios/ContacForm'
import styles from '../../assets/css/contact.module.css'
export const Contacto = () => {
	return (
		<>
			<Cabezera titulo={'Contacto'} />
			<div className='row'>
				<div className='col-12 col-lg-4 px-4 py-2'>
					<div className={`${styles.informacion} px-3`}>
						<h4>Direccion</h4>
						<span>
							Avenida Gral.Emiliano Zapata 57, Colonia el Castillo, Jiutepec,
							Morelos, México C.P 62564
						</span>
						<h4>Horario</h4>
						<div className='horarios d-flex flex-column'>
							<span>Lunes a Viernes : </span>
							<span>09:00am - 07:30pm</span>
							<span>Sabados</span>
							<span>09:00am - 6:00pm</span>
						</div>

						<h4>Teléfonos</h4>
						<div className='telefonos d-flex flex-column'>
							<span>777-321-09-48</span>
							<span>777-241-20-87</span>
							<span>777-475-68-03</span>
						</div>
						<h4>Email</h4>
						<span>contacto@servimahz.com.mx</span>
					</div>
				</div>
				<div className={`col-12 col-lg-7 my-4 py-5 ${styles.formContacto}`}>
					<h4>Contactanos</h4>
					<span>Solicita una cotizacion o servicio</span>
					<ContacForm />
				</div>
				<div className='row px-0 mx-0'>
					<div className='col-12'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3774.9905126817835!2d-99.18595768470709!3d18.887502062777575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce75f367b8cc93%3A0xf01a0582ad47952e!2sServicio%20de%20Refrigeraci%C3%B3n%20Mahz!5e0!3m2!1ses-419!2smx!4v1658251052811!5m2!1ses-419!2smx'
							width='100%'
							height='560'
							style={{ border: 0, borderRadius: 5 }}
							allowFullScreen=''
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
						></iframe>
					</div>
				</div>
			</div>
		</>
	)
}
