import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeUserModal } from '../../store/ModalUser/modalUserSlice'

const ModalUser = ({ setLoged }) => {
	const dispatch = useDispatch()
	const [inputValue, setInputValue] = useState()
	const handleSubmit = useCallback((event) => {
		event.preventDefault()
		event.stopPropagation()

		localStorage.setItem(
			'gamepPlaying',
			JSON.stringify({ name: inputValue, inGame: false, buttons: [] }),
		)
		dispatch(closeUserModal())
		setLoged(inputValue)
	})
	const handleChange = useCallback((e) => {
		setInputValue(e.target.value)
	})
	return (
		<div className={'modal'}>
			<div onClick={(e) => e.stopPropagation()} className='modal__backdrop'>
				<div className='modal__wrapper'>
					<h2 className='modalUser__title'>Как вас зовут?</h2>
					<form onSubmit={handleSubmit} className='modal__form' action=''>
						<input
							value={inputValue}
							onChange={handleChange}
							className='modal__form-input'
							type='text'
							placeholder='Ответ'
						/>
						<div className='modal__form-action modalUser__form-action'>
							<p className='modalUser__form-hint'>
								От двух символов, разрешены английские и русские буквы, числа и знак подчеркивания
							</p>
							<button className='modal__form-button modalUser__form-button'>Ответить</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ModalUser
