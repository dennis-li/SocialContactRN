/*网络请求
*/
'use strict'
// import { NetworkModule } from '@iqiyi/rn-base-modules';

import utils from  './util'
let domains = {
	'test' : 'https://testgamecenter.if.iqiyi.com',
	'preprod' : 'http://preprod-gamecenter.if.iqiyi.com',
	'pro' : 'https://gamecenter.if.iqiyi.com'
}

const defaultHeaders = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
};

//组织参数
function requestParams(data) {
	let new_arr = []
	for(var key in data){
		new_arr.push(`${key}=${data[key]}`)
	}
	return new_arr.join("&")
}

export async function request (url, params, type){
	let env = 'pro',
		postData =  {
		   method: (type  && type.toLowerCase()) !== 'post' ? 'GET' :'POST',
	       headers: {
	         ...defaultHeaders
	       }
		};
	let ver = '1.11.0'
	if(params){
        params.plugin_ver = ver;//版本号
		let _param_ = requestParams(params);
		url = url +'?'+_param_ ;
	}else{
        url = url +'?plugin_ver='+ver;
	}
	//日志
	// console.log('开始请求',`${domains[env]}/${url}`)
	// let start = new Date().getTime()

    let netInfo = await utils.getNetInfo()
	return new Promise((resolve,reject)=>{
		fetch(`${domains[env]}/${url}`,postData)
		.then((response)=> {
            return response.json()
        })
		.then((data)=>{
            //日志
            // console.log('耗时',new Date().getTime() - start,'ms，结果',data)
            // console.log(JSON.stringify(data))
			if(data){
				if(Object.prototype.toString.call(data) === '[object String]'){
					try{
						data = JSON.parse(data)
					}catch(e){
						// console.log(e)
					}
				}
				resolve(data)
			}else{
				resolve({})
			}
		})
		.catch((error)=>{
            // console.timeEnd('请求失败',error)
			reject({...error,netInfo:netInfo})

		})
	})
}