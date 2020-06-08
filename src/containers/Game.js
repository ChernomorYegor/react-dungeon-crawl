import {connect} from 'react-redux';
import ActionsGame from "../actions/game";
import gameOptions from "../gameOptions/gameOptions";
import Game from "../components/Game";

const mapStateToProps = state => {
    return {
        certificatesAll: gameOptions.CERTIFICATES,
        skillsAll: gameOptions.SKILLS,

        gameMap: state.game.map,
        currentCertificates: state.game.certificates,
        currentSkills: state.game.skills,
        isDefeatedBoss: state.game.isDefeatedBoss,
        level: state.game.level,
        points: state.game.points,
        currentOffset: state.game.currentOffset,
        playerX: state.game.playerX,
        playerY: state.game.playerY,

        difficulty: state.settings.difficulty,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,
        viewportHeight: state.settings.viewportHeight,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        moveLeft: (newPlayerX) => dispatch(ActionsGame["GAME/MOVE_LEFT"](newPlayerX)),
        moveUp: (newPlayerY) => dispatch(ActionsGame["GAME/MOVE_UP"](newPlayerY)),
        moveRight: (newPlayerX) => dispatch(ActionsGame["GAME/MOVE_RIGHT"](newPlayerX)),
        moveDown: (newPlayerY) => dispatch(ActionsGame["GAME/MOVE_DOWN"](newPlayerY)),
        changeOffset: (currentOffset) => dispatch(ActionsGame["GAME/CHANGE_OFFSET"](currentOffset)),
        addCertificate: (points) => dispatch(ActionsGame["GAME/ADD_CERTIFICATE"](points)),
        startLevel2: ({map}) => dispatch(ActionsGame["GAME/START_LEVEL2"]({map})),
        addSkill: (points) => dispatch(ActionsGame["GAME/ADD_SKILL"](points)),
        removeBossWalls: ({map}) => dispatch(ActionsGame["GAME/REMOVE_BOSS_WALLS"]({map})),
        addPointsBoss: (points) => dispatch(ActionsGame["GAME/ADD_POINTS_BOSS"](points)),
        quitGame: () => dispatch(ActionsGame["GAME/QUIT_GAME"]()),
        endGame: () => dispatch(ActionsGame["GAME/END_GAME"]()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game);