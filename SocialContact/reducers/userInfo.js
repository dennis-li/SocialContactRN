'use strict';
 
import * as types from '../constants/actionType';
 
const userInfo = {
	"isLogin":"0",
	"nickname":"0",
	"userId":"0",
	"accountName":"0",
	"avatar":"",
	"subId":"",
	"updateUserCoin":false
}
export default function(store = userInfo, action) {
  switch(action.type){
    case types.SET_USER_INFO_DATA:
      return userInfo
    default:
      return store;
  }
}