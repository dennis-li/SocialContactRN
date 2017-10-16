import {NativeModules, Clipboard ,Dimensions ,InteractionManager} from'react-native'

const QYRNRouter = NativeModules.QYRouter;
const QYUserModule = NativeModules.QYUserModule || {};

//游戏中心支持调起的本地App的信息，true为可以调起，false为不能调起
let canOpenAppMessages = {};

//进入二级页面加1,退出减1。以此判断用户当前是否处于二级页面
let retainCount = 0;

export default class utils {

    static screenWidth() {
        return Dimensions.get('window').width;
    }

    static screenHeight() {
        return Dimensions.get('window').height;
    }

    //获取当前网络状态,返回值status参考constants.js
    static  netConnectionStatus(result) {
        try {
            let routeParam = JSON.stringify({
                action: 'NetConnectionStatus',
            });
            QYRNRouter.route(routeParam, (data) => {
                let status = parseInt(data.status)
                if(status === 1 || status === 4 ){
                    result(true)
                }else{
                    this.toast("网络未连接，请检查网络设置")
                    result(false)
                }
            }, (code, data) => {
                this.toast("网络未连接，请检查网络设置")
                result(false)
            });
        } catch (e) {
            this.toast("网络未连接，请检查网络设置")
            result(false)
        }
    }



    static toast(message ,type) {
        this.route('Toast', {message,type})
    }

    // success = (data)=>{}
    // fail = (data) => {}
    static async login(success, fail) {
        let result = await this.getNetInfo()
        if(!result){
            //无网络不执行跳转逻辑
            return false
        }

        try {
            let routeParam = JSON.stringify({
                action: 'Login',
                params: {from: 'gamecenter'},
            });
            QYRNRouter.route(routeParam, (data) => {
                success && success(data)
            }, (code, data) => {
                fail && fail(code, data)
            });
        } catch (e) {
            console.error(e);
        }
    }

    static route(action, params, success, fail) {
        try {
            let routeParam = JSON.stringify({
                action: action,
                params: params,
            });
            QYRNRouter.route(routeParam, (data) => {
                success && success(data)
            }, (code, data) => {
                fail && fail(code, data)
            });
        } catch (e) {
            console.error(e);
        }
    }

    static quitRN(from) {
        if (from) {
            this.route('Quit', {from})
        }
        else {
            this.route('Quit')
        }

    }

    //网络状态
    static getNetInfo(){
        return new Promise( (resolve, reject) =>{
            this.netConnectionStatus(resolve)
        })
    }

}
