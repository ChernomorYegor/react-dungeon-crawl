import update from 'immutability-helper';
import {handleActions} from 'redux-actions';
import ActionsTopResults from './../actions/topResults';

const initialState = {
    isTopResultsShow: false,
    playerName: '',
    isPlayerNameError: false,
    topResults: [],
};

const topResultsReducer = handleActions({
    [ActionsTopResults['TOP_RESULTS/SHOW_TOP_RESULTS']]: (state, action) => {
        return update(state, {
            $merge: {
                isTopResultsShow: true,
            }
        });
    },
    [ActionsTopResults['TOP_RESULTS/HIDE_TOP_RESULTS']]: (state, action) => {
        return update(state, {
            $merge: {
                isTopResultsShow: false,
            }
        });
    },
    [ActionsTopResults['TOP_RESULTS/PLAYER_NAME_CHANGED']]: (state, action) => {
        return update(state, {
            $merge: {
                playerName: action.payload.target.value,
                isPlayerNameError: initialState.isPlayerNameError,
            }
        });
    },
    [ActionsTopResults['TOP_RESULTS/GET_RESULTS_SUCCESSFULLY']]: (state, action) => {
        console.log(action.payload);
        if (action.payload !== null) {
            return update(state, {
                $merge: {
                    topResults: action.payload,
                }
            });
        }
    },
    [ActionsTopResults['TOP_RESULTS/SAVE_RESULT_SUCCESSFULLY']]: (state, action) => {
        return update(state, {
            $merge: {
                topResults: action.payload,
            }
        });
    },
    [ActionsTopResults['TOP_RESULTS/PLAYER_NAME_ERROR']]: (state, action) => {
        return update(state, {
            $merge: {
                isPlayerNameError: true,
            }
        });
    },
}, initialState);

export default topResultsReducer;