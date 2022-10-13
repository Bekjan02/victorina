import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addAnswer, closeModal } from '../../store/Modal/ModalSlice'
import localStorageUtil from '../../util/localStorageUtil'

const Modal = ({ setAnswerValue }) => {
	const dispatch = useDispatch()
	const { modalValue } = useSelector((state) => state.modalReducer)
	const { category, value, question } = modalValue

	const { getValue } = localStorageUtil

	const [counter, setCounter] = useState(60)
	const [inputValue, setInputValue] = useState('')
	let [isCorrect, setIsCorrect] = useState(true)

	const handleChange = useCallback((e) => {
		setInputValue(e.target.value)
	})

	const gamepPlaying = getValue('gamepPlaying') || []
	const id = modalValue.id

	const handleSubmit = (event) => {
		event.preventDefault()
		event.stopPropagation()
		setIsCorrect((isCorrect = modalValue.answer.toLowerCase() === inputValue.toLowerCase()))
		if (inputValue && isCorrect == true) {
			dispatch(closeModal())
			dispatch(addAnswer(isCorrect))
			setAnswerValue(value)
			localStorage.setItem(
				'gamepPlaying',
				JSON.stringify({
					...gamepPlaying,
					buttons: [
						...gamepPlaying.buttons,
						{ id, className: isCorrect ? 'correct' : 'incorrect', value },
					],
				}),
			)
		}
	}

	const closeModalClick = () => {
		dispatch(closeModal())
		setAnswerValue(value)
		localStorage.setItem(
			'gamepPlaying',
			JSON.stringify({
				...gamepPlaying,
				buttons: [...gamepPlaying.buttons, { id, className: 'incorrect', value }],
			}),
		)
	}

	useEffect(() => {
		const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
		if (counter <= 0) {
			dispatch(closeModal())
			localStorage.setItem(
				'gamepPlaying',
				JSON.stringify({
					...gamepPlaying,
					buttons: [...gamepPlaying.buttons, { id, className: 'incorrect', value }],
				}),
			)
			setIsCorrect(false)
			setCounter(60)
		}

		return () => clearInterval(timer)
	}, [counter])

	const CategoryTitle = useMemo(() => {
		return <h2 className='modal__title'> {category.title}</h2>
	}, [category.title])

	const Points = useMemo(() => {
		return <span className='modal__points'> {value} </span>
	}, [value])

	const Counter = useMemo(() => {
		return <span className='text-red'>осталось {counter} секунд</span>
	})

	const Input = useMemo(() => {
		return (
			<input
				value={inputValue}
				onChange={handleChange}
				className='modal__form-input'
				type='text'
				placeholder='Ответ'
			/>
		)
	})

	return (
		<div className={'modal'}>
			<div onClick={(e) => e.stopPropagation()} className='modal__backdrop'>
				<div className='modal__wrapper'>
					{isCorrect ? (
						<>
							<div className='modal__category'>
								{CategoryTitle}
								{Points}
							</div>
							<div className='modal__question'>
								<span> {question} </span>
							</div>
							<form onSubmit={handleSubmit} className='modal__form' action=''>
								{Input}
								<div className='modal__form-action'>
									{Counter}
									<button className='modal__form-button'>Ответить</button>
								</div>
							</form>
						</>
					) : (
						<div>
							<p>Ответ неверный верный ответ: {modalValue.answer}</p>
							<span onClick={closeModalClick} className='modal__close'>
								X
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Modal
