import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from '../GetData/getDataActions'

const initialState = {
	filteredData: [],
}

const filteredDataSlice = createSlice({
	name: 'filteredData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchData.fulfilled, (state, action) => {
			const data = action.payload

			const uniqTitle = [...new Set(data?.map((item) => item.category.title))].slice(0, 5)

			for (let i = 0; i < uniqTitle.length; i++) {
				const fiveQuestions = data
					.filter((data) => data.category.title === uniqTitle[i])
					.slice(0, 5)

				state.filteredData.push({ uniqTitle: uniqTitle[i], fiveQuestions })
			}
		})
	},
})

export const {} = filteredDataSlice.actions

export default filteredDataSlice.reducer
