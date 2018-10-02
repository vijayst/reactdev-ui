import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import Main from './layout/Main';
import history from './lib/history';
import { Provider } from 'react-redux';
import store from './store/store';
import './css/common.scss';

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="app">
                <Main />
            </div>
        </ConnectedRouter>
    </Provider>
);

export default App;
