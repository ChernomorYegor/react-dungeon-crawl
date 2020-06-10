import update from 'immutability-helper';
import {handleActions} from 'redux-actions';
import ActionsGame from './../actions/game';

const initialState = {
    gameOn: false,
    map: [],
    certificates: 0,
    skills: 0,
    isDefeatedBoss: false,
    level: 0,
    points: 0,
    currentOffsetX: 0,
    currentOffsetY: 0,
    playerX: 0,
    playerY: 0,
};

const gameReducer = handleActions({
    [ActionsGame['GAME/START_GAME']]: (state, action) => {
        console.log(action.payload);
        return update(state, {
            $merge: {
                gameOn: true,
                map: action.payload.map,
                level: 1,
                playerX: action.payload.playerX,
            }
        });
    },
    [ActionsGame['GAME/MOVE_LEFT']]: (state, action) => {
        return update(state, {
            map: {
                 [state.playerY]: {[state.playerX]: {$set: 'empty'}, [action.payload]: {$set: 'player'}},
            },
            playerX: {$set: action.payload},
        });
    },
    [ActionsGame['GAME/MOVE_UP']]: (state, action) => {
        return update(state, {
            map: {
                [state.playerY]: {[state.playerX]: {$set: 'empty'}},
                [action.payload]: {[state.playerX]: {$set: 'player'}}
            },
            playerY: {$set: action.payload},
        });
    },
    [ActionsGame['GAME/MOVE_RIGHT']]: (state, action) => {
        return update(state, {
            map: {
                [state.playerY]: {[state.playerX]: {$set: 'empty'}, [action.payload]: {$set: 'player'}},
            },
            playerX: {$set: action.payload},
        });
    },
    [ActionsGame['GAME/MOVE_DOWN']]: (state, action) => {
        return update(state, {
            map: {
                [state.playerY]: {[state.playerX]: {$set: 'empty'}},
                [action.payload]: {[state.playerX]: {$set: 'player'}}
            },
            playerY: {$set: action.payload},
        });
    },
    [ActionsGame['GAME/CHANGE_OFFSET_X']]: (state, action) => {
        return update(state, {
            $merge: {
                currentOffsetX: action.payload,
            }
        });
    },
    [ActionsGame['GAME/CHANGE_OFFSET_Y']]: (state, action) => {
        return update(state, {
            $merge: {
                currentOffsetY: action.payload,
            }
        });
    },
    [ActionsGame['GAME/ADD_CERTIFICATE']]: (state, action) => {
        return update(state, {
            $merge: {
                certificates: state.certificates + 1,
                points: state.points + action.payload,
            }
        });
    },
    [ActionsGame['GAME/START_LEVEL2']]: (state, action) => {
        return update(state, {
            $merge: {
                map: action.payload.map,
                level: 2,
            }
        });
    },
    [ActionsGame['GAME/ADD_SKILL']]: (state, action) => {
        return update(state, {
            $merge: {
                skills: state.skills + 1,
                points: state.points + action.payload,
            }
        });
    },
    [ActionsGame['GAME/REMOVE_BOSS_WALLS']]: (state, action) => {
        return update(state, {
            $merge: {
                map: action.payload.map,
            }
        });
    },
    [ActionsGame['GAME/ADD_POINTS_BOSS']]: (state, action) => {
        return update(state, {
            $merge: {
                points: state.points + action.payload,
            }
        });
    },
    [ActionsGame['GAME/QUIT_GAME']]: (state, action) => {
        return update(state, {
            $merge: {
                gameOn: initialState.gameOn,
                map: initialState.map,
                certificates: initialState.certificates,
                skills: initialState.skills,
                isDefeatedBoss: initialState.isDefeatedBoss,
                level: initialState.level,
                points: initialState.points,
                currentOffsetY: initialState.currentOffsetY,
                playerX: initialState.playerX,
                playerY: initialState.playerY,
            }
        });
    },
    [ActionsGame['GAME/END_GAME']]: (state, action) => {
        return update(state, {
            $merge: {
                isDefeatedBoss: true,
            }
        });
    },
}, initialState);

export default gameReducer;