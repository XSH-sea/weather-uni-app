<template>
	<view class="index">
		<view class="header" :style="{height:420+statusBarHeight+'upx'}">
			<!-- 状态栏 -->
			<view class="status_bar"></view>
			<!-- 导航栏 -->
			<view class="nav">
				<view class="left-icon" @tap="goSearch"></view>
				<view class="cityName" v-model="city">{{city}}</view>
				<view class="right-icon" @tap="goList"></view>

			</view>
			<!-- 实况天气信息 -->
			<view class="info">
				<view class="tips">当前今日天气</view>
				<view class="now_info">
					<view class="now_info_left">
						<image class="img" src="../../static/weather-icon/100.png" mode=""></image>
					</view>
					<view class="now_info_right">
						<view class="now_tmp">
							16°
						</view>
						<view class="now_situation">
							雷雨转晴
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 预报 -->
		<scroll-view class="scrolling" :style="{height:screenHeight-statusBarHeight-422+'upx'}" scroll-y="true">

			<!-- 生活提示 -->
			<swiper autoplay="true" interval="5000" vertical="true" circular="true" class="lifestyle">
				<swiper-item v-for="(val,index) in lifestyle" :key="index" class="lifestyle-inner">
					<text class="lifestyle-title">{{val.type}}</text>
					<text class="lifestyle-content">{{val.txt}}</text>
				</swiper-item>
			</swiper>

			<!-- 逐小时天气预报 -->
			<scroll-view class="hourly" scroll-x="true">
				<view class="w_time">
					<view class="time_inner" v-for="(val,index) in hourly" :key="index">
						<text>{{val.time}}</text>
					</view>
				</view>
				<view class="w_info">

				</view>

				<canvas canvas-id="myCanvas" class="myCanvas"></canvas>
				<view class="w_tmp">
					<view class="tmp_inner" v-for="(val,index) in hourly" :key="index">
						<text>{{val.tmp}}℃</text>
					</view>
				</view>
			</scroll-view>

			<!-- 七天天气预报 -->
			<view class="daily_forecast">
				<view class="daily_one">
					<view class="date">
						<text>{{future[0].date}}</text>
					</view>
					<view class="week">
						<text>{{future[0].week}}</text>
					</view>
					<view class="tmp">
						<text>{{daily_one.tmp}}</text>
					</view>
					<view class="icon">
						<view class="d_icon">
							<image :src="daily_one.icon_url_d" mode="aspectFit"></image>
							<text>{{daily_one.cond_txt_d}}</text>
						</view>
						<view class="n_icon">
							<image :src="daily_one.icon_url_n" mode="aspectFit"></image>
							<text>{{daily_one.cond_txt_n}}</text>
						</view>
					</view>
					<view class="sun">
						<text class="up">日出:{{daily_one.sr}}</text>
						<text class="down">日落:{{daily_one.ss}}</text>
					</view>
				</view>

				<view v-for="(val,index) in daily" :key="index" class="daily">
					<view class="date">
						<text>{{future[index+1].date}}</text>
					</view>
					<view class="week">
						<text>{{future[index+1].week}}</text>
					</view>
					<view class="tmp">
						<text>{{val.tmp}}</text>
					</view>
					<view class="icon">
						<view class="d_icon">
							<image :src="val.icon_url_d" mode="aspectFit"></image>
							<text>{{val.cond_txt_d}}</text>
						</view>
						<view class="n_icon">
							<image :src="val.icon_url_n" mode="aspectFit"></image>
							<text>{{val.cond_txt_n}}</text>
						</view>
					</view>
					<view class="sun">
						<text class="up">日出:{{val.sr}}</text>
						<text class="down">日落:{{val.ss}}</text>
					</view>
				</view>

			</view>


		</scroll-view>

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
				tmp: '11℃',
				cond_txt: '多云',
				aqi: '空气指数45 优',
				hourly: [{
						time: '00:00',
						cond_txt: '晴',
						tmp: '21'
					},
					{
						time: '01:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '02:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '03:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '04:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '05:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '06:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '07:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '08:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '09:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '10:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '11:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '12:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '13:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '14:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '15:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '16:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '17:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '18:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '19:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '20:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '21:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '22:00',
						cond_txt: '阴',
						tmp: '21'
					},
					{
						time: '23:00',
						cond_txt: '阴',
						tmp: '21'
					}
				],
				lifestyle: [{
						type: '穿衣指南',
						txt: ''
					},
					{
						type: '旅游指南',
						txt: ''
					},
					{
						type: '运动指南',
						txt: ''
					},
					{
						type: '防晒指南',
						txt: ''
					},
					{
						type: '交通指南',
						txt: ''
					},
					{
						type: '钓鱼指南',
						txt: ''
					}
				],
				future: [{
						date: '',
						week: ''
					},
					{
						date: '',
						week: ''
					},
					{
						date: '',
						week: ''
					},
					{
						date: '',
						week: ''
					},
					{
						date: '',
						week: ''
					},
					{
						date: '',
						week: ''
					},
					{
						date: '',
						week: ''
					},
				],
				daily_one: {
					tmp: '4~5℃',
					icon_url_d: '../../static/weather-icon/100.png',
					icon_url_n: '../../static/weather-icon/100n.png',
					cond_txt_d: '晴',
					cond_txt_n: '多云',
					wind_dir: '西北风',
					wind_sc: '1-2',
					sr: '07:36',
					ss: '19:23'
				},
				daily: [{
						tmp: '4~5℃',
						icon_url_d: '../../static/weather-icon/100.png',
						icon_url_n: '../../static/weather-icon/100n.png',
						cond_txt_d: '晴',
						cond_txt_n: '多云',
						wind_dir: '西北风',
						wind_sc: '1-2',
						sr: '07:36',
						ss: '19:23'
					},
					{
						tmp: '4~5℃',
						icon_url_d: '../../static/weather-icon/100.png',
						icon_url_n: '../../static/weather-icon/100n.png',
						cond_txt_d: '晴',
						cond_txt_n: '多云',
						wind_dir: '西北风',
						wind_sc: '1-2',
						sr: '07:36',
						ss: '19:23'
					},
					{
						tmp: '4~5℃',
						icon_url_d: '../../static/weather-icon/100.png',
						icon_url_n: '../../static/weather-icon/100n.png',
						cond_txt_d: '晴',
						cond_txt_n: '多云',
						wind_dir: '西北风',
						wind_sc: '1-2',
						sr: '07:36',
						ss: '19:23'
					},
					{
						tmp: '4~5℃',
						icon_url_d: '../../static/weather-icon/100.png',
						icon_url_n: '../../static/weather-icon/100n.png',
						cond_txt_d: '晴',
						cond_txt_n: '多云',
						wind_dir: '西北风',
						wind_sc: '1-2',
						sr: '07:36',
						ss: '19:23'
					},
					{
						tmp: '4~5℃',
						icon_url_d: '../../static/weather-icon/100.png',
						icon_url_n: '../../static/weather-icon/100n.png',
						cond_txt_d: '晴',
						cond_txt_n: '多云',
						wind_dir: '西北风',
						wind_sc: '1-2',
						sr: '07:36',
						ss: '19:23'
					},
					{
						tmp: '4~5℃',
						icon_url_d: '../../static/weather-icon/100.png',
						icon_url_n: '../../static/weather-icon/100n.png',
						cond_txt_d: '晴',
						cond_txt_n: '多云',
						wind_dir: '西北风',
						wind_sc: '1-2',
						sr: '07:36',
						ss: '19:23'
					}
				]

			}
		},
		mounted() {

			this.myAjax({
				location: 101010100,
				key: "9e62c98f31bf418ca52ae1002c9b5bf7"
			}).then(res => {
				console.log(res, '结果')
			}).catch(err => {
				console.log(err, '错误')
			})
			try {
				if (!this.city) {
					this.city = uni.getStorageSync('local_district');
				}

			} catch (e) {
				console(e);
				this.city = '无法定位，请手动选择城市';
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


			//加0函数
			function addZore(e) {
				if (e < 10) {
					e = "0" + e;
				}
				return e;
			}

			uni.request({
				url: 'https://api.heweather.net/s6/weather/now',
				data: {
					location: this.city,
					key: '415c7d28177f4749b004841b3f77b59c'
				},
				success: (res) => {
					this.tmp = res.data.HeWeather6[0].now.tmp + '℃';
					this.cond_txt = res.data.HeWeather6[0].now.cond_txt;
				}
			});

			//获取生活指数
			uni.request({
				url: 'https://api.heweather.net/s6/weather/lifestyle',
				data: {
					location: this.city,
					key: '415c7d28177f4749b004841b3f77b59c'
				},
				success: (res) => {
					var result = res.data.HeWeather6[0].lifestyle;
					var lifestyle = this.lifestyle;
					lifestyle[0].txt = result[1].txt;
					lifestyle[1].txt = result[4].txt;
					lifestyle[2].txt = result[3].txt;
					lifestyle[3].txt = result[15].txt;
					lifestyle[4].txt = result[13].txt;
					lifestyle[5].txt = result[14].txt;
				}
			})

			//获取七天天气预报数据
			uni.request({
				url: 'https://api.heweather.net/s6/weather/forecast',
				data: {
					location: this.city,
					key: '415c7d28177f4749b004841b3f77b59c'
				},
				success: (res) => {
					for (var i = 0; i < 7; i++) {
						var result = res.data.HeWeather6[0].daily_forecast[i]
						if (i == 0) {
							var one = this.daily_one;
							one.sr = result.sr;
							one.ss = result.ss;
							this.changed = 1;
							one.icon_url_d = '../../static/weather-icon/' + result.cond_code_d + '.png';
							if (result.cond_code_n == 100 || result.cond_code_n == 103 || result.cond_code_n == 104 || result.cond_code_n ==
								300 || result.cond_code_n == 301 || result.cond_code_n == 406 || result.cond_code_n == 407) {
								result.cond_code_n = result.cond_code_n + 'n';
							}
							one.icon_url_n = '../../static/weather-icon/' + result.cond_code_n + '.png';
							one.cond_txt_d = result.cond_txt_d;
							one.cond_txt_n = result.cond_txt_n;
							one.tmp = result.tmp_min + '~' + result.tmp_max + '℃';
						} else {
							this.daily[i - 1].sr = result.sr;
							this.daily[i - 1].ss = result.ss;
							this.daily[i - 1].icon_url_d = '../../static/weather-icon/' + result.cond_code_d + '.png';
							if (result.cond_code_n == 100 || result.cond_code_n == 103 || result.cond_code_n == 104 || result.cond_code_n ==
								300 || result.cond_code_n == 301 || result.cond_code_n == 406 || result.cond_code_n == 407) {
								result.cond_code_n = result.cond_code_n + 'n';
							}
							this.daily[i - 1].icon_url_n = '../../static/weather-icon/' + result.cond_code_n + '.png';
							this.daily[i - 1].cond_txt_d = result.cond_txt_d;
							this.daily[i - 1].cond_txt_n = result.cond_txt_n;
							this.daily[i - 1].tmp = result.tmp_min + '~' + result.tmp_max + '℃';
						}
					}

				}

			})

			//获取24小时天气数据
			uni.request({
					url: 'https://api.heweather.net/s6/weather/hourly',
					data: {
						location: this.city,
						key: '415c7d28177f4749b004841b3f77b59c'
					},
					success: (res) => {
						for (var i = 0; i < 24; i++) {
							var time = res.data.HeWeather6[0].hourly[i].time.substring(11, 13);
							var result = res.data.HeWeather6[0].hourly[i];
							this.hourly[i].time = time + '点';
							this.hourly[i].cond_txt = result.cond_txt;
							this.hourly[i].tmp = result.tmp;
						}
					}
				}),

				//获取空气质量
				uni.request({
					url: 'https://api.heweather.net/s6/air',
					data: {
						location: this.city,
						key: '415c7d28177f4749b004841b3f77b59c'
					},
					success: (res) => {
						var aqi = res.data.HeWeather6[0].air_now_city.aqi;
						var qlty = res.data.HeWeather6[0].air_now_city.qlty;
						var txt = '空气指数';
						this.aqi = txt + aqi + ' ' + qlty;
					}
				})


			setTimeout(this.drawing, 800);
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
			drawing() {
				var width = 120 / 750 * uni.getSystemInfoSync().screenWidth;
				var arr = [];
				for (var i = 0; i < this.hourly.length; i++) {
					arr[i] = this.hourly[i].tmp;
				}
				arr.sort(function(a, b) {
					return a - b;
				})

				var max = arr[arr.length - 1];
				var min = arr[0];
				var height = max - min;
				var context = uni.createCanvasContext('myCanvas');
				context.moveTo(width / 2, 8 + 40 / height * (max - this.hourly[0].tmp));
				context.setStrokeStyle('#0e5cad');
				for (var i = 1; i < this.hourly.length; i++) {
					context.lineTo(width / 2 + width * i, 8 + 40 / height * (max - this.hourly[i].tmp));
					context.setStrokeStyle('#0e5cad');
				}
				context.stroke();

				context.beginPath()
				context.arc(width / 2, 8 + 40 / height * (max - this.hourly[0].tmp), 3, 0, 2 * Math.PI);
				context.setFillStyle('#79f1a4');
				context.fill()
				for (var i = 1; i < this.hourly.length; i++) {
					context.beginPath()
					context.arc(width / 2 + width * i, 8 + 40 / height * (max - this.hourly[i].tmp), 3, 0, 2 * Math.PI);
					context.setFillStyle('#79f1a4');
					context.fill()
				}

				context.draw();
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
		/* background: linear-gradient(to bottom , #5efce8 ,#736efe); */
		/* background: linear-gradient(to bottom , #ffe985 ,#fa742b); */
		background-color: #fff;
	}

	.header {
		width: 100%;
		height: 450upx;

		border-bottom: 2upx #C0C0C0 solid;
		box-shadow: 0 2upx 32upx 6upx #C0C0C0;
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
		background: url(../../static/plus.png) no-repeat top left /100% auto;
	}

	.nav .right-icon {
		width: 8%;
		height: 80upx;
		float: right;
		margin-right: 20upx;
		background: url(../../static/list.png) no-repeat top right /100% auto;
	}

	.cityName {
		font-size: 50upx;
		color: #fff;
		display: inline;
	}

	.info {
		width: 100%;
		height: 320upx;
		text-align: center;
	}
	
	.info .tips{
		font-size: 32upx;
		color: #777;
	} 
	
	.info .now_info{
		display: flex;
		justify-content: space-around;
		height: 180upx;
		width: 360upx;
		margin-left: 50%;
		transform: translateX(-50%);
	}
	
	
	.info .now_info .now_info_left{
		height: 180upx;
		width: 180upx;
	}
	
	.info .now_info .now_info_left .img{
		height: 180upx;
		width: 180upx;
	}
	
	.info .now_info .now_info_right{
		height: 180upx;
		width: 180upx;
	}
	
	.info .now_info .now_info_right .now_tmp{
		font-size: 100upx;
		font-weight: 500;
		text-align: left;
	}
	
	.info .now_info .now_info_right .now_situation{
		font-size: 14upx;
		text-align: left;
		line-height: 12upx;
		margin-left: 26upx;
		color: #777;
	}
	
	



	.scrolling {
		width: 100%;
		text-align: center;
	}

	.hourly {
		width: 90%;
		height: 280upx;
		text-align: center;
		margin: 40upx auto 0;
		border-radius: 20upx;
		box-shadow: -4upx 0upx 30upx 4upx #C0C0C0;
	}

	.hourly text {
		color: #999;
		font-size: 32upx;
		font-weight: 400;
	}

	.w_info,
	.w_time,
	.w_tmp {
		width: 2880upx;
		height: 40upx;
	}

	.info_inner,
	.time_inner,
	.tmp_inner {
		width: 120upx;
		height: 40upx;
		float: left;
	}

	.myCanvas {
		width: 2880upx;
		height: 100upx;
		margin-top: 20upx;
	}

	.lifestyle {
		width: 90%;
		height: 150upx;
		margin: 60upx auto 0;
		box-shadow: -4upx 0upx 30upx 4upx #C0C0C0;
		border-radius: 20upx;
	}

	.lifestyle .lifestyle-inner {
		width: 80%;
		height: 120upx;
		text-align: center;
		margin: 15upx 0 15upx 0;
	}

	.lifestyle .lifestyle-inner .lifestyle-title {
		width: 100%;
		height: 45upx;
		font-size: 32upx;
		color: #333;
		line-height: 32upx;
		display: block;
	}

	.lifestyle .lifestyle-inner .lifestyle-content {
		width: 86%;
		height: 75upx;
		font-size: 28upx;
		line-height: 28upx;
		color: #999;
		display: block;
		margin: 0 auto;
	}


	.daily_forecast {
		width: 90%;
		text-align: center;
		margin: 40upx auto 0;
		overflow: hidden;
	}

	.daily_forecast :nth-child(3),
	.daily_forecast :nth-child(5),
	.daily_forecast :nth-child(7) {
		float: right;
	}

	.daily_one {
		width: 100%;
		height: 180upx;
		background: linear-gradient(to bottom left, #79f1a4, #0e5cad);
		border-radius: 20upx;
		position: relative;
	}

	.daily_one .date {
		position: absolute;
		top: 10upx;
		left: 20upx;
		font-size: 60upx;
		color: #fff;
	}

	.daily_one .week {
		position: absolute;
		top: 75upx;
		left: 28upx;
		font-size: 24upx;
		color: #fff;
	}

	.daily_one .tmp {
		width: 100%;
		font-size: 90upx;
		color: #fff;
		padding-top: 30upx;

	}

	.daily_one .icon {
		position: absolute;
		top: 10upx;
		right: 15upx;
		font-size: 32upx;
		line-height: 32upx;
		width: 200upx;
		color: #fff;
		text-align: center;
	}

	.daily_one .icon .d_icon,
	.daily_one .icon .n_icon {
		height: 60upx;
	}

	.daily_one .icon text {
		float: right;
		line-height: 32upx;
		margin-top: 15upx;
	}

	.daily_one .icon .d_icon image,
	.daily_one .icon .n_icon image {
		height: 60upx;
		width: 60upx;
		float: right;
	}

	.daily_one .sun {
		position: absolute;
		bottom: 0;
		width: 100%;
		font-size: 28upx;
		color: #fff;
	}

	.daily_one .sun .up {
		float: left;
		margin-left: 20upx;
	}

	.daily_one .sun .down {
		float: right;
		margin-right: 20upx;
	}

	.daily {
		width: 49%;
		height: 220upx;
		background: linear-gradient(to bottom left, #79f1a4, #0e5cad);
		border-radius: 20upx;
		position: relative;
		margin-top: 20upx;
		float: left;
	}


	.daily .date {
		position: absolute;
		top: 10upx;
		left: 20upx;
		font-size: 52upx;
		color: #fff;
	}

	.daily .week {
		position: absolute;
		top: 75upx;
		left: 28upx;
		font-size: 24upx;
		color: #fff;
	}

	.daily .tmp {
		font-size: 40upx;
		color: #fff;
		position: absolute;
		right: 20upx;
		top: 15upx;
	}

	.daily .icon {
		position: absolute;
		top: 75upx;
		right: 15upx;
		font-size: 28upx;
		line-height: 28upx;
		width: 200upx;
		color: #fff;
		text-align: center;
	}

	.daily .icon .d_icon,
	.daily .icon .n_icon {
		height: 45upx;
	}

	.daily .icon text {
		float: right;
		margin-top: 8upx;
	}

	.daily .icon .d_icon image,
	.daily .icon .n_icon image {
		height: 45upx;
		width: 45upx;
		float: right;
	}

	.daily .sun {
		position: absolute;
		bottom: 0;
		width: 100%;
		font-size: 28upx;
		color: #fff;
	}

	.daily .sun .up {
		float: left;
		margin-left: 20upx;
	}

	.daily .sun .down {
		float: right;
		margin-right: 20upx;
	}
</style>
