import { useState } from 'react'
import styles from '../assets/css/buttonServi.module.css'
import emailjs from '@emailjs/browser'

function useEmail(formRef) {
	const [enviado, setEnviando] = useState(false)
	const [message, setMessage] = useState('Enviar')
	const [design, setDesign] = useState(styles.boton1)
	const sendEmail = (e) => {
		e.preventDefault()

		setEnviando(true)

		const reset = () => {
			e.target.reset()
			setDesign(styles.boton1)
			setMessage('Enviar')
		}

		const enviar = () => {
			emailjs
				.sendForm(
					import.meta.env.VITE_APP_SERVICE_ID,
					import.meta.env.VITE_APP_TEMPLATE_ID,
					formRef.current,
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
						console.log(error.text)
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
