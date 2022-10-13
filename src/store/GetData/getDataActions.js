import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchData = createAsyncThunk('data/fetchAll', async (_, thunkAPI) => {
	try {
		const response = await fetch('http://jservice.io/api/clues')
		const data = await response.json()
		return data
	} catch (e) {
		console.log(e)
		thunkAPI.rejectWithValue('НЕ удалось загрузить')
	}
})
