import React, {Component} from 'react';

import  './main.sass'

export default class Main extends Component {
    render() {
        return (
            <>
                Main page
                <hr />
                <a href="/employees">Go to Employees page</a>
            </>
        )
    }
}