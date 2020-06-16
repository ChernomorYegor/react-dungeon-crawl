import {call, put, takeLatest, all} from 'redux-saga/effects';
import settingsService from "../services/settingsService";
import ActionsSettings from "../actions/settings";

function* getSettings() {
    try {
        let localSettings = yield call(settingsService.get);

        yield put(ActionsSettings['SETTINGS/GET_SETTINGS_SUCCESSFULLY'](localSettings));
    } catch ({message}) {
        yield put(ActionsSettings['SETTINGS/GET_SETTINGS_ERROR']({message}));
    }
}

function* saveSettings(action) {
    try {
        let localSettings = yield call(settingsService.save, action.payload);

        yield put(ActionsSettings['SETTINGS/SAVE_SETTINGS_SUCCESSFULLY'](localSettings));
    } catch ({message}) {
        yield put(ActionsSettings['SETTINGS/SAVE_SETTINGS_ERROR']({message}));
    }
}

function* getSettingsSaga() {
    yield takeLatest('SETTINGS/GET_SETTINGS', getSettings);
}

function* saveSettingsSaga() {
    yield takeLatest('SETTINGS/SAVE_SETTINGS', saveSettings);
}

export default function* settingsSaga() {
    yield all([
        getSettingsSaga(),
        saveSettingsSaga(),
    ]);
};