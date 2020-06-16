import {call, put, takeLatest, all, select} from 'redux-saga/effects';
import topResultsService from "../services/topResultsService";
import ActionsTopResults from "../actions/topResults";

function* getResults() {
    try {
        let topResults = yield call(topResultsService.get);

        yield put(ActionsTopResults['TOP_RESULTS/GET_RESULTS_SUCCESSFULLY'](topResults));
    } catch ({message}) {
        yield put(ActionsTopResults['TOP_RESULTS/GET_RESULTS_ERROR']({message}));
    }
}

function* saveResult() {
    try {
        let topResults = yield select(state => state.topResults.topResults);
        let name = yield select(state => state.topResults.playerName);
        let points = yield select(state => state.game.points);

        let topResultsSaved = yield call(topResultsService.save, topResults, name, points);

        yield put(ActionsTopResults['TOP_RESULTS/SAVE_RESULT_SUCCESSFULLY'](topResultsSaved));
    } catch ({message}) {
        yield put(ActionsTopResults['TOP_RESULTS/SAVE_RESULT_ERROR']({message}));
    }
}

function* getResultsSaga() {
    yield takeLatest('TOP_RESULTS/GET_RESULTS', getResults);
}

function* saveResultSaga() {
    yield takeLatest('TOP_RESULTS/SAVE_RESULT', saveResult);
}

export default function* topResultsSaga() {
    yield all([
        getResultsSaga(),
        saveResultSaga(),
    ]);
};