import useEmail from '../../hooks/useEmail'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { ButtonForm } from '../botones/ButtonForm'
export const ContacForm = () => {
	const { sendEmail, design, message, enviado } = useEmail()
	const schema = Yup.object({
		user_name: Yup.string().required('Ingrese un nombre'),
		user_phone: Yup.string().required('Ingrese un numero de telefono'),
		user_email: Yup.string()
			.email('Ingrese un correo valido')
			.required('Ingrese un correo'),
		user_asunto: Yup.string().required('Ingrese un asunto'),
		message: Yup.string().required('Ingrese un mensaje'),
	}).required()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) })

	const onSubmit = (data) => {
		console.log(data)
		sendEmail(data)
		reset()
	}

	return (
		<>
			<div className=' rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
				<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
					Envianos un email
				</h2>
				<p className='leading-relaxed mb-5 text-gray-600'>
					Solicita una cotizacion o servicio
				</p>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className='-mx-2 md:items-center md:flex'>
						<div className='flex-1 px-2'>
							<label className='block mb-2 text-sm text-gray-600 '>
								Nombre
							</label>
							<input
								{...register('user_name')}
								name='user_name'
								type='text'
								placeholder='ingrese su nombre'
								className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
									errors.user_name ? 'border-red-500' : 'border-gray-200'
								} rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
							/>
							<p className='text-red-600'>{errors.user_name?.message}</p>
						</div>
						<div className='flex-1 px-2 mt-4 md:mt-0'>
							<label className='block mb-2 text-sm text-gray-600 '>
								Telefono
							</label>
							<input
								{...register('user_phone')}
								name='user_phone'
								type='text'
								placeholder='ingrese su numero de telefono'
								className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
									errors.user_phone ? 'border-red-500' : 'border-gray-200'
								} rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
							/>
							<p className='text-red-600'>{errors.user_phone?.message}</p>
						</div>
					</div>
					<div className='-mx-2 md:items-center md:flex'>
						<div className='flex-1 px-2 mt-4'>
							<label className='block mb-2 text-sm text-gray-600 '>Email</label>
							<input
								{...register('user_email')}
								name='user_email'
								type='email'
								placeholder='johndoe@example.com'
								className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
									errors.user_email ? 'border-red-500' : 'border-gray-200'
								} rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
							/>
							<p className='text-red-600'>{errors.user_email?.message}</p>
						</div>
						<div className='flex-1 px-2 mt-4'>
							<label className='block mb-2 text-sm text-gray-600 '>
								Asunto
							</label>
							<input
								{...register('user_asunto')}
								name='user_asunto'
								type='text'
								placeholder='cotizacion , servicio etc ...'
								className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
									errors.user_asunto ? 'border-red-500' : 'border-gray-200'
								} rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
							/>
							<p className='text-red-600'>{errors.user_asunto?.message}</p>
						</div>
					</div>

					<div className='w-full mt-4'>
						<label className='block mb-2 text-sm text-gray-600'>Mensaje</label>
						<textarea
							{...register('message')}
							className={`block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
								errors.message ? 'border-red-500' : 'border-gray-200'
							} rounded-lg focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
							placeholder='escribe tu mensaje aqui'
							defaultValue={''}
						/>
						<p className='text-red-600'>{errors.message?.message}</p>
					</div>
					<ButtonForm
						type='submit'
						message={message}
						isLoading={enviado}
						design={design}
					></ButtonForm>
				</form>
			</div>
		</>
	)
}
