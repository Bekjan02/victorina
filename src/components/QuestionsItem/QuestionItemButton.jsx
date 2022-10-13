import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { openModal } from '../../store/Modal/ModalSlice'
import localStorageUtil from '../../util/localStorageUtil'

const QuestionItemButton = ({ questions }) => {
	const dispatch = useDispatch()
	const handleClick = useCallback((item, e) => {
		e.target.disabled = true
		dispatch(openModal(item))
	})

	const { getValue } = localStorageUtil
	const gamepPlaying = getValue('gamepPlaying') || []
	const Buttons = questions.map((item, i) => {
		const findedButtons = gamepPlaying.buttons?.find((findItem) => findItem.id == item.id) || []
		const { className, id } = findedButtons
		return (
			<button
				key={i}
				disabled={id}
				onClick={(e) => handleClick(item, e)}
				className={`questionsItem__button ${className}`}>
				{item.value}
			</button>
		)
	})
	return <div className='questionsItem__buttons'>{Buttons}</div>
}

export default QuestionItemButton
