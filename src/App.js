import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Main from './layout/Main';
import Callback from './Callback';

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/callback" component={Callback} />
                <Route component={Main} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default App;