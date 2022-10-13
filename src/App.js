import './App.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GamePage from './views/GamePage'
import StatisticPage from './views/StatisticPage'
import { fetchData } from './store/GetData/getDataActions'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchData())
	}, [])

	return (
		<Router>
			<div className='App'>
				<div className='wrapper'>
					<Routes>
						<Route path='/' element={<GamePage />} />
						<Route path='/stat' element={<StatisticPage />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
