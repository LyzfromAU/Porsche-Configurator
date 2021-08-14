import { combineReducers } from 'redux';
import carReducer from './carReducer';
import stepReducer from './stepReducer';
import themeReducer from './themeReducer';

const allReducers = combineReducers({
    car: carReducer,
    step: stepReducer,
    theme: themeReducer,
});

export default allReducers;