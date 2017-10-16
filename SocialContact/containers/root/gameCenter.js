/**
 * Created by wizard on 11/05/2017.
 */
import React, {Component} from 'react';
import {Text, StatusBar ,Navigator,Platform} from 'react-native';
import {setMineTabParent} from '../../redux/actions/gameCenter'
import {connect} from 'react-redux'
import InitSceneName from '../../constants/sceneNames'
import Router from './router';



class PureCom extends Component{
    shouldComponentUpdate(){
        return false
    }
    _initParams() {
        let initial =  InitSceneName(this.props.pageName);
        let params = {...this.props}
        params.initial = initial
        if (initial !== 'Index') {
            params.independent = "true"
        }
        return params
    }
    render(){
        const initParams = this._initParams()
        const Comp = Router[initParams.initial].component
        return <Comp {...initParams} initialIndex={this.props.index}/>
    }
}

class GameCenter extends Component {
    constructor(props) {
        super(props);
        this.props.updateMyTabParent(this.props.index);
        StatusBar.setBarStyle('default', false);
    }
    componentDidMount(){
        global.majorVersionIOS_TEN = parseInt(Platform.Version, 10) >= 11;
        global.GameNavigator = this;
        this.setStatusBar()
    }
    setStatusBar(){
        if(!majorVersionIOS_TEN){
            if (this.props.index === 2) {
                StatusBar.setBarStyle('light-content', false);
            }
            else {
                StatusBar.setBarStyle('default', false);
            }
        }
    }
    //便于以后修改或者扩展
    push(pageName, params = {}) {
        StatusBar.setBarStyle('default', false);
        this.nav.push({
            component: Router[pageName].component,
            params: {...params}
        })
    }

    pop() {
        this.nav.pop();
    }
    render(){
        // return (
        //     <NavigatorIOS
        //         style={{flex:1}}
        //         navigationBarHidden={true}
        //         interactivePopGestureEnabled={true}
        //         ref={nav => this.nav = nav}
        //         initialRoute={{
        //             component: PureCom,
        //             title: '',
        //             passProps: {...this.props},
        //         }}
        //     />
        // );
        return(
            <Navigator
                style={{flex: 1,backgroundColor:'#fff'}}       // 布局
                initialRoute={{
                    component: PureCom,
                }}
                ref={nav => this.nav = nav}
                renderScene={(route, navigator) => {    // 将板块生成具体的组件
                    let Component = route.component;    // 获取路由内的板块
                    return <Component {...this.props} {...route.params} />    // 根据板块生成具体组件
                }}
            />
        )
    }


}

function mapStateToProps(data) {
    let {model_TabBar} = data
    return {
        ...model_TabBar
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateMyTabParent: (index) => {
            let parent = index === 2 ? 'IQIYI' : 'GAME_CENTER';
            dispatch(setMineTabParent(parent));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameCenter);
