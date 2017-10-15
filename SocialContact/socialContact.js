'use strict';

import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {changeLoginInfo}  from './actions/userInfo'
import {connect} from 'react-redux';
import InitSceneName from './constants/sceneNames'

class GameCenterApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        //禁止字体随着系统大小变化
        Text.defaultProps.allowFontScaling = false
    }

    setUserInfo(userInfo) {
        this.props.updateUserInfo(userInfo);
    }

    componentWillMount() {
        this.setUserInfo(this.props.userInfo)
    }

    renderMore() {

            return (
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        welcome !!!
                    </Text>
                </View>
            );

    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderMore()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

function mapStateToProps(data) {
    let {model_Confirm} = data
    return {
        ...model_Confirm
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateUserInfo: (userInfo)=> { dispatch(changeLoginInfo('SET_USER_INFO_DATA', userInfo)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCenterApp);
