import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, useHistory, Redirect} from 'react-router-dom';


import Main from '../main';
import Employees from '../employees';
import ErrorPage from '../error-page';


import  './app.sass'



export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <Router>
                {/* <h1>Logo</h1> */}
                <div className="wrapper">
                    <main>
                        <Switch>
                            <Route exact path="/">
                                <Redirect to="/employees"/>
                                {/* <Main/> */}
                            </Route>

                            <Route exact path="/employees">
                                <Employees/>
                            </Route>

                            <Route path="*">
                                <ErrorPage
                                    error='Attention! An error was detected'
                                    description='No page was found on the site at this address, or you do not have access to view information at this address.'
                                />
                            </Route>
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
};