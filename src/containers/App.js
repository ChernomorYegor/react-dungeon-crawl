import {connect} from 'react-redux';
import App from "../App";
import ActionsSettings from "../actions/settings";

const mapStateToProps = state => {
    return {
        gameOn: state.game.gameOn,

        isSettingsShow: state.settings.isSettingsShow,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,

        isTopResultsShow: state.topResults.isTopResultsShow,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getSettings: () => dispatch(ActionsSettings["SETTINGS/GET_SETTINGS"]()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);