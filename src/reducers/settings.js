import update from 'immutability-helper';
import {handleActions} from 'redux-actions';

import ActionsStartMenu from "../actions/startMenu";
import ActionsSettings from './../actions/settings';

const initialState = {
    isSettingsShow: false,
    difficulty: 20,
    mapWidth: 20,
    mapHeight: 100,
    viewportWidth: 20,
    viewportHeight: 10,
};

const settingsReducer = handleActions({
    [ActionsStartMenu['SETTINGS/SHOW_SETTINGS']]: (state, action) => {
        return update(state, {
            $merge: {
                isSettingsShow: true,
            }
        });
    },

    [ActionsSettings['SETTINGS/HIDE_SETTINGS']]: (state, action) => {
        return update(state, {
            $merge: {
                isSettingsShow: false,
            }
        });
    },
    [ActionsSettings['SETTINGS/SAVE_SETTINGS']]: (state, action) => {
        return update(state, {
            $merge: {
                difficulty: action.payload.difficultyInner,
                mapHeight: action.payload.mapHeightInner,
                viewportHeight: action.payload.viewportHeightInner,
            }
        });
    },
}, initialState);

export default settingsReducer;