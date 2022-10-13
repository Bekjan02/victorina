import React, { useEffect, useState } from 'react'
import localStorageUtil from '../../util/localStorageUtil'

const CountGame = ({}) => {
	const { getValue } = localStorageUtil
	const [totalCount, setTotalCount] = useState(0)
	const { buttons } = getValue('gamepPlaying') || []
	function getTotalPoints() {
		const points = buttons.map((item) =>
			item.className == 'correct' ? item.value : item.value * -1,
		)
		const totalCount = points.reduce((acc, num) => acc + num, 0)
		setTotalCount(totalCount)
	}

	useEffect(() => {
		getTotalPoints()
	}, [buttons])

	return (
		<div>
			<div className='gameInfo__item-totalCount'>
				<span className=''>Счет:</span>
				<span className='text-bold'> {totalCount} </span>
			</div>
		</div>
	)
}

export default CountGame
