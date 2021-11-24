import React, {Component} from 'react';

import  './error-page.sass'

export default class Main extends Component {
    render() {
        const {error, description} = this.props;

        return (
            <>
                <h1>{error}</h1>
                <hr/>
                <p>{description}</p>
            </>
        )
    }
}