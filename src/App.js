import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import Main from './layout/Main';
import Callback from './Callback';

const App = () => (
    <Router>
        <div className="app">
            <Route exact path="/" component={Main} />
            <Route path="/callback" component={Callback} />
        </div>
    </Router>
)

export default App;