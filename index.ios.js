'use strict'
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    NativeModules,
    View,
    NativeAppEventEmitter,
    TouchableOpacity,
    Image,
} from 'react-native';

import Main from './SocialContact/main'

class RNApp extends React.Component {

    componentDidMount (){

        this.listener=NativeAppEventEmitter.addListener('NativeMessage',(data)=>{

            console.warn(data.hello)
        })

    }
    componentWillUnmount(){
        this.listener.remove();
    }

    _back() {
        let params = JSON.stringify({
            "action":"quit",
        })

        // NativeModules.VIPCenterCommunication.route(params, (data) => {
        //
        // },(data) => {
        //
        // })

    }

    _showDetail() {
      let params = JSON.stringify({
          "action":"openMall",
          "params":{
              "MODULE_MAIN_SERVICE_ID":"RNMall",
              "subID":"goodsDetail",
              "goodsInfo":{
                  "title": "购买会员",
                  "subTitle":"购买三个月",
                  "from":"会员中心"
              },
          },
      })

        NativeModules.SCNativeCommunication.route(params, (data) => {

        },(data) => {

        })
    }

  render() {
    return (
      <View style={styles.container}>
          <Image
              source={{uri: 'iqiyi.png'}}
              style={{height: 200, width: 220}}/>
        <TouchableOpacity onPress={this._showDetail.bind(this)}>
        <Text style={styles.welcome}>
            详情页
        </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this._back.bind(this)}>
        <Text style={styles.instructions}>
            返回
        </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

//  项目名要有所对应
AppRegistry.registerComponent('RNApp', () => Main);
module.exports = Main;