import {combineReducers} from 'redux';
import {inputsReducer} from './inputs.reducer';
import {moviesReducer} from './movies.reducer';
import {tabsReducer} from './tabs.reducer';

export const rootReducer = combineReducers({
  inputs: inputsReducer,
  movies: moviesReducer,
  tabs: tabsReducer,
});
