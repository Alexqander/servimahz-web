import '../assets/css/footer.css'
import telefono from '../assets/img/telefono.png'
import whatsapp from '../assets/img/whatsapp.png'
import email from '../assets/img/email.png'
import facebook from '../assets/img/facebook.png'

export const FooterServi = () => {
	return (
		<>
			<footer className='row px-3 px-md-5 py-5 '>
				<div className='col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-start '>
					<h4 className='mx-3 marca'>sm</h4>
					<div className='caja-nom'>
						<h5 className='mx-3 descrip'>servicio de refrigeracion mahz</h5>
					</div>
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
								<h4 className='contact-info'>7773210948</h4>
							</a>
							<a
								href='tel:7772412087'
								style={{ textDecoration: 'none' }}
								target='_blank'
								rel='noreferrer'
							>
								<h4 className='contact-info'>7772412087</h4>
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
							<h4 className='contact-info'>7774576803</h4>
						</div>
					</a>
					<div className='d-flex align-items-center my-2'>
						<img src={email} width='30px' height='30px' className='mx-3' />
						<h4 className='contact-info'>contacto@servimahz.com.mx</h4>
					</div>
					<a
						style={{ textDecoration: 'none' }}
						href='https://www.facebook.com/servimahz'
						target='_blank'
						rel='noreferrer'
					>
						<div className='d-flex align-items-center  my-2'>
							<img src={facebook} width='30px' height='30px' className='mx-3' />
							<h4 className='contact-info'>@servimaz</h4>
						</div>
					</a>
				</div>
			</footer>
		</>
	)
}
