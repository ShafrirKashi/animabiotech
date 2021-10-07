import { createStore } from "redux";
import UsersReducer from './reducers'


const store = createStore(UsersReducer)

export default store