import authReducer from './authReducer';
import bookReducer from './bookReducers';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    book: bookReducer,
    firestore: firestoreReducer
})

export default rootReducer