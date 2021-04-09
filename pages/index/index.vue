<template>
	<view class="index">
		<!-- 状态栏 -->
		<view class="status_bar"></view>
		<!-- 导航栏 -->
		<view class="header">
			<view class="left-icon" @tap="goSearch"></view>
			<view class="cityName" v-model="city">{{city}}</view>
			<view class="right-icon" @tap="goList"></view>
		</view>
		<!-- 实况天气信息 -->
		<view class="info">
			<view class="tips">当前今日天气</view>
			<view class="now_info">
				<view class="now_info_left">
					<image class="img" :src="'../../static/weather-icon/'+nowIcon+'.png'" mode=""></image>
				</view>
				<view class="now_info_right">
					<view class="now_tmp">
						{{nowTmp}}°
					</view>
					<view class="now_situation">
						{{nowCondTxt}}
					</view>
				</view>
			</view>
			<view class="other_info">
				<view class="other_info_warp">
					<view class="img window"></view>
					<view class="text">{{wind_dir}}{{wind_sc}}级</view>
				</view>
				<view class="other_info_warp">
					<view class="img humidity"></view>
					<view class="text">湿度{{hum}}%</view>
				</view>
				<view class="other_info_warp">
					<view class="img precipitation"></view>
					<view class="text">降水量{{pcpn}}</view>
				</view>
			</view>
		</view>
		<!-- 逐小时天气 -->
		<view class="hour">
			<view class="title">
				24小时
			</view>
			<scroll-view scroll-x="true" class="scroll-view">
				<view id="demo1" class="scroll-view-item" v-for="(item,index) in hours" :key="index">
					<view class="box">
						<view class="time">
							{{addZore(new Date(item.fxTime).getHours())}}:{{addZore(new Date(item.fxTime).getMinutes())}}
						</view>
						<view class="img">
							<image class="img" :src="'../../static/weather-icon/'+item.icon+'.png'" mode=""></image>
						</view>
						<view class="temp">
							{{item.temp}}°
						</view>
					</view>

				</view>
			</scroll-view>
		</view>
		<!-- 未来天气预报 -->
		<view class="daily">
			<view class="title">
				未来7天预报
			</view>

			<view class="daily_warp">
				<view class="cav"></view>
				<view v-for="(item,index) in daily" :key="index" class="daily_item">
					<view class="top">
						<view class="fxDate">
							{{item.fxDate.substr(5,5).replace('-','/')}}
						</view>
						<view class="textDay">{{item.textDay}}</view>
						<view class="iconDay">
							<image class="iconDay" :src="'../../static/weather-icon/'+item.iconDay+'.png'" mode=""></image>
						</view>
						<view class="tempMax">{{item.tempMax}}°</view>
					</view>
					
					<view class="bottom">
						<view class="tempMin">{{item.tempMin}}°</view>
						<view class="iconNight">
							<image class="iconNight" :src="'../../static/weather-icon/'+item.iconNight+'.png'" mode=""></image>
						</view>
						<view class="textNight">{{item.textNight}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				changed: 0,
				statusBarHeight: '',
				screenHeight: '',
				city: '',
				nowTmp: 16,
				nowCondTxt: "晴转多云",
				nowIcon: "100",
				wind_dir: "东北风", //风向
				wind_sc: "3级", //风力
				hum: "98%", //湿度
				pcpn: "0.5", //降水量
				hours: [], //没小时天气预报
				daily: [], //未来天气预报
			}

		},
		mounted() {
			if (!this.city) {
				//从缓存中获取app初始化时存入的地址
				this.city = uni.getStorage('local_district');
				// this.fetchNowWeather()
				this.fetchHoursWeather()
				this.fetchDayWeather()

			}


			//获取日期
			var d = new Date();
			var day = d.getDay();
			var year = d.getYear();
			var month = d.getMonth() + 1;
			var days = d.getDate();
			var weeks = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];


			for (var i = 0; i < 7; i++) {
				//遍历星期几
				if (day < 7) {
					this.future[i].week = weeks[day];
					day++;
				} else {
					this.future[i].week = weeks[day - 7];
					day++;
				}
				//计算每个月的日期
				switch (month) {
					case 1:
					case 3:
					case 5:
					case 7:
					case 8:
					case 10:
						if (days <= 31) {
							this.future[i].date = addZore(month) + '.' + addZore(days);
							days++;
						} else {
							this.future[i].date = addZore(month + 1) + '.' + addZore(days - 31);
							days++;
						}
						break;
					case 4:
					case 6:
					case 9:
					case 11:
						if (days <= 30) {
							this.future[i].date = addZore(month) + '.' + addZore(days);
							days++;
						} else {
							this.future[i].date = addZore(month + 1) + '.' + addZore(days - 30);
							days++;
						}
						break;
					case 2:
						if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) { //判断是不是闰年
							if (days <= 29) {
								this.future[i].date = addZore(month) + '.' + addZore(days);
								days++;
							} else {
								this.future[i].date = addZore(month + 1) + '.' + addZore(days - 29);
								days++;
							}
						} else {
							if (days <= 28) {
								this.future[i].date = addZore(month) + '.' + addZore(days);
								days++;
							} else {
								this.future[i].date = addZore(month + 1) + '.' + addZore(days - 28);
								days++;
							}
						}
						break;
					default:
						if (days <= 31) {
							this.future[i].date = addZore(month) + '.' + addZore(days);
							days++;
						} else {
							this.future[i].date = addZore(1) + '.' + addZore(days - 31);
							days++;
						}
						break;
				}

			}

		},
		onLoad: function(option) {
			if (option.city != undefined) {
				this.city = option.city;
			}
			var systemInfo = uni.getSystemInfoSync()
			//获取状态栏高度
			this.statusBarHeight = systemInfo.statusBarHeight * 2;
			//获取屏幕高度
			this.screenHeight = systemInfo.screenHeight * 2;
		},
		methods: {
			//加0函数
			addZore(e) {
				if (e < 10) {
					e = "0" + e;
				}
				return e;
			},
			//获取当前天气实时天气
			fetchNowWeather() {
				this.myAjax('now', {
					location: '101010100',
				}).then(res => {
					console.log(res, '结果')
					this.nowTmp = res.now.temp;
					this.nowCondTxt = res.now.text;
					this.nowIcon = res.now.icon;
					this.pcpn = res.now.precip;
					this.hum = res.now.humidity
					this.wind_sc = res.now.windScale;
					this.wind_dir = res.now.windDir;
				}).catch(err => {
					console.log(err, '错误')
				})
			},

			//获取24小时天气状况
			fetchHoursWeather() {
				this.myAjax('24h', {
					location: '101010100',
				}).then(res => {
					console.log(res, '结果')
					this.hours = res.hourly
				}).catch(err => {
					console.log(err, '错误')
				})
			},
			//获取未来天气状况
			fetchDayWeather() {
				this.myAjax('7d', {
					location: '101010100',
				}).then(res => {
					console.log(res, '结果')
					this.daily = res.daily
				}).catch(err => {
					console.log(err, '错误')
				})
			},

			goList() {
				uni.navigateTo({
					url: '../list/list?ss=' + this.daily_one.ss + '&sr=' + this.daily_one.sr,
					animationType: 'slide-in-right',
					animationDuration: 300
				})
			},
			goSearch() {
				uni.navigateTo({
					url: '../search/search',
					animationType: 'slide-in-left',
					animationDuration: 300
				})
			}
		}

	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.status_bar {
		width: 100%;
		height: var(--status-bar-height);
	}

	.header {
		width: 100%;
		height: 80upx;
		text-align: center;
		margin-top: 20upx;
	}

	.header .left-icon {
		width: 8%;
		height: 80upx;
		float: left;
		margin-left: 20upx;
		background: url(../../static/plus.png) no-repeat top left /100% auto;
	}

	.header .right-icon {
		width: 8%;
		height: 80upx;
		float: right;
		margin-right: 20upx;
		background: url(../../static/list.png) no-repeat top right /100% auto;
	}

	.header .cityName {
		font-size: 50upx;
		color: #fff;
		display: inline;
	}

	.info {
		width: 100%;
		text-align: center;
	}

	.info .tips {
		font-size: 32upx;
		font-family: Arial, Helvetica, sans-serif;
		color: #777;
	}

	.info .now_info {
		display: flex;
		justify-content: space-around;
		height: 180upx;
		width: 360upx;
		margin-left: 50%;
		transform: translateX(-50%);
	}


	.now_info .now_info_left {
		height: 180upx;
		width: 180upx;
	}

	.now_info .now_info_left .img {
		height: 180upx;
		width: 180upx;
	}

	.now_info .now_info_right {
		height: 180upx;
		width: 180upx;
	}

	.now_info .now_info_right .now_tmp {
		font-size: 110upx;
		font-weight: 500;
		font-family: Arial, Helvetica, sans-serif;
		text-align: left;
		margin-top: 18upx;
	}

	.now_info .now_info_right .now_situation {
		font-size: 28upx;
		text-align: left;
		line-height: 12upx;
		font-family: Arial, Helvetica, sans-serif;
		color: #777;
	}

	.info .other_info {
		display: flex;
		justify-content: space-around;
		margin-top: 40upx;
	}

	.other_info .other_info_warp {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
	}

	.other_info .img {
		width: 60upx;
		height: 60upx;
	}

	.other_info .window {
		background: url(../../static/window.png) no-repeat top right /100% auto;
	}

	.other_info .humidity {
		background: url(../../static/humidity.png) no-repeat top right /100% auto;
	}

	.other_info .precipitation {
		background: url(../../static/precipitation.png) no-repeat top right /100% auto;
	}

	.other_info .text {
		font-size: 26upx;
		font-family: Arial, Helvetica, sans-serif;
		margin-top: 8upx;
		color: #777;
	}

	.hour {
		margin-top: 50upx;
	}

	.hour .title {
		font-size: 36upx;
		font-weight: 600;
		font-family: Arial, Helvetica, sans-serif;
		margin-left: 30upx;
	}

	.hour .scroll-view {
		white-space: nowrap;
		width: 100%;
	}

	.hour .scroll-view-item {
		height: 200upx;
		width: 140upx;
		border-radius: 10upx;
		margin: 15upx;
		display: inline-block;
		box-shadow: 0upx 0upx 16upx 4upx #eee;
	}

	.hour .scroll-view-item .box {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
	}

	.hour .scroll-view-item .time {
		font-size: 28upx;
		font-family: Arial, Helvetica, sans-serif;
	}

	.hour .scroll-view-item .time {
		font-family: Arial, Helvetica, sans-serif;
	}

	.hour .scroll-view-item .img {
		height: 80upx;
		width: 80upx;
	}

	.daily {
		margin-top: 50upx;
		padding: 30upx;
	}

	.daily .title {
		font-size: 36upx;
		font-weight: 600;
		font-family: Arial, Helvetica, sans-serif;
	}

	.daily .daily_warp {
		margin-top: 20upx;
		height: 500upx;
		box-shadow: 0upx 0upx 16upx 4upx #eee;
		border-radius: 10upx;
		padding: 30upx 0;
		display: flex;
		justify-content: space-around;
		position: relative;
	}
	
	.daily .daily_warp .cav{
		position: absolute;
		width: 100%;
		height:32%;
		background-color: #007AFF;
		top:38%;
		right: 0;
		z-index: 999;
	}

	.daily .daily_warp .daily_item {
		height: 100%;
		border-right: 0.5upx solid #eee;
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.daily .daily_warp .daily_item:last-child {
		border-right: none
	}
	
	.daily .daily_warp .daily_item .top{
		width: 100%;
		height: 36%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.daily .daily_warp .top .fxDate{
		font-size: 24upx;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.daily .daily_warp .top .textDay{
		font-size: 18upx;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.daily .daily_warp .top .iconDay{
		width: 50upx;
		height: 50upx;
	}
	
	.daily .daily_warp .top .tempMax{
		font-size: 28upx;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.daily .daily_warp .daily_item .bottom{
		width: 100%;
		height: 26%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
	}
	
	.daily .daily_warp .bottom .tempMin{
		font-size: 28upx;
		font-family: Arial, Helvetica, sans-serif;
	}
	
	.daily .daily_warp .bottom .iconNight{
		width: 50upx;
		height: 50upx;
	}
	
	.daily .daily_warp .bottom .textNight{
		font-size: 18upx;
		font-family: Arial, Helvetica, sans-serif;
	}
	
</style>
