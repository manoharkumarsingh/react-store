import {combineReducers} from 'redux'
import User from './user';

const allReducers = combineReducers({
 User : User
});

export default allReducers;