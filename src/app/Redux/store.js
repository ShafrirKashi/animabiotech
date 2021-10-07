import { createStore, applyMiddleware } from "redux";
import UsersReducer from './reducers'
import thunk from "redux-thunk";


const store = createStore(UsersReducer, applyMiddleware(thunk))

export default store