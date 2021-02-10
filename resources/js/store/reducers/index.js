import { combineReducers } from "redux";
import {loadReducer} from './LoadReducer';
import { userData } from '../login/reducers';

export const rootReducer = combineReducers({loadReducer, userData});