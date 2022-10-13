import React, { useCallback, useEffect, useState } from 'react'
import localStorageUtil from '../../util/localStorageUtil'
import EndGameButton from '../EndGameButton/EndGameButton'
import { useNavigate } from 'react-router-dom'

const Table = ({}) => {
	const { getValue } = localStorageUtil
	const [totalCount, setTotalCount] = useState(0)
	const [countTrue, setCountTrue] = useState(0)
	const [countFalse, setCountFalse] = useState(0)
	const [isStarted, setIsStarted] = useState()
	const { buttons, created_at } = getValue('gamepPlaying') || []
	const navigate = useNavigate()
	function getTotalPoints() {
		const points = buttons.map((item) =>
			item.className == 'correct' ? item.value : item.value * -1,
		)
		const totalCount = points.reduce((acc, num) => acc + num, 0)
		setTotalCount(totalCount)
	}

	function getCountTrue() {
		setCountTrue(buttons.filter((item) => item.className == 'correct').length)
	}
	
	function getCountFalse() {
		setCountFalse(buttons.filter((item) => item.className == 'incorrect').length)
	}

	useEffect(() => {
		getTotalPoints()
		getCountTrue()
		getCountFalse()
	}, [buttons])

	const continueGame = useCallback(() => {
		return navigate('/')
	})

	return (
		<div className='stat__now'>
			<h2 className='stat__title'>Текущая игра</h2>
			<table className='stat__table'>
				<thead className='stat__head'>
					<tr className='stat__header-el'>
						<th className='stat__criteria col-2'>Кол-во вопросов</th>
						<th className='stat__criteria col-2'>Верных ответов</th>
						<th className='stat__criteria col-2'>Неверных ответов</th>
						<th className='stat__criteria col-2'>Сумма баллов</th>
						<th className='stat__criteria col-2'>Создано</th>
						<th className='stat__criteria col-2'>Действия</th>
					</tr>
				</thead>
				<tbody className='stat__body'>
					<tr className='table__body-row'>
						<td className='table__body-data col-2'> {buttons.length} </td>
						<td className='table__body-data col-2'> {countTrue} </td>
						<td className='table__body-data col-2'> {countFalse} </td>
						<td className='table__body-data col-2'>{totalCount}</td>
						<td className='table__body-data col-2'>{created_at}</td>
						<td className='table__body-data col-2'>
							<button onClick={continueGame} className='btn__continue'>
								Продолжить
							</button>
							<EndGameButton setIsStarted={setIsStarted} />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

export default Table
