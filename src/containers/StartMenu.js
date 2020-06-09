import {connect} from 'react-redux';
import ActionsGame from "../actions/game";
import ActionsSettings from "../actions/settings";
import gameOptions from "../gameOptions/gameOptions";
import StartMenu from "../components/StartMenu";

const mapStateToProps = state => {
    return {
        CERTIFICATES: gameOptions.CERTIFICATES,
        BOSSES: gameOptions.BOSSES,
        difficulty: state.settings.difficulty,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        startGame: ({map, playerX}) => dispatch(ActionsGame["GAME/START_GAME"]({map, playerX})),
        showSettings: () => dispatch(ActionsSettings["SETTINGS/SHOW_SETTINGS"]()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartMenu);