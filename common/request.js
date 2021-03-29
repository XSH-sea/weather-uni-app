const baseUrl="https://devapi.qweather.com/v7/weather";
const key="9e62c98f31bf418ca52ae1002c9b5bf7";

 export const myAjax=(url,data={},method="GET")=>{
	data.key=key;
	return new Promise((resolve, reject)=>{
		uni.request({
			url:baseUrl+'/'+url,
			data:data,
			method:method,
			success: (res) => {
				resolve(res.data)
			},
			fail: (err) => {
				reject(err)
			}
		})
	})
}
