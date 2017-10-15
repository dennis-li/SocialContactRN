'use strict';

const baseData ={
      maskName : null,
      showMask : false,
      closeFuc : function () {},
      okFuc : function (){}

}
//登录显示的数据
const loginData = {
    loginMessage:'',
    showLogin:false,
    cancelText:'取消',
    okText:'去登录'
}
//激活码领取成功的数据
const successData = {
    showSuccess:false,
    activeCode:0
}

//签到成功的数据
const signData = {
    reward:{}
}


export default function(store = {...baseData}, action) {
  switch(action.type){
      case 'TOGGLE_LOGIN':
              return {
                ...store,
                showMask : true,
                loginMessage : action.loginMessage,
                closeFuc : action.closeFuc,
                okFuc : action.okFuc,
                maskName : 'login',
                okText : action.okText ,
                cancelText: action.cancelText
              };
        case 'TOGGLE_ACTIVE_CODE':
              return {
                  ...store,
                showMask : true,
                code :action.code,
                maskName : 'activeCode'
              };
        case 'TOGGLE_SIGN':
            return{
                ...store,
                showMask : true,
                reward : action.reward,
                maskName : 'sign',
                closeFuc : action.closeFuc
            };
        case 'TOGGLE_LEVELUP':
            return{
                ...store,
                showMask : true,
                reward : action.reward,
                maskName : 'levelUp',
                closeFuc : action.closeFuc
            };
        case 'TOGGLE_EXCLUSIVE_CODE' :
            return {
                ...store,
                showMask : true,
                okFuc : action.okFuc,
                maskName : 'exclusiveCode'
            }
        case 'TOGGLE_RULES' :
            return {
                ...store,
                showMask : true,
                rules : action.rules,
                maskName : 'rules'
            }
        case 'TOGGLE_HOMEPAGEADV' :
          return {
              ...store,
              showMask : true,
              advData : action.advData,
              maskName : 'homePageAdv'
          }
        case 'CLOSE_MASK':
            return {
                showMask : false
            };
        default:
            return store
  }
}