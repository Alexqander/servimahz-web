import './App.css'
import { AppRouter } from './routes/AppRouter'
import AOS from 'aos'
import { useEffect } from 'react'

function App() {
	useEffect(() => {
		AOS.init({
			duration: 1300,
		})
	}, [])

	return (
		<div className='App'>
			<AppRouter />
		</div>
	)
}

export default App
