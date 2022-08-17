import { Form } from 'react-bootstrap'
import { useRef } from 'react'
import { ButtonServi } from '../botones/ButtonServi'
import useEmail from '../../hooks/useEmail'
export const ContacForm = () => {
	const form = useRef()
	const { sendEmail, design, message, enviado } = useEmail(form)

	return (
		<>
			<Form className='row px-5 py-5' ref={form} onSubmit={sendEmail}>
				<Form.Group className='mb-3 col-12 col-lg-6'>
					<Form.Label>Nombre</Form.Label>
					<Form.Control type='text' placeholder='tu nombre' name='user_name' />
				</Form.Group>
				<Form.Group className='mb-3 col-12 col-lg-6'>
					<Form.Label>Telefono</Form.Label>
					<Form.Control type='tel' placeholder='+5277' name='user_phone' />
				</Form.Group>
				<Form.Group className='mb-3 col-12 col-lg-6'>
					<Form.Label>Email</Form.Label>
					<Form.Control
						type='email'
						placeholder='email@example.com'
						name='user_email'
					/>
				</Form.Group>
				<Form.Group className='mb-3 col-12 col-lg-6'>
					<Form.Label>Asunto</Form.Label>
					<Form.Select aria-label='selecciona un asunto' name='user_asunto'>
						<option>selecciona un asunto</option>
						<option value='Cotizacion'>Cotizacion</option>
						<option value='Servicio'>Servicio</option>
					</Form.Select>
				</Form.Group>
				<Form.Group className='mb-3 col-12'>
					<Form.Label>Mensaje</Form.Label>
					<Form.Control as='textarea' name='message'></Form.Control>
				</Form.Group>
				<Form.Group className='mb-3'>
					<ButtonServi
						design={design}
						isLoading={enviado}
						message={message}
						formulario='submit'
					/>
				</Form.Group>
			</Form>
		</>
	)
}
