import {connect} from 'react-redux';
import ActionsStartMenu from "../actions/startMenu";
import gameOptions from "../gameOptions/gameOptions";
import StartMenu from "../components/StartMenu";

const mapStateToProps = state => {
    return {
        certificates: gameOptions.CERTIFICATES,
        bosses: gameOptions.BOSSES,
        difficulty: state.settings.difficulty,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        startGame: ({map, playerX}) => dispatch(ActionsStartMenu["GAME/START_GAME"]({map, playerX})),
        showSettings: () => dispatch(ActionsStartMenu["SETTINGS/SHOW_SETTINGS"]()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(StartMenu);