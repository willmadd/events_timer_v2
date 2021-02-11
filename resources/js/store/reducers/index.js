import { combineReducers } from "redux";
import {loadReducer} from './LoadReducer';
import {user } from '../login/reducers';
import {locale} from '../loading/reducer'

export const rootReducer = combineReducers({loadReducer, user, locale});