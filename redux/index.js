import { combineReducers } from 'redux'
import authReducer from './Auth/authReducer'
import clientsReducer from './Clients/clientsReducer'
import dashboardReducer from './Dashboard/dashboardReducer'
import timesheetsReducer from './Timesheets/timesheetsReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  dashboard: dashboardReducer,
  clients: clientsReducer,
  timesheets: timesheetsReducer,
})

export default rootReducer
