import { combineReducers } from 'redux'
import authReducer from './Auth/authReducer'

export const reducers = combineReducers({
  auth: authReducer,
})
