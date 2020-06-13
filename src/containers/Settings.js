import {connect} from 'react-redux';
import ActionsSettings from "../actions/settings";
import gameOptions from "../gameOptions/gameOptions";
import Settings from "../components/Settings";

const mapStateToProps = state => {
    return {
        difficultyOptions: gameOptions.DIFFICULTY,

        difficulty: state.settings.difficulty,
        mapWidth: state.settings.mapWidth,
        mapHeight: state.settings.mapHeight,
        viewportWidth: state.settings.viewportWidth,
        viewportHeight: state.settings.viewportHeight,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        backToStartMenu: () => dispatch(ActionsSettings["SETTINGS/HIDE_SETTINGS"]()),
        saveSettings: (
            {
                difficultyLocal,
                mapWidthLocal,
                mapHeightLocal,
                viewportWidthLocal,
                viewportHeightLocal,
            }
        ) => dispatch(ActionsSettings["SETTINGS/SAVE_SETTINGS"](
            {
                difficultyLocal,
                mapWidthLocal,
                mapHeightLocal,
                viewportWidthLocal,
                viewportHeightLocal,
            }
        )),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Settings);