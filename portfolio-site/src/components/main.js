import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Projects from './projects';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/projects" component={Projects} />
    </Switch>
)

export default Main;