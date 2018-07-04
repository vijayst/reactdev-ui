import React from 'react'
import {
    Router,
    Switch,
    Route
} from 'react-router-dom';
import Main from './layout/Main';
import Callback from './Callback';
import history from './lib/history';

const App = () => (
    <Router history={history}>
        <div className="app">
            <Switch>
                <Route exact path="/callback" component={Callback} />
                <Route component={Main} />
            </Switch>
        </div>
    </Router>
)

export default App;