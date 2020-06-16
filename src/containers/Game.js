import {connect} from 'react-redux';
import gameOptions from "../gameOptions/gameOptions";
import ActionsGame from "../actions/game";
import ActionsTopResults from "../actions/topResults";
import Game from "../components/Game";

const mapStateToProps = state => {
    return {
        CERTIFICATES: gameOptions.CERTIFICATES,
        SKILLS: gameOptions.SKILLS,

        gameMap: state.game.map,
        currentCertificates: state.game.certificates,
        currentSkills: state.game.skills,
        isDefeatedBoss: state.game.isDefeatedBoss,
        level: state.game.level,
        points: state.game.points,
        currentOffsetX: state.game.currentOffsetX,
        currentOffsetY: state.game.currentOffsetY,
        playerX: state.game.playerX,
        playerY: state.game.playerY,

        difficulty: state.settings.difficulty,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,
        viewportWidth: state.settings.viewportWidth,
        viewportHeight: state.settings.viewportHeight,

        playerName: state.topResults.playerName,
        isPlayerNameError: state.topResults.isPlayerNameError,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        moveLeft: (newPlayerX) => dispatch(ActionsGame["GAME/MOVE_LEFT"](newPlayerX)),
        moveUp: (newPlayerY) => dispatch(ActionsGame["GAME/MOVE_UP"](newPlayerY)),
        moveRight: (newPlayerX) => dispatch(ActionsGame["GAME/MOVE_RIGHT"](newPlayerX)),
        moveDown: (newPlayerY) => dispatch(ActionsGame["GAME/MOVE_DOWN"](newPlayerY)),
        changeOffsetX: (currentOffsetX) => dispatch(ActionsGame["GAME/CHANGE_OFFSET_X"](currentOffsetX)),
        changeOffsetY: (currentOffsetY) => dispatch(ActionsGame["GAME/CHANGE_OFFSET_Y"](currentOffsetY)),
        addCertificate: (points) => dispatch(ActionsGame["GAME/ADD_CERTIFICATE"](points)),
        startLevel2: ({map}) => dispatch(ActionsGame["GAME/START_LEVEL2"]({map})),
        addSkill: (points) => dispatch(ActionsGame["GAME/ADD_SKILL"](points)),
        removeBossWalls: ({map}) => dispatch(ActionsGame["GAME/REMOVE_BOSS_WALLS"]({map})),
        addPointsBoss: (points) => dispatch(ActionsGame["GAME/ADD_POINTS_BOSS"](points)),
        quitGame: () => dispatch(ActionsGame["GAME/QUIT_GAME"]()),
        endGame: () => dispatch(ActionsGame["GAME/END_GAME"]()),

        onPlayerNameChange: (e) => dispatch(ActionsTopResults["TOP_RESULTS/PLAYER_NAME_CHANGED"](e)),
        saveResult: () => dispatch(ActionsTopResults["TOP_RESULTS/SAVE_RESULT"]()),
        playerNameError: () => dispatch(ActionsTopResults["TOP_RESULTS/PLAYER_NAME_ERROR"]()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game);