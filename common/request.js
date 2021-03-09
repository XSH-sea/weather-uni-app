const baseUrl="https://devapi.qweather.com/v7/weather/now";

 export const myAjax=(data={},method="GET")=>{
	return new Promise((resolve, reject)=>{
		uni.request({
			url:baseUrl,
			data:data,
			method:method,
			success: (res) => {
				resolve(res)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
