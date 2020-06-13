import {connect} from 'react-redux';
import App from "../App";
import ActionsSettings from "../actions/settings";

const mapStateToProps = state => {
    return {
        isSettingsShow: state.settings.isSettingsShow,
        gameOn: state.game.gameOn,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,
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