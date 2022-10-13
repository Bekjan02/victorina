import React, { useEffect, useState } from 'react'

const TableBodyData = ({ item }) => {
	const [totalCount, setTotalCount] = useState(0)
	const [countTrue, setCountTrue] = useState(0)
	const [countFalse, setCountFalse] = useState(0)
	const { buttons, created_at, ended_at } = item
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

	return (
		<tr className='table__body-row'>
			<td className='table__body-data col-2'> {buttons.length} </td>
			<td className='table__body-data col-2'> {countTrue} </td>
			<td className='table__body-data col-2'> {countFalse} </td>
			<td className='table__body-data col-2'>{totalCount}</td>
			<td className='table__body-data col-2'>{created_at}</td>
			<td className='table__body-data col-2'> {ended_at} </td>
		</tr>
	)
}

export default TableBodyData
