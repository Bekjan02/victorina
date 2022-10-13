import React from 'react'
import localStorageUtil from '../../util/localStorageUtil'

const StartButton = ({ setIsStarted }) => {
	const { getValue, setValue } = localStorageUtil
	const startedGame = getValue('gamepPlaying')
	
	const startGame = () => {
		const date = new Date()
		const now = date.toLocaleString()
		const stat = getValue('stat') || []
		setIsStarted(true)

		setValue('gamepPlaying', { ...startedGame, inGame: true, created_at: now })
		setValue('stat', [...stat])
	}

	return (
		<button className='gameStart__button' onClick={startGame}>
			Начать игру
		</button>
	)
}

export default StartButton
