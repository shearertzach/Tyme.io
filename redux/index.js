import { combineReducers } from 'redux'
import authReducer from './Auth/authReducer'
import dashboardReducer from './Dashboard/dashboardReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
})

export default rootReducer
