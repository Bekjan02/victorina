import React, { useCallback, useEffect, useState } from 'react'
import localStorageUtil from '../../util/localStorageUtil'
import TableBodyData from './TableBodyData'

const TableStatHistory = () => {
	const { getValue } = localStorageUtil
	const stat = getValue('stat') || []
	const [isHistory, setIsHistory] = useState(stat[0] ? true : false)

	const cleanHistory = useCallback(() => {
		localStorage.setItem('stat', JSON.stringify([]))
		setIsHistory(false)
	})

	return (
		<div className='table__stat'>
			{isHistory ? (
				<>
					<div className='table__info'>
						<h2 className='stat__title'>История игр</h2>
						<button onClick={cleanHistory} className='gameInfo__btn'>
							Очистить историю
						</button>
					</div>
					<table className='stat__table'>
						<thead className='stat__head'>
							<tr className='stat__header-el'>
								<th className='stat__criteria col-2'>Кол-во вопросов</th>
								<th className='stat__criteria col-2'>Верных ответов</th>
								<th className='stat__criteria col-2'>Неверных ответов</th>
								<th className='stat__criteria col-2'>Сумма баллов</th>
								<th className='stat__criteria col-2'>Создано</th>
								<th className='stat__criteria col-2'>Завершено</th>
							</tr>
						</thead>
						<tbody className='stat__body'>
							{stat.map((item) => {
								return <TableBodyData item={item} />
							})}
						</tbody>
					</table>
				</>
			) : (
				''
			)}
		</div>
	)
}

export default TableStatHistory
