import { combineReducers } from "redux";
import {loadReducer} from './LoadReducer';
import {user } from '../login/reducers';

export const rootReducer = combineReducers({loadReducer, user});