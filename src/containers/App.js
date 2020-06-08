import {connect} from 'react-redux';
import App from "../App";

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

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);