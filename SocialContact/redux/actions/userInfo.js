import * as types from '../../constants/actionType'
 
//获取/设置登录状态
export function changeLoginInfo(actype,data){
	return{
		type : types[actype],
		data : data
	}
}
