import {createAction} from 'redux-actions';

export default {
    'GAME/START_GAME': createAction('GAME/START_GAME'),
    'GAME/MOVE_LEFT': createAction('GAME/MOVE_LEFT'),
    'GAME/MOVE_UP': createAction('GAME/MOVE_UP'),
    'GAME/MOVE_RIGHT': createAction('GAME/MOVE_RIGHT'),
    'GAME/MOVE_DOWN': createAction('GAME/MOVE_DOWN'),
    'GAME/CHANGE_OFFSET': createAction('GAME/CHANGE_OFFSET'),
    'GAME/ADD_CERTIFICATE': createAction('GAME/ADD_CERTIFICATE'),
    'GAME/START_LEVEL2': createAction('GAME/START_LEVEL2'),
    'GAME/ADD_SKILL': createAction('GAME/ADD_SKILL'),
    'GAME/REMOVE_BOSS_WALLS': createAction('GAME/REMOVE_BOSS_WALLS'),
    'GAME/ADD_POINTS_BOSS': createAction('GAME/ADD_POINTS_BOSS'),
    'GAME/QUIT_GAME': createAction('GAME/QUIT_GAME'),
    'GAME/END_GAME': createAction('GAME/END_GAME'),
};