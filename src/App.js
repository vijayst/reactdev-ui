import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';
import Main from './layout/Main';
import Callback from './Callback';
import history from './lib/history';
import { Provider } from 'react-redux';
import store from './store/store';
import './css/common';

const App = () => (
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="app">
                <Switch>
                    <Route exact path="/callback" component={Callback} />
                    <Route component={Main} />
                </Switch>
            </div>
        </ConnectedRouter>
    </Provider>
);

export default App;
