import { React } from 'react'
import QuestionItemButton from './QuestionItemButton'

const QuestionsItem = ({ questions, categoryes }) => {
	return (
		<div className='questionsItem'>
			<span className='questionsItem__category'>{categoryes}</span>
			<QuestionItemButton key={categoryes} questions={questions || []} />
		</div>
	)
}

export default QuestionsItem
