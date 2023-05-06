import { PropTypes } from 'prop-types'
import { PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Loader } from '../../assets/components/Loader'

export const ButtonForm = ({ isLoading, message, design }) => {
	return (
		<>
			<button
				className={`w-full flex justify-center px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform ${design}`}
			>
				{isLoading ? (
					<>
						Enviando
						<Loader></Loader>
					</>
				) : (
					<>
						{message}
						<PaperAirplaneIcon className='w-5 h-5 text-white mx-4' />
					</>
				)}
			</button>
		</>
	)
}

ButtonForm.propTypes = {
	isLoading: PropTypes.bool,
	message: PropTypes.string,
	design: PropTypes.string,
}
