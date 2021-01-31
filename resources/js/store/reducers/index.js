import { combineReducers } from "redux";
import {loadReducer} from './LoadReducer';

export const rootReducer = combineReducers({loadReducer});