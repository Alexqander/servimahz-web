import useEmail from '../../hooks/useEmail'
export const ContacForm = () => {
	const { sendEmail, design, message, enviado } = useEmail()

	return (
		<>
			<div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
				<h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>
					Contactanos
				</h2>
				<p className='leading-relaxed mb-5 text-gray-600'>
					Solicita una cotizacion o servicio
				</p>
				<div className='relative mb-4'>
					<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
						Nombre
					</label>
					<input
						type='email'
						id='email'
						name='user_name'
						value={''}
						onChange={''}
						onBlur={''}
						isInvalid={''}
						className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
						Telefono
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
						Correo
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label htmlFor='email' className='leading-7 text-sm text-gray-600'>
						Asunto
					</label>
					<input
						type='email'
						id='email'
						name='email'
						className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
					/>
				</div>
				<div className='relative mb-4'>
					<label htmlFor='message' className='leading-7 text-sm text-gray-600'>
						Mensaje
					</label>
					<textarea
						id='message'
						name='message'
						className='w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out'
						defaultValue={''}
					/>
				</div>
				<button className='text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg'>
					Enviar
				</button>
				<p className='text-xs text-gray-500 mt-3'>
					Chicharrones blog helvetica normcore iceland tousled brook viral
					artisan.
				</p>
			</div>
		</>
	)
}
