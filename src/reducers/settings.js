import update from 'immutability-helper';
import {handleActions} from 'redux-actions';
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
    [ActionsSettings['SETTINGS/SHOW_SETTINGS']]: (state, action) => {
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
    [ActionsSettings['SETTINGS/GET_SETTINGS_SUCCESSFULLY']]: (state, action) => {
        return update(state, {
            $merge: {
                difficulty: action.payload.difficultyLocal,
                mapWidth: action.payload.mapWidthLocal,
                mapHeight: action.payload.mapHeightLocal,
                viewportWidth: action.payload.viewportWidthLocal,
                viewportHeight: action.payload.viewportHeightLocal,
            }
        });
    },
    [ActionsSettings['SETTINGS/SAVE_SETTINGS_SUCCESSFULLY']]: (state, action) => {
        return update(state, {
            $merge: {
                difficulty: action.payload.difficultyLocal,
                mapWidth: action.payload.mapWidthLocal,
                mapHeight: action.payload.mapHeightLocal,
                viewportWidth: action.payload.viewportWidthLocal,
                viewportHeight: action.payload.viewportHeightLocal,
            }
        });
    },
}, initialState);

export default settingsReducer;