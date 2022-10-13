import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: false,
	modalValue: [],
	isCorrect: '',
}

export const modalSlice = createSlice({
	name: 'Modal',
	initialState,
	reducers: {
		openModal: (state, action) => {
			state.isOpen = true
			state.modalValue = action.payload
		},
		closeModal: (state) => {
			state.isOpen = false
		},
		addAnswer: (state, action) => {
			state.isCorrect = action.payload
		},
	},
})

export const { openModal, addAnswer, closeModal } = modalSlice.actions

export default modalSlice.reducer
