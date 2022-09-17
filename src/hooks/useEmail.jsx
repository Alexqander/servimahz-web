import { useState } from 'react'
import styles from '../assets/css/buttonServi.module.css'
import emailjs from '@emailjs/browser'

function useEmail(inputs) {
	const [enviado, setEnviando] = useState(false)
	const [message, setMessage] = useState('Enviar')
	const [design, setDesign] = useState(styles.boton2)
	const sendEmail = (inputs) => {
		setEnviando(true)

		const reset = () => {
			setDesign(styles.boton2)
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
						setDesign(styles.boton4)
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
