import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import QuestionsItem from '../components/QuestionsItem/QuestionsItem'
import Modal from '../components/Modal/Modal'
import CountGame from '../components/CountGame/CountGame'
import Header from '../components/Header/Header'
import localStorageUtil from '../util/localStorageUtil'
import EndGameButton from '../components/EndGameButton/EndGameButton'
import Loader from '../components/Loader/Loader'
import ModalUser from '../components/ModalUser/ModalUser'
import ValueInfo from '../components/gammeValueInfo/gammeValueInfo'
import StartButton from '../components/startGameButton/StartButton'

const GamePage = () => {
	const { data, isLoad, error } = useSelector((state) => state.getDataReducer)
	const { isOpen } = useSelector((state) => state.modalReducer)
	const filteredData = useSelector((state) => state.filteredDataReducer.filteredData) || []
	const { getValue } = localStorageUtil
	const startedGame = getValue('gamepPlaying')
	const { inGame, name } = startedGame

	const [answerValue, setAnswerValue] = useState(0)
	const [isStarted, setIsStarted] = useState(inGame)
	const [loged, setLoged] = useState(name ? true : false)

	return (
		<div>
			{isOpen && <Modal setAnswerValue={setAnswerValue} />}
			{error && <h1>Произошла ошибка</h1>}
			{name || loged ? '' : <ModalUser setLoged={setLoged} />}
			{isStarted ? (
				<Fragment>
					<Header />
					{isLoad ? (
						<Loader />
					) : (
						<>
							<div className='questions'>
								{filteredData.map((item) => {
									return (
										<Fragment>
											{data ? (
												<QuestionsItem
													key={item.uniqTitle}
													categoryes={item.uniqTitle}
													questions={item.fiveQuestions}
												/>
											) : (
												'error'
											)}
										</Fragment>
									)
								})}
							</div>
							<div className='gameInfo'>
								<div className='gameInfo__content'>
									<div className='gameInfo__item gameInfo__item-left'>
										<ValueInfo answerValue={answerValue} />
									</div>
									<div className='gameInfo__item gameInfo__item-right'>
										<CountGame />
										<EndGameButton setIsStarted={setIsStarted} />
									</div>
								</div>
							</div>
						</>
					)}
				</Fragment>
			) : (
				<StartButton setIsStarted={setIsStarted} />
			)}
		</div>
	)
}

export default GamePage
