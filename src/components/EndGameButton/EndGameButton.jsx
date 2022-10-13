import React, { useCallback } from 'react'
import localStorageUtil from '../../util/localStorageUtil'
import { useNavigate } from 'react-router-dom'
const EndGameButton = ({ setIsStarted }) => {
	const { setValue, getValue } = localStorageUtil
	const gameNow = getValue('gamepPlaying')
	const { buttons, created_at } = gameNow
	const stat = getValue('stat') || []
	const navigate = useNavigate()
	
	const endGame = useCallback(() => {
		const date = new Date()
		const now = date.toLocaleString()
		setIsStarted(false)

		navigate('/')
		setValue('stat', [...stat, { buttons, created_at, ended_at: now }])
		setValue('gamepPlaying', { ...gameNow, inGame: false, buttons: [], created_at: '' })
	})
	return (
		<button onClick={endGame} className='gameInfo__btn'>
			Заверишть
		</button>
	)
}

export default EndGameButton
