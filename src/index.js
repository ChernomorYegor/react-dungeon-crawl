import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers';
import {Provider} from 'react-redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import settingsSaga from './sagas/settingsSaga';
import topResultsSaga from "./sagas/topResultsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(settingsSaga);
sagaMiddleware.run(topResultsSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();