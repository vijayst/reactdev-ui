import React from 'react'
import {
    Router,
    Route
} from 'react-router-dom';
import Main from './layout/Main';
import Callback from './Callback';
import history from './lib/history';

const App = () => (
    <Router history={history}>
        <div className="app">
            <Route exact path="/" component={Main} />
            <Route path="/callback" component={Callback} />
        </div>
    </Router>
)

export default App;