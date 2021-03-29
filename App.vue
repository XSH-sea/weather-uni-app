<script>
	export default {
		onLaunch: function() {
			//获取当前定位
			uni.getLocation({
				type:'wgs84',
				geocode:true,
				success:function(res){
					let result=res.address.district
					var district=result.substr(0,result.length-1);
					uni.setStorage("local_district",district);
					var cityArr=uni.getStorage("city_key");
					//判断是否第一次使用
					if(cityArr==''){
						//第一次使用，将定位城市存入城市列表
						cityArr=[];
						cityArr[0]=district;
						uni.setStorageSync("city_key",cityArr);
					}else if(cityArr!=''){
						//不是第一次使用，将新定位存入列表第一位
						cityArr[0]=district;
						uni.setStorageSync("city_key",cityArr);
					}
					console.log(district)
				}
			})
		},
		onShow: function() {
			console.log('App Show');
			

		},
		onHide: function() {
			console.log('App Hide')
		},
		
		data(){
			return{
				net:'1'
			}
		}
	}
	
	
</script>

<style>
	page{
		background-color: #fff;
	}
</style>
