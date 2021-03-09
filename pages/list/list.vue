<template>
	<view class="list">
		<view class="status_bar"></view>
		<view class="nav">
			<view class="left-icon" @tap="backIndex"></view>
			<view class="title">城市列表</view>
			<view class="right-icon" @tap="goSearch"></view>
		</view>
		<scroll-view class="cityList" :scroll-y="isScroll">
			<view class="block" v-for="(val,index) in city" :key="index" >
				<view class="order-item" :data-index="index"  @tap="goIndex(val)" @touchstart="drawStart" @touchmove="drawMove" @touchend="drawEnd" :style="{right:right[index]+'upx'}">
					<text class="cityName">{{val}}</text>
					<text class="tmp">{{tmp[index]}}</text>
					<text class="info">{{info[index]}}</text>
					<image class="icon" :src="icon_url[index]" mode="aspectFill"></image>
					<view :data-index="index" class="remove" @tap.stop="del">移除</view>
				</view>	
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		onLoad:function(option){
			var cityArr=uni.getStorageSync("city_key");
			this.city=cityArr;
			for(var i=0;i<cityArr.length;i++){
				this.right.push(0);
			}
			
			console.log(option.sr,option.ss)
			
			
			
			
			// this.tmp=[];
			for(var i=0;i<this.city.length;i++){
				uni.request({
					url: 'https://api.heweather.net/s6/weather/now',
					data: {
						location: uni.getStorageSync('city_key')[i],
						key: '415c7d28177f4749b004841b3f77b59c'
					},
					success: (res) => {
						var result=res.data.HeWeather6[0].now;
						var city=res.data.HeWeather6[0].basic.location;
						var index='';
						for(var j=0;j<this.city.length;j++){
							if(this.city[j]==city){
								index=j;
							}
						}
						this.tmp.splice(index,0,result.tmp+'℃');
						this.info.splice(index,0,result.cond_txt);
						var sr=parseInt(option.sr)*60+option.sr.substr(3,2);
						var ss=parseInt(option.ss)*60+option.ss.substr(3,2);
						var time=parseInt(res.data.HeWeather6[0].update.loc.substr(11,5))*60+res.data.HeWeather6[0].update.loc.substr(11,5).substr(3,2);
						if(time<sr&&time>ss){
							if(result.cond_code==100||result.cond_code==103||result.cond_code==104||result.cond_code==300||result.cond_code==301||result.cond_code==406||result.cond_code==407){
								result.cond_code=result.cond_code+'n';
							}
						}
						this.icon_url.splice(index,0,'../../static/weather-icon/'+result.cond_code+'.png');
						
						
					
					}
				});
			}
			
			
		},
		data(){
			return {
				city:[],
				isScroll:true,
				right:[],
				delButtonWidth:160,
				timeId:'',
				flag:1,
				tmp:[],
				info:[],
				icon_url:[]
			}
		},
		methods:{
			backIndex(){
				uni.navigateBack({
					delta:1,
					animationType:'slide-out-right',
					animationDuration:300
				})
			},
			goIndex(val){
				uni.reLaunch({
					url: '../index/index?city='+val,
				})
			},
			goSearch(){
				uni.navigateTo({
					url:'../search/search',
					animationType:'pop-in',
					animationDuration:300
				})
			},
			drawStart(e){	
				clearInterval(this.timeId);
				var touch = e.touches[0];
				for (var index in this.right) {
					this.right[index] = 0;
				}
				this.startX = touch.clientX;
			},
			drawMove(e){
				var touch = e.touches[0];
				var disX = this.startX - touch.clientX;
				if (disX > 0) {
					this.flag=1;
					if (disX > this.delButtonWidth) {
						disX = this.delButtonWidth;
						
					}
				    this.isScroll = false;
				    this.right[e.currentTarget.dataset.index] = disX;
					this.isScroll=true;
				}else if(disX < 0){
					this.flag=0;
					if(this.right[e.currentTarget.dataset.index]<=0){
						this.right[e.currentTarget.dataset.index]=0;
					}else{
						this.isScroll=false;
						this.right[e.currentTarget.dataset.index]+=disX;
						this.isScroll=true;
					}
					
				}
				
				
				
			},
			drawEnd(e){
				
				if (this.right[e.currentTarget.dataset.index] >= this.delButtonWidth / 3 && this.right[e.currentTarget.dataset.index]<=this.delButtonWidth) {
					switch (this.flag){
						case 1:this.timeId=setInterval(this.animation_1,15,e);
							break;
						case 0:this.timeId=setInterval(this.animation_2,20,e);
							break;
					}
					
				} else if(this.right[e.currentTarget.dataset.index]<this.delButtonWidth/3&&this.right[e.currentTarget.dataset.index]>0){
				    this.timeId=setInterval(this.animation_2,20,e);
				}
			},
			animation_1(e){
				this.isScroll=false;
				this.right[e.currentTarget.dataset.index]+=8;
				this.isScroll=true;
				if(160-this.right[e.currentTarget.dataset.index]<8){
					this.isScroll=false;
					this.right[e.currentTarget.dataset.index]=160;
					this.isScroll=true;
					clearInterval(this.timeId);
				}
			},
			animation_2(e){
				this.isScroll=false;
				this.right[e.currentTarget.dataset.index]-=10;
				this.isScroll=true;
				if(this.right[e.currentTarget.dataset.index]<10){
					this.isScroll=false;
					this.right[e.currentTarget.dataset.index]=0;
					this.isScroll=true;
					clearInterval(this.timeId);
				}
			},
			del(e){
				this.city.splice(e.currentTarget.dataset.index,1);
				uni.setStorageSync("city_key",this.city);
			}
		}
	}
</script>

<style>
	page{
		background: linear-gradient(to bottom, #ff9d6c, #bb4e75); 
	}
	
	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
	}
	
	.nav {
		width: 100%;
		height: 80upx;
		text-align: center;
		margin-top: 20upx;
	}
	
	.nav .left-icon {
		width: 8%;
		height: 80upx;
		float: left;
		margin-left: 20upx;
		background: url(../../static/back2.png) no-repeat top left /100% auto;
	}
	
	.nav .right-icon {
		width: 8%;
		height: 80upx;
		float: right;
		margin-right: 20upx;
		background: url(../../static/plus.png) no-repeat top right /100% auto;
	}
	
	.title {
		font-size: 50upx;
		color: #fff;
		display: inline;
	}
	
	.cityList {
		width: 90%;
		margin: 0 auto;
	}
	
	.cityList .block{
		height: 180upx;
		width: 100%;
		background: linear-gradient(to bottom left, #79f1a4, #0e5cad);
		border-radius: 20upx;
		margin-bottom: 20upx;
		overflow: hidden;
	}
	
	.order-item{
		height: 180upx;
		width: 100%;
		display: flex;
		position: relative;
		border-radius: 20upx;
	}
	
	.order-item text {
		color: #fff;
	}
	
	.cityName {
		position: absolute;
		top: 34upx;
		left: 20upx;
		font-size: 70upx;
	}
	
	.info{
		position: absolute;
		bottom: 20upx;
		right: 100upx;
		font-size: 45upx;
	}
	
	.tmp {
		position: absolute;
		top: 15upx;
		right: 20upx;
		font-size: 60upx;
		
	}
	
	.icon {
		width: 80upx;
		height: 80upx;
		position: absolute;
		right: 10upx;
		bottom: 10upx;
		
	}
	
	.remove {
		width: 160upx;
		height: 100%;
		background-color: red;
		color: white;
		position: absolute;
		top: 0;
		right: -160upx;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 0 20upx 20upx 0;
	}
	
</style>
