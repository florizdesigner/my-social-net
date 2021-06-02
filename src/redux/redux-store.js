import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk'

let reducersKit = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer
})

let store = createStore(reducersKit, applyMiddleware(thunk))
window.store = store
export default store