import { combineReducers } from 'redux'

import game from './game';
import settings from './settings';
import topResults from './topResults';

export default combineReducers({ game, settings, topResults });