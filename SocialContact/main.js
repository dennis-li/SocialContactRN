'use strict'

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

import SocialContactApp from './socialContact';


const store = configureStore();

export default class Main extends Component {
    render() {


        return (
            <Provider store={store}>
                <SocialContactApp {...this.props} />
            </Provider>
        )
    }
}
