//关闭蒙版
export  function  close_mask() {
	return{
        type :'CLOSE_MASK',
        showMask: false
	}
}

//展示登录窗口 兼职领取专属礼包失败的情况
export function show_login(actype,data){
	return{
		type : 'TOGGLE_LOGIN',
        loginMessage : data.loginMessage || "登录后才能领取礼包哦~",
        maskName : 'login',
        okText : data.okText || '去登录',
        cancelText : data.cancelText || '取消',
        okFuc : data.okFuc,
        closeFuc : data.closeFuc
	}
}

//展示激活码领取成功
export function show_success(actype,data){
	return{
		type : 'TOGGLE_ACTIVE_CODE',
		code : data.code
	}
}

//专属礼包领取成功
export function show_exclusiveCode(actype,data) {
	return{
		type : 'TOGGLE_EXCLUSIVE_CODE',
		okFuc : data.okFuc
	}
}

//专属礼包领取成功
export function show_rules(actype,data) {
    return{
        type : 'TOGGLE_RULES',
        rules : data.rules
    }
}

//展示签到成功
export function show_sign(actype,data){
    return{
        type : 'TOGGLE_SIGN',
        reward : data.data || {},
        closeFuc : data.closeFuc
    }
}
//展示升级奖励
export function show_levelup(actype,data) {
    return{
        type : 'TOGGLE_LEVELUP',
        reward : data.data || {},
        closeFuc : data.closeFuc
    }
}
//展示首页全屏广告
export function show_homePageAdv(actype,data) {
    return{
        type : 'TOGGLE_HOMEPAGEADV',
        advData : data.advData || {},
    }
}