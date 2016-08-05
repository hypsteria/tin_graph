import { combineReducers } from 'redux';
import Graph from './GraphReducer';

const graphApp = combineReducers({ Graph });

export default graphApp;