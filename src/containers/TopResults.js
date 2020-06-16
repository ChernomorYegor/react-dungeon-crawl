import {connect} from 'react-redux';
import ActionsTopResults from "../actions/topResults";
import TopResults from "../components/TopResults";

const mapStateToProps = state => {
    return {
        topResults: state.topResults.topResults,
    }
};
const mapDispatchToProps = dispatch => {
    return {
        getResults: () => dispatch(ActionsTopResults["TOP_RESULTS/GET_RESULTS"]()),
        backToStartMenu: () => dispatch(ActionsTopResults["TOP_RESULTS/HIDE_TOP_RESULTS"]()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TopResults);