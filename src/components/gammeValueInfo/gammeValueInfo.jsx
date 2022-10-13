import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const ValueInfo = ({ answerValue }) => {
	const isCorrect = useSelector((state) => state.modalReducer.isCorrect)
	return (
		<>
			{isCorrect ? (
				<Fragment>
					<p className=''>Ответ правильный</p>
					<span className='text-bold'>{answerValue}</span>
				</Fragment>
			) : (
				<Fragment>
					<p className='gameInfo-incorrect'>Ответ неверный</p>
					<span className='text-bold gameInfo-incorrect'>{answerValue}</span>
				</Fragment>
			)}
		</>
	)
}

export default ValueInfo
