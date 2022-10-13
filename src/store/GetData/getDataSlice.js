import { createSlice } from '@reduxjs/toolkit'
import { fetchData } from './getDataActions'

const initialState = {
	data: [],
	isLoad: false,
	error: '',
}

export const getDataSlice = createSlice({
	name: 'getData',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchData.fulfilled, (state, action) => {
				state.isLoad = false
				state.error = ''
				state.data = action.payload
			})
			.addCase(fetchData.pending, (state) => {
				state.isLoad = true
			})
			.addCase(fetchData.rejected, (state, action) => {
				state.isLoad = false
				state.error = action.payload
			})
	},
})

export const {} = getDataSlice.actions

export default getDataSlice.reducer
