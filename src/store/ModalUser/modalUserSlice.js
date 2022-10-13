import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isOpen: true,
}

const modalUserSlice = createSlice({
	name: 'modalUserSlice',
	initialState,
	reducers: {
		closeUserModal: (state) => {
			state.isOpen = false
		},
	},
})

export const { closeUserModal } = modalUserSlice.actions

export default modalUserSlice.reducer
