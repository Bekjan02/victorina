import { configureStore, combineReducers } from '@reduxjs/toolkit'
import getDataReducer from './GetData/getDataSlice'
import modalReducer from './Modal/ModalSlice'
import modalUserReducer from './ModalUser/modalUserSlice'
import filteredDataReducer from './FilteredData/FilteredDataSlice'

const rootReducers = combineReducers({
	getDataReducer,
	modalReducer,
	filteredDataReducer,
	modalUserReducer,
})

export const store = configureStore({
	reducer: rootReducers,
})
