import styles from '../assets/css/footer.module.css'
import telefono from '../assets/img/img-contact/telefono.png'
import whatsapp from '../assets/img/img-contact/whatsapp.png'
import email from '../assets/img/img-contact/email.png'
import facebook from '../assets/img/img-contact/facebook.png'

import { Logo } from '../assets/img/svg/Logo'

export const FooterServi = () => {
	return (
		<>
			<footer className='row px-3 px-md-5 py-5 '>
				<div className='col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start '>
					<Logo width='150' height='auto'></Logo>
				</div>
				<div className='col-12 col-md-6 d-flex flex-column align-items-center  d-md-flex flex-md-column align-items-md-end py-5 py-md-0'>
					<div className='d-flex align-items-center justify-content-end my-3'>
						<img src={telefono} width='30px' height='30px' className='mx-3' />
						<div>
							<a
								href='tel:7773210948'
								style={{ textDecoration: 'none' }}
								target='_blank'
								rel='noreferrer'
							>
								<h4 className={styles.contactInfo}>7773210948</h4>
							</a>
							<a
								href='tel:7772412087'
								style={{ textDecoration: 'none' }}
								target='_blank'
								rel='noreferrer'
							>
								<h4 className={styles.contactInfo}>7772412087</h4>
							</a>
						</div>
					</div>
					<a
						style={{ textDecoration: 'none' }}
						href='https://wa.me/527774576803/?text=Hola me podrias proporcionar mas informacion de tus servicios'
						target='_blank'
						rel='noreferrer'
					>
						<div className='d-flex align-items-center my-2'>
							<img src={whatsapp} width='30px' height='30px' className='mx-3' />
							<h4 className={styles.contactInfo}>7774576803</h4>
						</div>
					</a>
					<a
						href='mailto:contacto@servimahz.com.mx?Subject=Cotizacion'
						target='_blank'
						rel='noreferrer'
					>
						<div className='d-flex align-items-center my-2'>
							<img src={email} width='30px' height='30px' className='mx-3' />
							<h4 className={styles.contactInfo}>contacto@servimahz.com.mx</h4>
						</div>
					</a>
					<a
						style={{ textDecoration: 'none' }}
						href='https://www.facebook.com/servimahz'
						target='_blank'
						rel='noreferrer'
					>
						<div className='d-flex align-items-center  my-2'>
							<img src={facebook} width='30px' height='30px' className='mx-3' />
							<h4 className={styles.contactInfo}>@servimahz</h4>
						</div>
					</a>
				</div>
			</footer>
		</>
	)
}
