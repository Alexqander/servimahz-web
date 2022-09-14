import { Form } from 'react-bootstrap'
import { ButtonServi } from '../botones/ButtonServi'
import useEmail from '../../hooks/useEmail'
import { Formik } from 'formik'
import * as Yup from 'yup'
export const ContacForm = () => {
	const { sendEmail, design, message, enviado } = useEmail()

	const schema = Yup.object().shape({
		user_name: Yup.string().required('Campo obligatorio'),
		user_phone: Yup.number().required('Campo Obligatorio'),
		user_email: Yup.string()
			.email('Correo no valido')
			.required('Ingrese un correo'),
		message: Yup.string().required('Campo obligatorio'),
	})

	return (
		<>
			<Formik
				initialValues={{
					user_name: '',
					user_phone: '',
					user_email: '',
					message: '',
					user_asunto: '',
				}}
				validationSchema={schema}
				onSubmit={(values, { resetForm }) => {
					console.log('entre al enviar')

					const mensaje = {
						user_name: values.user_name,
						user_phone: values.user_phone,
						user_email: values.user_email,
						message: values.message,
						user_asunto: values.user_asunto,
					}
					sendEmail(mensaje)
				}}
			>
				{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
					<Form className='row px-5 py-5' onSubmit={handleSubmit}>
						<Form.Group className='mb-3 col-12 col-lg-6'>
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type='text'
								placeholder='ingresa un nombre'
								name='user_name'
								value={values.user_name}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.user_name && <div className=''>{errors.user_name}</div>}
						</Form.Group>
						<Form.Group className='mb-3 col-12 col-lg-6'>
							<Form.Label>Telefono</Form.Label>
							<Form.Control
								type='tel'
								placeholder='+5277'
								name='user_phone'
								value={values.user_phone}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.user_phone && <div className=''>{errors.user_name}</div>}
						</Form.Group>
						<Form.Group className='mb-3 col-12 col-lg-6'>
							<Form.Label>Email</Form.Label>
							<Form.Control
								type='email'
								placeholder='email@example.com'
								name='user_email'
								value={values.user_email}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							{errors.user_email && <div className=''>{errors.user_name}</div>}
						</Form.Group>
						<Form.Group className='mb-3 col-12 col-lg-6'>
							<Form.Label>Asunto</Form.Label>
							<Form.Select aria-label='selecciona un asunto' name='user_asunto'>
								<option>selecciona un asunto</option>
								<option value='Cotizacion' name='asunto'>
									Cotizacion
								</option>
								<option value='Servicio' name='asunto'>
									Servicio
								</option>
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3 col-12'>
							<Form.Label>Mensaje</Form.Label>
							<Form.Control
								as='textarea'
								name='message'
								value={values.message}
								onChange={handleChange}
								onBlur={handleBlur}
							>
								{errors.message && <div className=''>{errors.user_name}</div>}
							</Form.Control>
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
				)}
			</Formik>
		</>
	)
}
