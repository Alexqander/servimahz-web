import { useState } from 'react'
import emailjs from '@emailjs/browser'

function useEmail(inputs) {
	const [enviado, setEnviando] = useState(false)
	const [message, setMessage] = useState('Enviar')
	const [design, setDesign] = useState(
		' bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
	)
	const sendEmail = (inputs) => {
		setEnviando(true)

		const reset = () => {
			setDesign(
				' bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
			)
			setMessage('Enviar')
		}

		const enviar = () => {
			emailjs
				.send(
					import.meta.env.VITE_APP_SERVICE_ID,
					import.meta.env.VITE_APP_TEMPLATE_ID,
					inputs,
					import.meta.env.VITE_APP_USER_ID
				)
				.then(
					(result) => {
						setEnviando(false)
						setDesign(
							' bg-blue-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
						)
						setMessage('Enviado')

						setTimeout(() => {
							reset()
						}, 1000)

						console.log(result.text)
					},
					(error) => {
						console.error(error)
					}
				)
		}

		setTimeout(() => {
			enviar()
		}, 700)
	}

	return { sendEmail, design, message, enviado }
}

export default useEmail
