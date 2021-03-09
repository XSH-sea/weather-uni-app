<template>
	<view class="search">
		<view class="status_bar"></view>
		<view class="nav">
			<view class="left-icon" @tap="back"></view>
			<view class="title">城市搜索</view>
		</view>
		<view class="searchBar">
			<input type="text" confirm-type="search" v-model="searchCity" cursor="10000" @confirm="search()" @focus="change()" />
			<button class="sure" @tap="search()">确定</button>
		</view>
		<view class="history" v-show="flag==1">
			<text>搜索历史</text>
			<view class="boder">
				<view class="history-item" v-for="(val,index) in history" :key="index" @tap="goIndex(val)">{{val}}</view>
			</view>
			<view class="clear" @tap="clear">清除历史记录</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				city: [{
						"City_EN": "beijing",
						"City_CN": "北京",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "haidian",
						"City_CN": "海淀",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "chaoyang",
						"City_CN": "朝阳",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "shunyi",
						"City_CN": "顺义",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "huairou",
						"City_CN": "怀柔",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "tongzhou",
						"City_CN": "通州",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "changping",
						"City_CN": "昌平",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "yanqing",
						"City_CN": "延庆",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "fengtai",
						"City_CN": "丰台",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "shijingshan",
						"City_CN": "石景山",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "daxing",
						"City_CN": "大兴",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "fangshan",
						"City_CN": "房山",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "miyun",
						"City_CN": "密云",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "mentougou",
						"City_CN": "门头沟",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "pinggu",
						"City_CN": "平谷",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "dongcheng",
						"City_CN": "东城",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "xicheng",
						"City_CN": "西城",
						"Province_EN": "beijing",
						"Province_CN": "北京"
					},
					{
						"City_EN": "shanghai",
						"City_CN": "上海",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "minhang",
						"City_CN": "闵行",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "baoshan",
						"City_CN": "宝山",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "huangpu",
						"City_CN": "黄浦",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "jiading",
						"City_CN": "嘉定",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "pudongxinqu",
						"City_CN": "浦东新区",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "jinshan",
						"City_CN": "金山",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "qingpu",
						"City_CN": "青浦",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "songjiang",
						"City_CN": "松江",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "fengxian",
						"City_CN": "奉贤",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "chongming",
						"City_CN": "崇明",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "xuhui",
						"City_CN": "徐汇",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "changning",
						"City_CN": "长宁",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "jingan",
						"City_CN": "静安",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "putuo",
						"City_CN": "普陀",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "hongkou",
						"City_CN": "虹口",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "yangpu",
						"City_CN": "杨浦",
						"Province_EN": "shanghai",
						"Province_CN": "上海"
					},
					{
						"City_EN": "tianjin",
						"City_CN": "天津",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "wuqing",
						"City_CN": "武清",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "baodi",
						"City_CN": "宝坻",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "dongli",
						"City_CN": "东丽",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "xiqing",
						"City_CN": "西青",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "beichen",
						"City_CN": "北辰",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "ninghe",
						"City_CN": "宁河",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "heping",
						"City_CN": "和平",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "jinghai",
						"City_CN": "静海",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "jinnan",
						"City_CN": "津南",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "binhaixinqu",
						"City_CN": "滨海新区",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "hedong",
						"City_CN": "河东",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "hexi",
						"City_CN": "河西",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "jizhou",
						"City_CN": "蓟州",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "nankai",
						"City_CN": "南开",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "hebei",
						"City_CN": "河北",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "hongqiao",
						"City_CN": "红桥",
						"Province_EN": "tianjin",
						"Province_CN": "天津"
					},
					{
						"City_EN": "chongqing",
						"City_CN": "重庆",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "yongchuan",
						"City_CN": "永川",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "hechuan",
						"City_CN": "合川",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "nanchuan",
						"City_CN": "南川",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "jiangjin",
						"City_CN": "江津",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "yubei",
						"City_CN": "渝北",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "beibei",
						"City_CN": "北碚",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "banan",
						"City_CN": "巴南",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "changshou",
						"City_CN": "长寿",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "qianjiang",
						"City_CN": "黔江",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "yuzhong",
						"City_CN": "渝中",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "wanzhou",
						"City_CN": "万州",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "fuling",
						"City_CN": "涪陵",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "chengkou",
						"City_CN": "城口",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "yunyang",
						"City_CN": "云阳",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "wuxi",
						"City_CN": "巫溪",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "fengjie",
						"City_CN": "奉节",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "wushan",
						"City_CN": "巫山",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "tongnan",
						"City_CN": "潼南",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "dianjiang",
						"City_CN": "垫江",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "liangping",
						"City_CN": "梁平",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "zhongxian",
						"City_CN": "忠县",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "shizhu",
						"City_CN": "石柱",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "dazu",
						"City_CN": "大足",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "rongchang",
						"City_CN": "荣昌",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "tongliang",
						"City_CN": "铜梁",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "bishan",
						"City_CN": "璧山",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "fengdu",
						"City_CN": "丰都",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "wulong",
						"City_CN": "武隆",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "pengshui",
						"City_CN": "彭水",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "qijiang",
						"City_CN": "綦江",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "youyang",
						"City_CN": "酉阳",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "dadukou",
						"City_CN": "大渡口",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "xiushan",
						"City_CN": "秀山",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "jiangbei",
						"City_CN": "江北",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "shapingba",
						"City_CN": "沙坪坝",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "jiulongpo",
						"City_CN": "九龙坡",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "nanan",
						"City_CN": "南岸",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "kaizhou",
						"City_CN": "开州",
						"Province_EN": "chongqing",
						"Province_CN": "重庆"
					},
					{
						"City_EN": "haerbin",
						"City_CN": "哈尔滨",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "shuangcheng",
						"City_CN": "双城",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hulan",
						"City_CN": "呼兰",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "acheng",
						"City_CN": "阿城",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "binxian",
						"City_CN": "宾县",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "yilan",
						"City_CN": "依兰",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "bayan",
						"City_CN": "巴彦",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tonghe",
						"City_CN": "通河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "fangzheng",
						"City_CN": "方正",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "yanshou",
						"City_CN": "延寿",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "shangzhi",
						"City_CN": "尚志",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "wuchang",
						"City_CN": "五常",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "mulan",
						"City_CN": "木兰",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "daoli",
						"City_CN": "道里",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "nangang",
						"City_CN": "南岗",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "daowai",
						"City_CN": "道外",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "pingfang",
						"City_CN": "平房",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "songbei",
						"City_CN": "松北",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xiangfang",
						"City_CN": "香坊",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "qiqihaer",
						"City_CN": "齐齐哈尔",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "nehe",
						"City_CN": "讷河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "longjiang",
						"City_CN": "龙江",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "gannan",
						"City_CN": "甘南",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "fuyu",
						"City_CN": "富裕",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "yian",
						"City_CN": "依安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "baiquan",
						"City_CN": "拜泉",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "keshan",
						"City_CN": "克山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "kedong",
						"City_CN": "克东",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tailai",
						"City_CN": "泰来",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "longsha",
						"City_CN": "龙沙",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jianhua",
						"City_CN": "建华",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tiefeng",
						"City_CN": "铁锋",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "angangxi",
						"City_CN": "昂昂溪",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "fulaerji",
						"City_CN": "富拉尔基",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "nianzishan",
						"City_CN": "碾子山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "meilisi",
						"City_CN": "梅里斯",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "mudanjiang",
						"City_CN": "牡丹江",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hailin",
						"City_CN": "海林",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "muling",
						"City_CN": "穆棱",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "linkou",
						"City_CN": "林口",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "suifenhe",
						"City_CN": "绥芬河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "ningan",
						"City_CN": "宁安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "dongning",
						"City_CN": "东宁",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "dongan",
						"City_CN": "东安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "yangming",
						"City_CN": "阳明",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "aimin",
						"City_CN": "爱民",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xian",
						"City_CN": "西安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jiamusi",
						"City_CN": "佳木斯",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tangyuan",
						"City_CN": "汤原",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "fuyuan",
						"City_CN": "抚远",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "huachuan",
						"City_CN": "桦川",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "huanan",
						"City_CN": "桦南",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tongjiang",
						"City_CN": "同江",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "fujin",
						"City_CN": "富锦",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xiangyang",
						"City_CN": "向阳",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "qianjin",
						"City_CN": "前进",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "dongfeng",
						"City_CN": "东风",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jiaoqu",
						"City_CN": "郊区",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "suihua",
						"City_CN": "绥化",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "zhaodong",
						"City_CN": "肇东",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "anda",
						"City_CN": "安达",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hailun",
						"City_CN": "海伦",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "mingshui",
						"City_CN": "明水",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "wangkui",
						"City_CN": "望奎",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "lanxi",
						"City_CN": "兰西",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "qinggang",
						"City_CN": "青冈",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "qingan",
						"City_CN": "庆安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "suiling",
						"City_CN": "绥棱",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "beilin",
						"City_CN": "北林",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "heihe",
						"City_CN": "黑河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "nenjiang",
						"City_CN": "嫩江",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "sunwu",
						"City_CN": "孙吴",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xunke",
						"City_CN": "逊克",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "wudalianchi",
						"City_CN": "五大连池",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "beian",
						"City_CN": "北安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "aihui",
						"City_CN": "爱辉",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "daxinganling",
						"City_CN": "大兴安岭",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tahe",
						"City_CN": "塔河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "mohe",
						"City_CN": "漠河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "huma",
						"City_CN": "呼玛",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "huzhong",
						"City_CN": "呼中",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xinlin",
						"City_CN": "新林",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jiagedaqi",
						"City_CN": "加格达奇",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "yichun",
						"City_CN": "伊春",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "wuyiling",
						"City_CN": "乌伊岭",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "wuying",
						"City_CN": "五营",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tieli",
						"City_CN": "铁力",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jiayin",
						"City_CN": "嘉荫",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "nancha",
						"City_CN": "南岔",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "youhao",
						"City_CN": "友好",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xilin",
						"City_CN": "西林",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "cuiluan",
						"City_CN": "翠峦",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xinqing",
						"City_CN": "新青",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "meixi",
						"City_CN": "美溪",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jinshantun",
						"City_CN": "金山屯",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "wumahe",
						"City_CN": "乌马河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "tangwanghe",
						"City_CN": "汤旺河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "dailing",
						"City_CN": "带岭",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hongxing",
						"City_CN": "红星",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "shangganling",
						"City_CN": "上甘岭",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "daqing",
						"City_CN": "大庆",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "lindian",
						"City_CN": "林甸",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "zhaozhou",
						"City_CN": "肇州",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "zhaoyuan",
						"City_CN": "肇源",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "duerbote",
						"City_CN": "杜尔伯特",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "saertu",
						"City_CN": "萨尔图",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "longfeng",
						"City_CN": "龙凤",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "ranghulu",
						"City_CN": "让胡路",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "honggang",
						"City_CN": "红岗",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "datong",
						"City_CN": "大同",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xinxing",
						"City_CN": "新兴",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "qitaihe",
						"City_CN": "七台河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "boli",
						"City_CN": "勃利",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "taoshan",
						"City_CN": "桃山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "qiezihe",
						"City_CN": "茄子河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jixi",
						"City_CN": "鸡西",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hulin",
						"City_CN": "虎林",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "mishan",
						"City_CN": "密山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jidong",
						"City_CN": "鸡东",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jiguan",
						"City_CN": "鸡冠",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hengshan",
						"City_CN": "恒山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "didao",
						"City_CN": "滴道",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "lishu",
						"City_CN": "梨树",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "chengzihe",
						"City_CN": "城子河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "mashan",
						"City_CN": "麻山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "hegang",
						"City_CN": "鹤岗",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "suibin",
						"City_CN": "绥滨",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "luobei",
						"City_CN": "萝北",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xiangyang",
						"City_CN": "向阳",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "gongnong",
						"City_CN": "工农",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "nanshan",
						"City_CN": "南山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xingan",
						"City_CN": "兴安",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "dongshan",
						"City_CN": "东山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "xingshan",
						"City_CN": "兴山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "shuangyashan",
						"City_CN": "双鸭山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jixian",
						"City_CN": "集贤",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "baoqing",
						"City_CN": "宝清",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "raohe",
						"City_CN": "饶河",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "youyi",
						"City_CN": "友谊",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "jianshan",
						"City_CN": "尖山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "lingdong",
						"City_CN": "岭东",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "sifangtai",
						"City_CN": "四方台",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "baoshan",
						"City_CN": "宝山",
						"Province_EN": "heilongjiang",
						"Province_CN": "黑龙江"
					},
					{
						"City_EN": "changchun",
						"City_CN": "长春",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "nongan",
						"City_CN": "农安",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "dehui",
						"City_CN": "德惠",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "jiutai",
						"City_CN": "九台",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "yushu",
						"City_CN": "榆树",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "shuangyang",
						"City_CN": "双阳",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "erdao",
						"City_CN": "二道",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "nanguan",
						"City_CN": "南关",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "kuancheng",
						"City_CN": "宽城",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "chaoyang",
						"City_CN": "朝阳",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "lvyuan",
						"City_CN": "绿园",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "jilin",
						"City_CN": "吉林",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "shulan",
						"City_CN": "舒兰",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "yongji",
						"City_CN": "永吉",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "jiaohe",
						"City_CN": "蛟河",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "panshi",
						"City_CN": "磐石",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "huadian",
						"City_CN": "桦甸",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "changyi",
						"City_CN": "昌邑",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "longtan",
						"City_CN": "龙潭",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "chuanying",
						"City_CN": "船营",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "fengman",
						"City_CN": "丰满",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "yanji",
						"City_CN": "延吉",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "dunhua",
						"City_CN": "敦化",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "antu",
						"City_CN": "安图",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "wangqing",
						"City_CN": "汪清",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "helong",
						"City_CN": "和龙",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "yanbian",
						"City_CN": "延边",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "longjing",
						"City_CN": "龙井",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "hunchun",
						"City_CN": "珲春",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "tumen",
						"City_CN": "图们",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "siping",
						"City_CN": "四平",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "shuangliao",
						"City_CN": "双辽",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "lishu",
						"City_CN": "梨树",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "gongzhuling",
						"City_CN": "公主岭",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "yitong",
						"City_CN": "伊通",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "tiexi",
						"City_CN": "铁西",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "tiedong",
						"City_CN": "铁东",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "tonghua",
						"City_CN": "通化",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "meihekou",
						"City_CN": "梅河口",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "liuhe",
						"City_CN": "柳河",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "huinan",
						"City_CN": "辉南",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "jian",
						"City_CN": "集安",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "tonghuaxian",
						"City_CN": "通化县",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "dongchang",
						"City_CN": "东昌",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "erdaojiang",
						"City_CN": "二道江",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "baicheng",
						"City_CN": "白城",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "taonan",
						"City_CN": "洮南",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "daan",
						"City_CN": "大安",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "zhenlai",
						"City_CN": "镇赉",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "tongyu",
						"City_CN": "通榆",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "taobei",
						"City_CN": "洮北",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "liaoyuan",
						"City_CN": "辽源",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "dongfeng",
						"City_CN": "东丰",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "dongliao",
						"City_CN": "东辽",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "longshan",
						"City_CN": "龙山",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "xian",
						"City_CN": "西安",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "songyuan",
						"City_CN": "松原",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "qianan",
						"City_CN": "乾安",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "qianguo",
						"City_CN": "前郭",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "changling",
						"City_CN": "长岭",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "fuyu",
						"City_CN": "扶余",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "ningjiang",
						"City_CN": "宁江",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "baishan",
						"City_CN": "白山",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "jingyu",
						"City_CN": "靖宇",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "linjiang",
						"City_CN": "临江",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "donggang",
						"City_CN": "东岗",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "changbai",
						"City_CN": "长白",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "fusong",
						"City_CN": "抚松",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "jiangyuan",
						"City_CN": "江源",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "hunjiang",
						"City_CN": "浑江",
						"Province_EN": "jilin",
						"Province_CN": "吉林"
					},
					{
						"City_EN": "shenyang",
						"City_CN": "沈阳",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "hunnan",
						"City_CN": "浑南",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "liaozhong",
						"City_CN": "辽中",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "kangping",
						"City_CN": "康平",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "faku",
						"City_CN": "法库",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xinmin",
						"City_CN": "新民",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "heping",
						"City_CN": "和平",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "shenhe",
						"City_CN": "沈河",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dadong",
						"City_CN": "大东",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "huanggu",
						"City_CN": "皇姑",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "tiexi",
						"City_CN": "铁西",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "sujiatun",
						"City_CN": "苏家屯",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "shenbeixinqu",
						"City_CN": "沈北新区",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "yuhong",
						"City_CN": "于洪",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dalian",
						"City_CN": "大连",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "wafangdian",
						"City_CN": "瓦房店",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "jinzhou",
						"City_CN": "金州",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "pulandian",
						"City_CN": "普兰店",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "lvshun",
						"City_CN": "旅顺",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "changhai",
						"City_CN": "长海",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "zhuanghe",
						"City_CN": "庄河",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "zhongshan",
						"City_CN": "中山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xigang",
						"City_CN": "西岗",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "shahekou",
						"City_CN": "沙河口",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "ganjingzi",
						"City_CN": "甘井子",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "anshan",
						"City_CN": "鞍山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "taian",
						"City_CN": "台安",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xiuyan",
						"City_CN": "岫岩",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "haicheng",
						"City_CN": "海城",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "tiedong",
						"City_CN": "铁东",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "tiexi",
						"City_CN": "铁西",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "lishan",
						"City_CN": "立山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "qianshan",
						"City_CN": "千山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "fushun",
						"City_CN": "抚顺",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xinbin",
						"City_CN": "新宾",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "qingyuan",
						"City_CN": "清原",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xinfu",
						"City_CN": "新抚",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dongzhou",
						"City_CN": "东洲",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "wanghua",
						"City_CN": "望花",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "shuncheng",
						"City_CN": "顺城",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "benxi",
						"City_CN": "本溪",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "benxixian",
						"City_CN": "本溪县",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "pingshan",
						"City_CN": "平山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "huanren",
						"City_CN": "桓仁",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xihu",
						"City_CN": "溪湖",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "mingshan",
						"City_CN": "明山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "nanfen",
						"City_CN": "南芬",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dandong",
						"City_CN": "丹东",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "fengcheng",
						"City_CN": "凤城",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "kuandian",
						"City_CN": "宽甸",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "donggang",
						"City_CN": "东港",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "yuanbao",
						"City_CN": "元宝",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "zhenxing",
						"City_CN": "振兴",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "zhenan",
						"City_CN": "振安",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "jinzhou",
						"City_CN": "锦州",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "linghai",
						"City_CN": "凌海",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "guta",
						"City_CN": "古塔",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "yixian",
						"City_CN": "义县",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "heishan",
						"City_CN": "黑山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "beizhen",
						"City_CN": "北镇",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "linghe",
						"City_CN": "凌河",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "taihe",
						"City_CN": "太和",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "yingkou",
						"City_CN": "营口",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dashiqiao",
						"City_CN": "大石桥",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "gaizhou",
						"City_CN": "盖州",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "zhanqian",
						"City_CN": "站前",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xishi",
						"City_CN": "西市",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "bayuquan",
						"City_CN": "鲅鱼圈",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "laobian",
						"City_CN": "老边",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "fuxin",
						"City_CN": "阜新",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "zhangwu",
						"City_CN": "彰武",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "haizhou",
						"City_CN": "海州",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xinqiu",
						"City_CN": "新邱",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "taiping",
						"City_CN": "太平",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "qinghemen",
						"City_CN": "清河门",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xihe",
						"City_CN": "细河",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "liaoyang",
						"City_CN": "辽阳",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "liaoyangxian",
						"City_CN": "辽阳县",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dengta",
						"City_CN": "灯塔",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "gongchangling",
						"City_CN": "弓长岭",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "baita",
						"City_CN": "白塔",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "wensheng",
						"City_CN": "文圣",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "hongwei",
						"City_CN": "宏伟",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "taizihe",
						"City_CN": "太子河",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "tieling",
						"City_CN": "铁岭",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "kaiyuan",
						"City_CN": "开原",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "changtu",
						"City_CN": "昌图",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xifeng",
						"City_CN": "西丰",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "tiefa",
						"City_CN": "调兵山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "yinzhou",
						"City_CN": "银州",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "qinghe",
						"City_CN": "清河",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "chaoyang",
						"City_CN": "朝阳",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "shuangta",
						"City_CN": "双塔",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "lingyuan",
						"City_CN": "凌源",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "kazuo",
						"City_CN": "喀左",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "beipiao",
						"City_CN": "北票",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "longcheng",
						"City_CN": "龙城",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "jianpingxian",
						"City_CN": "建平县",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "panjin",
						"City_CN": "盘锦",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "dawa",
						"City_CN": "大洼",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "panshan",
						"City_CN": "盘山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "shuangtaizi",
						"City_CN": "双台子",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xinglongtai",
						"City_CN": "兴隆台",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "huludao",
						"City_CN": "葫芦岛",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "jianchang",
						"City_CN": "建昌",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "suizhong",
						"City_CN": "绥中",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "xingcheng",
						"City_CN": "兴城",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "lianshan",
						"City_CN": "连山",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "longgang",
						"City_CN": "龙港",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "nanpiao",
						"City_CN": "南票",
						"Province_EN": "liaoning",
						"Province_CN": "辽宁"
					},
					{
						"City_EN": "huhehaote",
						"City_CN": "呼和浩特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "tuzuoqi",
						"City_CN": "土左旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "tuoxian",
						"City_CN": "托县",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "helin",
						"City_CN": "和林",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "qingshuihe",
						"City_CN": "清水河",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "saihan",
						"City_CN": "赛罕",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuchuan",
						"City_CN": "武川",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xincheng",
						"City_CN": "新城",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "huimin",
						"City_CN": "回民",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "yuquan",
						"City_CN": "玉泉",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "baotou",
						"City_CN": "包头",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "baiyunebo",
						"City_CN": "白云鄂博",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "mandula",
						"City_CN": "满都拉",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "tuyouqi",
						"City_CN": "土右旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "guyang",
						"City_CN": "固阳",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "damaoqi",
						"City_CN": "达茂旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xilamuren",
						"City_CN": "希拉穆仁",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "donghe",
						"City_CN": "东河",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kundoulun",
						"City_CN": "昆都仑",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "qingshan",
						"City_CN": "青山",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "shiguai",
						"City_CN": "石拐",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "jiuyuan",
						"City_CN": "九原",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuhai",
						"City_CN": "乌海",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "haibowan",
						"City_CN": "海勃湾",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hainan",
						"City_CN": "海南",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuda",
						"City_CN": "乌达",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "jining",
						"City_CN": "集宁",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhuozi",
						"City_CN": "卓资",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "huade",
						"City_CN": "化德",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "shangdu",
						"City_CN": "商都",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wulanchabu",
						"City_CN": "乌兰察布",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xinghe",
						"City_CN": "兴和",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "liangcheng",
						"City_CN": "凉城",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "chayouqianqi",
						"City_CN": "察右前旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "chayouzhongqi",
						"City_CN": "察右中旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "chayouhouqi",
						"City_CN": "察右后旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "siziwangqi",
						"City_CN": "四子王旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "fengzhen",
						"City_CN": "丰镇",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "tongliao",
						"City_CN": "通辽",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "shebotu",
						"City_CN": "舍伯吐",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kezuozhongqi",
						"City_CN": "科左中旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kezuohouqi",
						"City_CN": "科左后旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "qinglongshan",
						"City_CN": "青龙山",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kailu",
						"City_CN": "开鲁",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kulun",
						"City_CN": "库伦",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "naiman",
						"City_CN": "奈曼",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhalute",
						"City_CN": "扎鲁特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "keerqin",
						"City_CN": "科尔沁",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "bayaertuhushuo",
						"City_CN": "巴雅尔吐胡硕",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "huolinguole",
						"City_CN": "霍林郭勒",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "chifeng",
						"City_CN": "赤峰",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hongshan",
						"City_CN": "红山",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "aluqi",
						"City_CN": "阿鲁旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "balinzuoqi",
						"City_CN": "巴林左旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "balinyouqi",
						"City_CN": "巴林右旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "linxi",
						"City_CN": "林西",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "keshiketeng",
						"City_CN": "克什克腾",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wengniute",
						"City_CN": "翁牛特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "gangzi",
						"City_CN": "岗子",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kalaqin",
						"City_CN": "喀喇沁",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "balihan",
						"City_CN": "八里罕",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "ningcheng",
						"City_CN": "宁城",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "aohan",
						"City_CN": "敖汉",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "yuanbaoshan",
						"City_CN": "元宝山",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "songshan",
						"City_CN": "松山",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "fuhe",
						"City_CN": "富河",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "baoguotu",
						"City_CN": "宝国图",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "eerduosi",
						"City_CN": "鄂尔多斯",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "dalate",
						"City_CN": "达拉特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhungeer",
						"City_CN": "准格尔",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "eqianqi",
						"City_CN": "鄂前旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "henan",
						"City_CN": "河南",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "yihewusu",
						"City_CN": "伊和乌素",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "etuoke",
						"City_CN": "鄂托克",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hangjinqi",
						"City_CN": "杭锦旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wushenqi",
						"City_CN": "乌审旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "yijinhuoluo",
						"City_CN": "伊金霍洛",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wushenzhao",
						"City_CN": "乌审召",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "dongsheng",
						"City_CN": "东胜",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "kangbashi",
						"City_CN": "康巴什",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "linhe",
						"City_CN": "临河",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuyuan",
						"City_CN": "五原",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "dengkou",
						"City_CN": "磴口",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuqianqi",
						"City_CN": "乌前旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "dashetai",
						"City_CN": "大佘太",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuzhongqi",
						"City_CN": "乌中旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wuhouqi",
						"City_CN": "乌后旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hailisu",
						"City_CN": "海力素",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "narenbaolige",
						"City_CN": "那仁宝力格",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hangjinhouqi",
						"City_CN": "杭锦后旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "bayannaoer",
						"City_CN": "巴彦淖尔",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xilinhaote",
						"City_CN": "锡林浩特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xilinguole",
						"City_CN": "锡林郭勒",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "erlianhaote",
						"City_CN": "二连浩特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "abaga",
						"City_CN": "阿巴嘎",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "suzuoqi",
						"City_CN": "苏左旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "suyouqi",
						"City_CN": "苏右旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhurihe",
						"City_CN": "朱日和",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "dongwuqi",
						"City_CN": "东乌旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xiwuqi",
						"City_CN": "西乌旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "taipusiqi",
						"City_CN": "太仆寺",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xianghuang",
						"City_CN": "镶黄旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhengxiangbaiqi",
						"City_CN": "正镶白旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhenglanqi",
						"City_CN": "正蓝旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "duolun",
						"City_CN": "多伦",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "boketu",
						"City_CN": "博克图",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wulagai",
						"City_CN": "乌拉盖",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hailaer",
						"City_CN": "海拉尔",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xiaoergou",
						"City_CN": "小二沟",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "arongqi",
						"City_CN": "阿荣旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "molidawa",
						"City_CN": "莫力达瓦",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "elunchunqi",
						"City_CN": "鄂伦春旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "ewenkeqi",
						"City_CN": "鄂温克旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "chenqi",
						"City_CN": "陈旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xinzuoqi",
						"City_CN": "新左旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xinyouqi",
						"City_CN": "新右旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "manzhouli",
						"City_CN": "满洲里",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "yakeshi",
						"City_CN": "牙克石",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhalantun",
						"City_CN": "扎兰屯",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "hulunbeier",
						"City_CN": "呼伦贝尔",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "eerguna",
						"City_CN": "额尔古纳",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "genhe",
						"City_CN": "根河",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "tulihe",
						"City_CN": "图里河",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhalainuoer",
						"City_CN": "扎赉诺尔",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wulanhaote",
						"City_CN": "乌兰浩特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "aershan",
						"City_CN": "阿尔山",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "keyouzhongqi",
						"City_CN": "科右中旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "huerle",
						"City_CN": "胡尔勒",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "zhanlaite",
						"City_CN": "扎赉特",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "suolun",
						"City_CN": "索伦",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "tuquan",
						"City_CN": "突泉",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "xinganmeng",
						"City_CN": "兴安盟",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "keyouqianqi",
						"City_CN": "科右前旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "gaoliban",
						"City_CN": "高力板",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "azuoqi",
						"City_CN": "阿左旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "ayouqi",
						"City_CN": "阿右旗",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "ejina",
						"City_CN": "额济纳",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "guanzihu",
						"City_CN": "拐子湖",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "jilantai",
						"City_CN": "吉兰泰",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "bayannuorigong",
						"City_CN": "巴彦诺日公",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "yabulai",
						"City_CN": "雅布赖",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "wusitai",
						"City_CN": "乌斯太",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "luanjingtan",
						"City_CN": "孪井滩",
						"Province_EN": "neimenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "alashanmeng",
						"City_CN": "阿拉善盟",
						"Province_EN": "namenggu",
						"Province_CN": "内蒙古"
					},
					{
						"City_EN": "shijiazhuang",
						"City_CN": "石家庄",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jingxing",
						"City_CN": "井陉",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zhengding",
						"City_CN": "正定",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "luancheng",
						"City_CN": "栾城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xingtang",
						"City_CN": "行唐",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lingshou",
						"City_CN": "灵寿",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "gaoyi",
						"City_CN": "高邑",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shenze",
						"City_CN": "深泽",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zanhuang",
						"City_CN": "赞皇",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wuji",
						"City_CN": "无极",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "pingshan",
						"City_CN": "平山",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yuanshi",
						"City_CN": "元氏",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zhaoxian",
						"City_CN": "赵县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xinji",
						"City_CN": "辛集",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "gaocheng",
						"City_CN": "藁城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jinzhou",
						"City_CN": "晋州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xinle",
						"City_CN": "新乐",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "luquan",
						"City_CN": "鹿泉",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "changan",
						"City_CN": "长安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qiaoxi",
						"City_CN": "桥西",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xinhua",
						"City_CN": "新华",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jingxingkuangqu",
						"City_CN": "井陉矿区",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yuhua",
						"City_CN": "裕华",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "baoding",
						"City_CN": "保定",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "mancheng",
						"City_CN": "满城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fuping",
						"City_CN": "阜平",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xushui",
						"City_CN": "徐水",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "tangxian",
						"City_CN": "唐县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "gaoyang",
						"City_CN": "高阳",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jingxiu",
						"City_CN": "竞秀",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "laiyuan",
						"City_CN": "涞源",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wangdu",
						"City_CN": "望都",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yixian",
						"City_CN": "易县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lianchi",
						"City_CN": "莲池",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "quyang",
						"City_CN": "曲阳",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lixian",
						"City_CN": "蠡县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shunping",
						"City_CN": "顺平",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zhuozhou",
						"City_CN": "涿州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "dingzhou",
						"City_CN": "定州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "anguo",
						"City_CN": "安国",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "gaobeidian",
						"City_CN": "高碑店",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "laishui",
						"City_CN": "涞水",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "dingxing",
						"City_CN": "定兴",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qingyuan",
						"City_CN": "清苑",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "boye",
						"City_CN": "博野",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zhangjiakou",
						"City_CN": "张家口",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xuanhua",
						"City_CN": "宣化",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zhangbei",
						"City_CN": "张北",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "kangbao",
						"City_CN": "康保",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guyuan",
						"City_CN": "沽源",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shangyi",
						"City_CN": "尚义",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yuxian",
						"City_CN": "蔚县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yangyuan",
						"City_CN": "阳原",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "huaian",
						"City_CN": "怀安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wanquan",
						"City_CN": "万全",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "huailai",
						"City_CN": "怀来",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zhuolu",
						"City_CN": "涿鹿",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "chicheng",
						"City_CN": "赤城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "chongli",
						"City_CN": "崇礼",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qiaodong",
						"City_CN": "桥东",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qiaoxi",
						"City_CN": "桥西",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xiahuayuan",
						"City_CN": "下花园",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shuangqiao",
						"City_CN": "双桥",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "chengde",
						"City_CN": "承德",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "chengdexian",
						"City_CN": "承德县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xinglong",
						"City_CN": "兴隆",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "pingquan",
						"City_CN": "平泉",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "luanping",
						"City_CN": "滦平",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "longhua",
						"City_CN": "隆化",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fengning",
						"City_CN": "丰宁",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "kuancheng",
						"City_CN": "宽城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "weichang",
						"City_CN": "围场",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shuangluan",
						"City_CN": "双滦",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yingshouyingzikuang",
						"City_CN": "鹰手营子矿",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "tangshan",
						"City_CN": "唐山",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fengnan",
						"City_CN": "丰南",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fengrun",
						"City_CN": "丰润",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "luanxian",
						"City_CN": "滦县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "luannan",
						"City_CN": "滦南",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "leting",
						"City_CN": "乐亭",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qianxi",
						"City_CN": "迁西",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yutian",
						"City_CN": "玉田",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "caofeidian",
						"City_CN": "曹妃甸",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zunhua",
						"City_CN": "遵化",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qianan",
						"City_CN": "迁安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lunan",
						"City_CN": "路南",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lubei",
						"City_CN": "路北",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guye",
						"City_CN": "古冶",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "kaiping",
						"City_CN": "开平",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "langfang",
						"City_CN": "廊坊",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guan",
						"City_CN": "固安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yongqing",
						"City_CN": "永清",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xianghe",
						"City_CN": "香河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "dacheng",
						"City_CN": "大城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wenan",
						"City_CN": "文安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "dachang",
						"City_CN": "大厂",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "bazhou",
						"City_CN": "霸州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "sanhe",
						"City_CN": "三河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "anci",
						"City_CN": "安次",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guangyang",
						"City_CN": "广阳",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "cangzhou",
						"City_CN": "沧州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qingxian",
						"City_CN": "青县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "dongguang",
						"City_CN": "东光",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "haixing",
						"City_CN": "海兴",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yanshan",
						"City_CN": "盐山",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "suning",
						"City_CN": "肃宁",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "nanpi",
						"City_CN": "南皮",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wuqiao",
						"City_CN": "吴桥",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xianxian",
						"City_CN": "献县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "mengcun",
						"City_CN": "孟村",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "botou",
						"City_CN": "泊头",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "renqiu",
						"City_CN": "任丘",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "huanghua",
						"City_CN": "黄骅",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "hejian",
						"City_CN": "河间",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xinhua",
						"City_CN": "新华",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "cangxian",
						"City_CN": "沧县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yunhe",
						"City_CN": "运河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "hengshui",
						"City_CN": "衡水",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "zaoqiang",
						"City_CN": "枣强",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wuyi",
						"City_CN": "武邑",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wuqiang",
						"City_CN": "武强",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "raoyang",
						"City_CN": "饶阳",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "anping",
						"City_CN": "安平",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "gucheng",
						"City_CN": "故城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jingxian",
						"City_CN": "景县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fucheng",
						"City_CN": "阜城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jizhou",
						"City_CN": "冀州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shenzhou",
						"City_CN": "深州",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "taocheng",
						"City_CN": "桃城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xingtai",
						"City_CN": "邢台",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lincheng",
						"City_CN": "临城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qiaodong",
						"City_CN": "桥东",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "neiqiu",
						"City_CN": "内丘",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "baixiang",
						"City_CN": "柏乡",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "longyao",
						"City_CN": "隆尧",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "nanhe",
						"City_CN": "南和",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "ningjin",
						"City_CN": "宁晋",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "julu",
						"City_CN": "巨鹿",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xinhe",
						"City_CN": "新河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guangzong",
						"City_CN": "广宗",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "pingxiang",
						"City_CN": "平乡",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "weixian",
						"City_CN": "威县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qinghe",
						"City_CN": "清河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "linxi",
						"City_CN": "临西",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "nangong",
						"City_CN": "南宫",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shahe",
						"City_CN": "沙河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "renxian",
						"City_CN": "任县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qiaoxi",
						"City_CN": "桥西",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "handan",
						"City_CN": "邯郸",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fengfeng",
						"City_CN": "峰峰",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "linzhang",
						"City_CN": "临漳",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "chengan",
						"City_CN": "成安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "daming",
						"City_CN": "大名",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shexian",
						"City_CN": "涉县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "cixian",
						"City_CN": "磁县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "feixiang",
						"City_CN": "肥乡",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "yongnian",
						"City_CN": "永年",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qiuxian",
						"City_CN": "邱县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "jize",
						"City_CN": "鸡泽",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guangping",
						"City_CN": "广平",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "guantao",
						"City_CN": "馆陶",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "weixian",
						"City_CN": "魏县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "quzhou",
						"City_CN": "曲周",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "wuan",
						"City_CN": "武安",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "hanshan",
						"City_CN": "邯山",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "congtai",
						"City_CN": "丛台",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "fuxing",
						"City_CN": "复兴",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qinhuangdao",
						"City_CN": "秦皇岛",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "qinglong",
						"City_CN": "青龙",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "changli",
						"City_CN": "昌黎",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "funing",
						"City_CN": "抚宁",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "lulong",
						"City_CN": "卢龙",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "beidaihe",
						"City_CN": "北戴河",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "haigang",
						"City_CN": "海港",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "shanhaiguan",
						"City_CN": "山海关",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xionganxinqu",
						"City_CN": "雄安新区",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "rongcheng",
						"City_CN": "容城",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "anxin",
						"City_CN": "安新",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "xiongxian",
						"City_CN": "雄县",
						"Province_EN": "hebei",
						"Province_CN": "河北"
					},
					{
						"City_EN": "taiyuan",
						"City_CN": "太原",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "qingxu",
						"City_CN": "清徐",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yangqu",
						"City_CN": "阳曲",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "loufan",
						"City_CN": "娄烦",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "gujiao",
						"City_CN": "古交",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiancaopingqu",
						"City_CN": "尖草坪区",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiaodianqu",
						"City_CN": "小店区",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yingze",
						"City_CN": "迎泽",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xinghualing",
						"City_CN": "杏花岭",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wanbailin",
						"City_CN": "万柏林",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jinyuan",
						"City_CN": "晋源",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "datong",
						"City_CN": "大同",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yanggao",
						"City_CN": "阳高",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "datongxian",
						"City_CN": "大同县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "tianzhen",
						"City_CN": "天镇",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "guangling",
						"City_CN": "广灵",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lingqiu",
						"City_CN": "灵丘",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "hunyuan",
						"City_CN": "浑源",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "zuoyun",
						"City_CN": "左云",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "kuangqu",
						"City_CN": "矿区",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "nanjiao",
						"City_CN": "南郊",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xinrong",
						"City_CN": "新荣",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yangquan",
						"City_CN": "阳泉",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yuxian",
						"City_CN": "盂县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "pingding",
						"City_CN": "平定",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "kuangqu",
						"City_CN": "矿区",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiaoqu",
						"City_CN": "郊区",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jinzhong",
						"City_CN": "晋中",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yuci",
						"City_CN": "榆次",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yushe",
						"City_CN": "榆社",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "zuoquan",
						"City_CN": "左权",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "heshun",
						"City_CN": "和顺",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiyang",
						"City_CN": "昔阳",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "shouyang",
						"City_CN": "寿阳",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "taigu",
						"City_CN": "太谷",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "qixian",
						"City_CN": "祁县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "pingyao",
						"City_CN": "平遥",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lingshi",
						"City_CN": "灵石",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiexiu",
						"City_CN": "介休",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "changzhi",
						"City_CN": "长治",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "licheng",
						"City_CN": "黎城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "tunliu",
						"City_CN": "屯留",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lucheng",
						"City_CN": "潞城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiangyuan",
						"City_CN": "襄垣",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "pingshun",
						"City_CN": "平顺",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wuxiang",
						"City_CN": "武乡",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "qinxian",
						"City_CN": "沁县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "zhangzi",
						"City_CN": "长子",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "qinyuan",
						"City_CN": "沁源",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "huguan",
						"City_CN": "壶关",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiaoqu",
						"City_CN": "郊区",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jincheng",
						"City_CN": "晋城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "qinshui",
						"City_CN": "沁水",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yangcheng",
						"City_CN": "阳城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lingchuan",
						"City_CN": "陵川",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "gaoping",
						"City_CN": "高平",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "zezhou",
						"City_CN": "泽州",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "linfen",
						"City_CN": "临汾",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "quwo",
						"City_CN": "曲沃",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yonghe",
						"City_CN": "永和",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xixian",
						"City_CN": "隰县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "daning",
						"City_CN": "大宁",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jixian",
						"City_CN": "吉县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiangfen",
						"City_CN": "襄汾",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "puxian",
						"City_CN": "蒲县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "fenxi",
						"City_CN": "汾西",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "hongtong",
						"City_CN": "洪洞",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "huozhou",
						"City_CN": "霍州",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiangning",
						"City_CN": "乡宁",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yicheng",
						"City_CN": "翼城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "houma",
						"City_CN": "侯马",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "fushan",
						"City_CN": "浮山",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "anze",
						"City_CN": "安泽",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "guxian",
						"City_CN": "古县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yaodou",
						"City_CN": "尧都",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yuncheng",
						"City_CN": "运城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "linyi",
						"City_CN": "临猗",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jishan",
						"City_CN": "稷山",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wanrong",
						"City_CN": "万荣",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "hejin",
						"City_CN": "河津",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xinjiang",
						"City_CN": "新绛",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiangxian",
						"City_CN": "绛县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wenxi",
						"City_CN": "闻喜",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yuanqu",
						"City_CN": "垣曲",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yongji",
						"City_CN": "永济",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "ruicheng",
						"City_CN": "芮城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiaxian",
						"City_CN": "夏县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "pinglu",
						"City_CN": "平陆",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yanhu",
						"City_CN": "盐湖",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "shuozhou",
						"City_CN": "朔州",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "pinglu",
						"City_CN": "平鲁",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "shanyin",
						"City_CN": "山阴",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "youyu",
						"City_CN": "右玉",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yingxian",
						"City_CN": "应县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "huairen",
						"City_CN": "怀仁",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "shuocheng",
						"City_CN": "朔城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xinzhou",
						"City_CN": "忻州",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "dingxiang",
						"City_CN": "定襄",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wutaixian",
						"City_CN": "五台县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "hequ",
						"City_CN": "河曲",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "pianguan",
						"City_CN": "偏关",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "shenchi",
						"City_CN": "神池",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "ningwu",
						"City_CN": "宁武",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "daixian",
						"City_CN": "代县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "fanshi",
						"City_CN": "繁峙",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wutaishan",
						"City_CN": "五台山",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "bode",
						"City_CN": "保德",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jingle",
						"City_CN": "静乐",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "kelan",
						"City_CN": "岢岚",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wuzhai",
						"City_CN": "五寨",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "yuanping",
						"City_CN": "原平",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xinfu",
						"City_CN": "忻府",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lvliang",
						"City_CN": "吕梁",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lishi",
						"City_CN": "离石",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "linxian",
						"City_CN": "临县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xingxian",
						"City_CN": "兴县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "lanxian",
						"City_CN": "岚县",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "liulin",
						"City_CN": "柳林",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "shilou",
						"City_CN": "石楼",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "fangshan",
						"City_CN": "方山",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiaokou",
						"City_CN": "交口",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "zhongyang",
						"City_CN": "中阳",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xiaoyi",
						"City_CN": "孝义",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "fenyang",
						"City_CN": "汾阳",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "wenshui",
						"City_CN": "文水",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "jiaocheng",
						"City_CN": "交城",
						"Province_EN": "shanxi",
						"Province_CN": "山西"
					},
					{
						"City_EN": "xian",
						"City_CN": "西安",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "changan",
						"City_CN": "长安",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "lintong",
						"City_CN": "临潼",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "lantian",
						"City_CN": "蓝田",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zhouzhi",
						"City_CN": "周至",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "huyi",
						"City_CN": "鄠邑",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "gaoling",
						"City_CN": "高陵",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "xincheng",
						"City_CN": "新城",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "beilin",
						"City_CN": "碑林",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "lianhu",
						"City_CN": "莲湖",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "baqiao",
						"City_CN": "灞桥",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "weiyang",
						"City_CN": "未央",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yanta",
						"City_CN": "雁塔",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yanliang",
						"City_CN": "阎良",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "xianyang",
						"City_CN": "咸阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "sanyuan",
						"City_CN": "三原",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "liquan",
						"City_CN": "礼泉",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yongshou",
						"City_CN": "永寿",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "chunhua",
						"City_CN": "淳化",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "jingyang",
						"City_CN": "泾阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "wugong",
						"City_CN": "武功",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "qianxian",
						"City_CN": "乾县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "binxian",
						"City_CN": "彬县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "changwu",
						"City_CN": "长武",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "xunyi",
						"City_CN": "旬邑",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "xingping",
						"City_CN": "兴平",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "qindou",
						"City_CN": "秦都",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "weicheng",
						"City_CN": "渭城",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yanan",
						"City_CN": "延安",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yanchang",
						"City_CN": "延长",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yanchuan",
						"City_CN": "延川",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zichang",
						"City_CN": "子长",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yichuan",
						"City_CN": "宜川",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fuxian",
						"City_CN": "富县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zhidan",
						"City_CN": "志丹",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "ansai",
						"City_CN": "安塞",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "ganquan",
						"City_CN": "甘泉",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "luochuan",
						"City_CN": "洛川",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "huangling",
						"City_CN": "黄陵",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "huanglong",
						"City_CN": "黄龙",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "wuqi",
						"City_CN": "吴起",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "baota",
						"City_CN": "宝塔",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yulin",
						"City_CN": "榆林",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fugu",
						"City_CN": "府谷",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "shenmu",
						"City_CN": "神木",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "jiaxian",
						"City_CN": "佳县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "dingbian",
						"City_CN": "定边",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "jingbian",
						"City_CN": "靖边",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "hengshan",
						"City_CN": "横山",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "mizhi",
						"City_CN": "米脂",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zizhou",
						"City_CN": "子洲",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "suide",
						"City_CN": "绥德",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "wubu",
						"City_CN": "吴堡",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "qingjian",
						"City_CN": "清涧",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yuyang",
						"City_CN": "榆阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "weinan",
						"City_CN": "渭南",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "tongguan",
						"City_CN": "潼关",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "dali",
						"City_CN": "大荔",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "baishui",
						"City_CN": "白水",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fuping",
						"City_CN": "富平",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "pucheng",
						"City_CN": "蒲城",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "chengcheng",
						"City_CN": "澄城",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "heyang",
						"City_CN": "合阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "hancheng",
						"City_CN": "韩城",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "huayin",
						"City_CN": "华阴",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "linwei",
						"City_CN": "临渭",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "huazhou",
						"City_CN": "华州",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "shangluo",
						"City_CN": "商洛",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "luonan",
						"City_CN": "洛南",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zhashui",
						"City_CN": "柞水",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "shangzhou",
						"City_CN": "商州",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zhenan",
						"City_CN": "镇安",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "danfeng",
						"City_CN": "丹凤",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "shangnan",
						"City_CN": "商南",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "shanyang",
						"City_CN": "山阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "ankang",
						"City_CN": "安康",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "ziyang",
						"City_CN": "紫阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "shiquan",
						"City_CN": "石泉",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "hanyin",
						"City_CN": "汉阴",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "xunyang",
						"City_CN": "旬阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "langao",
						"City_CN": "岚皋",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "pingli",
						"City_CN": "平利",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "baihe",
						"City_CN": "白河",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zhenping",
						"City_CN": "镇坪",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "ningshan",
						"City_CN": "宁陕",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "hanbin",
						"City_CN": "汉滨",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "hanzhong",
						"City_CN": "汉中",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "lueyang",
						"City_CN": "略阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "mianxian",
						"City_CN": "勉县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "liuba",
						"City_CN": "留坝",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yangxian",
						"City_CN": "洋县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "chenggu",
						"City_CN": "城固",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "xixiang",
						"City_CN": "西乡",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fuoping",
						"City_CN": "佛坪",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "ningqiang",
						"City_CN": "宁强",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "nanzheng",
						"City_CN": "南郑",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "zhenba",
						"City_CN": "镇巴",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "hantai",
						"City_CN": "汉台",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "baoji",
						"City_CN": "宝鸡",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "weibin",
						"City_CN": "渭滨",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "qianyang",
						"City_CN": "千阳",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "linyou",
						"City_CN": "麟游",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "qishan",
						"City_CN": "岐山",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fengxiang",
						"City_CN": "凤翔",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fufeng",
						"City_CN": "扶风",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "meixian",
						"City_CN": "眉县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "taibai",
						"City_CN": "太白",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "fengxian",
						"City_CN": "凤县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "longxian",
						"City_CN": "陇县",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "chencang",
						"City_CN": "陈仓",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "jintai",
						"City_CN": "金台",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "tongchuan",
						"City_CN": "铜川",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yijun",
						"City_CN": "宜君",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yaozhou",
						"City_CN": "耀州",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "wangyi",
						"City_CN": "王益",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yintai",
						"City_CN": "印台",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yangling",
						"City_CN": "杨凌",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "yangling",
						"City_CN": "杨陵",
						"Province_EN": "shaanxi",
						"Province_CN": "陕西"
					},
					{
						"City_EN": "jinan",
						"City_CN": "济南",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "changqing",
						"City_CN": "长清",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shanghe",
						"City_CN": "商河",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhangqiu",
						"City_CN": "章丘",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "pingyin",
						"City_CN": "平阴",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "jiyang",
						"City_CN": "济阳",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lixia",
						"City_CN": "历下",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shizhong",
						"City_CN": "市中",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "huaiyin",
						"City_CN": "槐荫",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "tianqiao",
						"City_CN": "天桥",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "licheng",
						"City_CN": "历城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "qingdao",
						"City_CN": "青岛",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laoshan",
						"City_CN": "崂山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shinan",
						"City_CN": "市南",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "jimo",
						"City_CN": "即墨",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "jiaozhou",
						"City_CN": "胶州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "huangdao",
						"City_CN": "黄岛",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laixi",
						"City_CN": "莱西",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "pingdu",
						"City_CN": "平度",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shibei",
						"City_CN": "市北",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "licang",
						"City_CN": "李沧",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "chengyang",
						"City_CN": "城阳",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zibo",
						"City_CN": "淄博",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zichuan",
						"City_CN": "淄川",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "boshan",
						"City_CN": "博山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "gaoqing",
						"City_CN": "高青",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhoucun",
						"City_CN": "周村",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yiyuan",
						"City_CN": "沂源",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "huantai",
						"City_CN": "桓台",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "linzi",
						"City_CN": "临淄",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhangdian",
						"City_CN": "张店",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "dezhou",
						"City_CN": "德州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "wucheng",
						"City_CN": "武城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "linyi",
						"City_CN": "临邑",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lingxian",
						"City_CN": "陵县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "qihe",
						"City_CN": "齐河",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "leling",
						"City_CN": "乐陵",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "qingyun",
						"City_CN": "庆云",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "pingyuan",
						"City_CN": "平原",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "ningjin",
						"City_CN": "宁津",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "xiajin",
						"City_CN": "夏津",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yucheng",
						"City_CN": "禹城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "decheng",
						"City_CN": "德城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lingcheng",
						"City_CN": "陵城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yantai",
						"City_CN": "烟台",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laizhou",
						"City_CN": "莱州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "changdao",
						"City_CN": "长岛",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "penglai",
						"City_CN": "蓬莱",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "longkou",
						"City_CN": "龙口",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhaoyuan",
						"City_CN": "招远",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "qixia",
						"City_CN": "栖霞",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "fushan",
						"City_CN": "福山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "moup",
						"City_CN": "牟平",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laiyang",
						"City_CN": "莱阳",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "haiyang",
						"City_CN": "海阳",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhifu",
						"City_CN": "芝罘",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laishan",
						"City_CN": "莱山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "weifang",
						"City_CN": "潍坊",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "qingzhou",
						"City_CN": "青州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shouguang",
						"City_CN": "寿光",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "linqu",
						"City_CN": "临朐",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "changle",
						"City_CN": "昌乐",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "changyi",
						"City_CN": "昌邑",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "anqiu",
						"City_CN": "安丘",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "gaomi",
						"City_CN": "高密",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhucheng",
						"City_CN": "诸城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "weicheng",
						"City_CN": "潍城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "hanting",
						"City_CN": "寒亭",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "fangzi",
						"City_CN": "坊子",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "kuiwen",
						"City_CN": "奎文",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "jining",
						"City_CN": "济宁",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "jiaxiang",
						"City_CN": "嘉祥",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "weishan",
						"City_CN": "微山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yutai",
						"City_CN": "鱼台",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yanzhou",
						"City_CN": "兖州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "jinxiang",
						"City_CN": "金乡",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "wenshang",
						"City_CN": "汶上",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "sishui",
						"City_CN": "泗水",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "liangshan",
						"City_CN": "梁山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "qufu",
						"City_CN": "曲阜",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zoucheng",
						"City_CN": "邹城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "rencheng",
						"City_CN": "任城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "taian",
						"City_CN": "泰安",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "xintai",
						"City_CN": "新泰",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "taishan",
						"City_CN": "泰山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "feicheng",
						"City_CN": "肥城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "dongping",
						"City_CN": "东平",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "ningyang",
						"City_CN": "宁阳",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "daiyue",
						"City_CN": "岱岳",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "linyi",
						"City_CN": "临沂",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "junan",
						"City_CN": "莒南",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yinan",
						"City_CN": "沂南",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lanling",
						"City_CN": "兰陵",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "linshu",
						"City_CN": "临沭",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "tancheng",
						"City_CN": "郯城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "mengyin",
						"City_CN": "蒙阴",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "pingyi",
						"City_CN": "平邑",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "feixian",
						"City_CN": "费县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yishui",
						"City_CN": "沂水",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lanshan",
						"City_CN": "兰山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "luozhuang",
						"City_CN": "罗庄",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "hedong",
						"City_CN": "河东",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "heze",
						"City_CN": "菏泽",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "juancheng",
						"City_CN": "鄄城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yuncheng",
						"City_CN": "郓城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "dongming",
						"City_CN": "东明",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "dingtao",
						"City_CN": "定陶",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "juye",
						"City_CN": "巨野",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "caoxian",
						"City_CN": "曹县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "chengwu",
						"City_CN": "成武",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shanxian",
						"City_CN": "单县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "mudan",
						"City_CN": "牡丹",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "binzhou",
						"City_CN": "滨州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "boxing",
						"City_CN": "博兴",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "wudi",
						"City_CN": "无棣",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yangxin",
						"City_CN": "阳信",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "huimin",
						"City_CN": "惠民",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zhanhua",
						"City_CN": "沾化",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zouping",
						"City_CN": "邹平",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "bincheng",
						"City_CN": "滨城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "dongying",
						"City_CN": "东营",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "hekou",
						"City_CN": "河口",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "kenli",
						"City_CN": "垦利",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lijin",
						"City_CN": "利津",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "guangrao",
						"City_CN": "广饶",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "weihai",
						"City_CN": "威海",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "wendeng",
						"City_CN": "文登",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "rongcheng",
						"City_CN": "荣成",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "rushan",
						"City_CN": "乳山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "chengshantou",
						"City_CN": "成山头",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shidao",
						"City_CN": "石岛",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "huancui",
						"City_CN": "环翠",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "zaozhuang",
						"City_CN": "枣庄",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "xuecheng",
						"City_CN": "薛城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yicheng",
						"City_CN": "峄城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "taierzhuang",
						"City_CN": "台儿庄",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "tengzhou",
						"City_CN": "滕州",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shizhong",
						"City_CN": "市中",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shanting",
						"City_CN": "山亭",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "rizhao",
						"City_CN": "日照",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "wulian",
						"City_CN": "五莲",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "juxian",
						"City_CN": "莒县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "donggang",
						"City_CN": "东港",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "lanshan",
						"City_CN": "岚山",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laiwu",
						"City_CN": "莱芜",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "laicheng",
						"City_CN": "莱城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "gangcheng",
						"City_CN": "钢城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "liaocheng",
						"City_CN": "聊城",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "guanxian",
						"City_CN": "冠县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "yanggu",
						"City_CN": "阳谷",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "gaotang",
						"City_CN": "高唐",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "chiping",
						"City_CN": "茌平",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "donge",
						"City_CN": "东阿",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "linqing",
						"City_CN": "临清",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "dongchangfu",
						"City_CN": "东昌府",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "shenxian",
						"City_CN": "莘县",
						"Province_EN": "shandong",
						"Province_CN": "山东"
					},
					{
						"City_EN": "wulumuqi",
						"City_CN": "乌鲁木齐",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tianshan",
						"City_CN": "天山",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "xiaoquzi",
						"City_CN": "小渠子",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shayibake",
						"City_CN": "沙依巴克",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "dabancheng",
						"City_CN": "达坂城",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "xinshi",
						"City_CN": "新市",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shuimogou",
						"City_CN": "水磨沟",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tianchi",
						"City_CN": "天池",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "toutunhe",
						"City_CN": "头屯河",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "midong",
						"City_CN": "米东",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wulumuqixian",
						"City_CN": "乌鲁木齐县",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "xibaiyanggou",
						"City_CN": "西白杨沟",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kelamayi",
						"City_CN": "克拉玛依",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wuerhe",
						"City_CN": "乌尔禾",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "baijiantan",
						"City_CN": "白碱滩",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "dushanzi",
						"City_CN": "独山子",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shihezi",
						"City_CN": "石河子",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "paotai",
						"City_CN": "炮台",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "mosuowan",
						"City_CN": "莫索湾",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "changji",
						"City_CN": "昌吉",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "hutubi",
						"City_CN": "呼图壁",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "fukang",
						"City_CN": "阜康",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "jimusaer",
						"City_CN": "吉木萨尔",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "qitai",
						"City_CN": "奇台",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "manasi",
						"City_CN": "玛纳斯",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "mulei",
						"City_CN": "木垒",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "caijiahu",
						"City_CN": "蔡家湖",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tulufan",
						"City_CN": "吐鲁番",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tuokexun",
						"City_CN": "托克逊",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "gaochang",
						"City_CN": "高昌",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shanshan",
						"City_CN": "鄯善",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kuerle",
						"City_CN": "库尔勒",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "luntai",
						"City_CN": "轮台",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yuli",
						"City_CN": "尉犁",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "ruoqiang",
						"City_CN": "若羌",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "qiemo",
						"City_CN": "且末",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "hejing",
						"City_CN": "和静",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yanqi",
						"City_CN": "焉耆",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shuo",
						"City_CN": "和硕",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "bayinguoleng",
						"City_CN": "巴音郭楞",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "bayinbuluke",
						"City_CN": "巴音布鲁克",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tieganlike",
						"City_CN": "铁干里克",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "bohu",
						"City_CN": "博湖",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tazhong",
						"City_CN": "塔中",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "baluntai",
						"City_CN": "巴仑台",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "alaer",
						"City_CN": "阿拉尔",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "akesu",
						"City_CN": "阿克苏",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wushi",
						"City_CN": "乌什",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wensu",
						"City_CN": "温宿",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "baicheng",
						"City_CN": "拜城",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "xinhe",
						"City_CN": "新和",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shaya",
						"City_CN": "沙雅",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kuche",
						"City_CN": "库车",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "keping",
						"City_CN": "柯坪",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "awati",
						"City_CN": "阿瓦提",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kashi",
						"City_CN": "喀什",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yingjisha",
						"City_CN": "英吉沙",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tashikuergan",
						"City_CN": "塔什库尔干",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "maigaiti",
						"City_CN": "麦盖提",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shache",
						"City_CN": "莎车",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yecheng",
						"City_CN": "叶城",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "zepu",
						"City_CN": "泽普",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "bachu",
						"City_CN": "巴楚",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yuepuhu",
						"City_CN": "岳普湖",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "jiashi",
						"City_CN": "伽师",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shufu",
						"City_CN": "疏附",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shule",
						"City_CN": "疏勒",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yining",
						"City_CN": "伊宁",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "chabuchaer",
						"City_CN": "察布查尔",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "nileke",
						"City_CN": "尼勒克",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yiningxian",
						"City_CN": "伊宁县",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "gongliu",
						"City_CN": "巩留",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "xinyuan",
						"City_CN": "新源",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "zhaosu",
						"City_CN": "昭苏",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tekesi",
						"City_CN": "特克斯",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "huocheng",
						"City_CN": "霍城",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "huoerguosi",
						"City_CN": "霍尔果斯",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kuitunshi",
						"City_CN": "奎屯",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yili",
						"City_CN": "伊犁",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tacheng",
						"City_CN": "塔城",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yumin",
						"City_CN": "裕民",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "emin",
						"City_CN": "额敏",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "hebukesaier",
						"City_CN": "和布克赛尔",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tuoli",
						"City_CN": "托里",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wusu",
						"City_CN": "乌苏",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shawan",
						"City_CN": "沙湾",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "hami",
						"City_CN": "哈密",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yizhou",
						"City_CN": "伊州",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "balikun",
						"City_CN": "巴里坤",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yiwu",
						"City_CN": "伊吾",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "hetian",
						"City_CN": "和田",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "pishan",
						"City_CN": "皮山",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "cele",
						"City_CN": "策勒",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "moyu",
						"City_CN": "墨玉",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "luopu",
						"City_CN": "洛浦",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "minfeng",
						"City_CN": "民丰",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "yutian",
						"City_CN": "于田",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "aletai",
						"City_CN": "阿勒泰",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "habahe",
						"City_CN": "哈巴河",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "jimunai",
						"City_CN": "吉木乃",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "buerjin",
						"City_CN": "布尔津",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "fuhai",
						"City_CN": "福海",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "fuyun",
						"City_CN": "富蕴",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "qinghe",
						"City_CN": "青河",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "atushi",
						"City_CN": "阿图什",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wuqia",
						"City_CN": "乌恰",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "aketao",
						"City_CN": "阿克陶",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "aheqi",
						"City_CN": "阿合奇",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kezhou",
						"City_CN": "克州",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "bole",
						"City_CN": "博乐",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wenquan",
						"City_CN": "温泉",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "jinghe",
						"City_CN": "精河",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "boertala",
						"City_CN": "博尔塔拉",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "alashankou",
						"City_CN": "阿拉山口",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tumushuke",
						"City_CN": "图木舒克",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "wujiaqu",
						"City_CN": "五家渠",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "tiemenguan",
						"City_CN": "铁门关",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kunyu",
						"City_CN": "昆玉",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "beitun",
						"City_CN": "北屯",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "shuanghe",
						"City_CN": "双河",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "kekedala",
						"City_CN": "可克达拉",
						"Province_EN": "xinjiang",
						"Province_CN": "新疆"
					},
					{
						"City_EN": "lasa",
						"City_CN": "拉萨",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "dangxiong",
						"City_CN": "当雄",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "nimu",
						"City_CN": "尼木",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "linzhou",
						"City_CN": "林周",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "duilongdeqing",
						"City_CN": "堆龙德庆",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "qushui",
						"City_CN": "曲水",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "dazi",
						"City_CN": "达孜",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "mozhugongka",
						"City_CN": "墨竹工卡",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "chengguan",
						"City_CN": "城关",
						"Province_EN": "xicang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "rikaze",
						"City_CN": "日喀则",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "lazi",
						"City_CN": "拉孜",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "nanmulin",
						"City_CN": "南木林",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "nielamu",
						"City_CN": "聂拉木",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "anri",
						"City_CN": "定日",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "jiangzi",
						"City_CN": "江孜",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "pali",
						"City_CN": "帕里",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "zhongba",
						"City_CN": "仲巴",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "saga",
						"City_CN": "萨嘎",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "jilong",
						"City_CN": "吉隆",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "angren",
						"City_CN": "昂仁",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "dingjie",
						"City_CN": "定结",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "sajia",
						"City_CN": "萨迦",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "xietongmen",
						"City_CN": "谢通门",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "sangzhuzi",
						"City_CN": "桑珠孜",
						"Province_EN": "xicang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "gangba",
						"City_CN": "岗巴",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "bailang",
						"City_CN": "白朗",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "yadong",
						"City_CN": "亚东",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "kangma",
						"City_CN": "康马",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "renbu",
						"City_CN": "仁布",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "shannan",
						"City_CN": "山南",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "gongga",
						"City_CN": "贡嘎",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "zhanang",
						"City_CN": "扎囊",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "jiacha",
						"City_CN": "加查",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "langkazi",
						"City_CN": "浪卡子",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "cuona",
						"City_CN": "错那",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "longzi",
						"City_CN": "隆子",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "zedang",
						"City_CN": "泽当",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "naidong",
						"City_CN": "乃东",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "sangri",
						"City_CN": "桑日",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "luozha",
						"City_CN": "洛扎",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "cuomei",
						"City_CN": "措美",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "qiongjie",
						"City_CN": "琼结",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "qusong",
						"City_CN": "曲松",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "linzhi",
						"City_CN": "林芝",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "bomi",
						"City_CN": "波密",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "milin",
						"City_CN": "米林",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "chayu",
						"City_CN": "察隅",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "gongbujiangda",
						"City_CN": "工布江达",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "langxian",
						"City_CN": "朗县",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "motuo",
						"City_CN": "墨脱",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "bayi",
						"City_CN": "巴宜",
						"Province_EN": "xicang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "changdu",
						"City_CN": "昌都",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "dingqing",
						"City_CN": "丁青",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "bianba",
						"City_CN": "边坝",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "luolong",
						"City_CN": "洛隆",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "zuogong",
						"City_CN": "左贡",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "mangkang",
						"City_CN": "芒康",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "leiwuqi",
						"City_CN": "类乌齐",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "basu",
						"City_CN": "八宿",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "jiangda",
						"City_CN": "江达",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "chaya",
						"City_CN": "察雅",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "gongjue",
						"City_CN": "贡觉",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "karuo",
						"City_CN": "卡若",
						"Province_EN": "xicang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "naqu",
						"City_CN": "那曲",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "nima",
						"City_CN": "尼玛",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "jiali",
						"City_CN": "嘉黎",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "bange",
						"City_CN": "班戈",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "anduo",
						"City_CN": "安多",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "suoxian",
						"City_CN": "索县",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "nierong",
						"City_CN": "聂荣",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "baqing",
						"City_CN": "巴青",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "biru",
						"City_CN": "比如",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "shuanghu",
						"City_CN": "双湖",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "shenza",
						"City_CN": "申扎",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "seni",
						"City_CN": "色尼",
						"Province_EN": "xicang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "ali",
						"City_CN": "阿里",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "gaize",
						"City_CN": "改则",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "shiquanhe",
						"City_CN": "狮泉河",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "pulan",
						"City_CN": "普兰",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "zhada",
						"City_CN": "札达",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "gaer",
						"City_CN": "噶尔",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "ritu",
						"City_CN": "日土",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "geji",
						"City_CN": "革吉",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "cuoqin",
						"City_CN": "措勤",
						"Province_EN": "xizang",
						"Province_CN": "西藏"
					},
					{
						"City_EN": "xining",
						"City_CN": "西宁",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "datong",
						"City_CN": "大通",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "huangyuan",
						"City_CN": "湟源",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "huangzhong",
						"City_CN": "湟中",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "chengdong",
						"City_CN": "城东",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "chengzhong",
						"City_CN": "城中",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "chengxi",
						"City_CN": "城西",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "chengbei",
						"City_CN": "城北",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "pingan",
						"City_CN": "平安",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "ledu",
						"City_CN": "乐都",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "minhe",
						"City_CN": "民和",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "huzhu",
						"City_CN": "互助",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "hualong",
						"City_CN": "化隆",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "xunhua",
						"City_CN": "循化",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "haidong",
						"City_CN": "海东",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "tongren",
						"City_CN": "同仁",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "jianzha",
						"City_CN": "尖扎",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "zeku",
						"City_CN": "泽库",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "henan",
						"City_CN": "河南",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "huangnan",
						"City_CN": "黄南",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "gonghe",
						"City_CN": "共和",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "hainan",
						"City_CN": "海南",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "guide",
						"City_CN": "贵德",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "xinghai",
						"City_CN": "兴海",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "guinan",
						"City_CN": "贵南",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "tongde",
						"City_CN": "同德",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "maqin",
						"City_CN": "玛沁",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "banma",
						"City_CN": "班玛",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "gande",
						"City_CN": "甘德",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "dari",
						"City_CN": "达日",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "jiuzhi",
						"City_CN": "久治",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "madu",
						"City_CN": "玛多",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "guoluo",
						"City_CN": "果洛",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "yushu",
						"City_CN": "玉树",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "chenduo",
						"City_CN": "称多",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "zhiduo",
						"City_CN": "治多",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "zaduo",
						"City_CN": "杂多",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "nangqian",
						"City_CN": "囊谦",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "qumacai",
						"City_CN": "曲麻莱",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "delingha",
						"City_CN": "德令哈",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "haixi",
						"City_CN": "海西",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "tianjun",
						"City_CN": "天峻",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "wulan",
						"City_CN": "乌兰",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "mangai",
						"City_CN": "茫崖",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "dachaidan",
						"City_CN": "大柴旦",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "geermu",
						"City_CN": "格尔木",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "dulan",
						"City_CN": "都兰",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "lenghu",
						"City_CN": "冷湖",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "haiyan",
						"City_CN": "海晏",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "menyuan",
						"City_CN": "门源",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "qilian",
						"City_CN": "祁连",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "haibei",
						"City_CN": "海北",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "gangcha",
						"City_CN": "刚察",
						"Province_EN": "qinghai",
						"Province_CN": "青海"
					},
					{
						"City_EN": "lanzhou",
						"City_CN": "兰州",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "gaolan",
						"City_CN": "皋兰",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "yongdeng",
						"City_CN": "永登",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "yuzhong",
						"City_CN": "榆中",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "chengguan",
						"City_CN": "城关",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "qilihe",
						"City_CN": "七里河",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "xigu",
						"City_CN": "西固",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "anning",
						"City_CN": "安宁",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "honggu",
						"City_CN": "红古",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "dingxi",
						"City_CN": "定西",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "tongwei",
						"City_CN": "通渭",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "longxi",
						"City_CN": "陇西",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "weiyuan",
						"City_CN": "渭源",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "lintao",
						"City_CN": "临洮",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhangxian",
						"City_CN": "漳县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "minxian",
						"City_CN": "岷县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "anding",
						"City_CN": "安定",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "pingliang",
						"City_CN": "平凉",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jingchuan",
						"City_CN": "泾川",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "lingtai",
						"City_CN": "灵台",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "chongxin",
						"City_CN": "崇信",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "huating",
						"City_CN": "华亭",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhuanglang",
						"City_CN": "庄浪",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jingning",
						"City_CN": "静宁",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "kongtong",
						"City_CN": "崆峒",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "qingyang",
						"City_CN": "庆阳",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "xifeng",
						"City_CN": "西峰",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "huanxian",
						"City_CN": "环县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "huachi",
						"City_CN": "华池",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "heshui",
						"City_CN": "合水",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhengning",
						"City_CN": "正宁",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "ningxian",
						"City_CN": "宁县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhenyuan",
						"City_CN": "镇原",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "qingcheng",
						"City_CN": "庆城",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "wuwei",
						"City_CN": "武威",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "minqin",
						"City_CN": "民勤",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "gulang",
						"City_CN": "古浪",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "liangzhou",
						"City_CN": "凉州",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "tianzhu",
						"City_CN": "天祝",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jinchang",
						"City_CN": "金昌",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "yongchang",
						"City_CN": "永昌",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jinchuan",
						"City_CN": "金川",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhangye",
						"City_CN": "张掖",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "sunan",
						"City_CN": "肃南",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "minle",
						"City_CN": "民乐",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "linze",
						"City_CN": "临泽",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "gaotai",
						"City_CN": "高台",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "shandan",
						"City_CN": "山丹",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "ganzhou",
						"City_CN": "甘州",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jiuquan",
						"City_CN": "酒泉",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "suzhou",
						"City_CN": "肃州",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jinta",
						"City_CN": "金塔",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "akesai",
						"City_CN": "阿克塞",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "guazhou",
						"City_CN": "瓜州",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "subei",
						"City_CN": "肃北",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "yumen",
						"City_CN": "玉门",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "dunhuang",
						"City_CN": "敦煌",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "tianshui",
						"City_CN": "天水",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "qinzhou",
						"City_CN": "秦州",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "qingshui",
						"City_CN": "清水",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "qinan",
						"City_CN": "秦安",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "gangu",
						"City_CN": "甘谷",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "wushan",
						"City_CN": "武山",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhangjiachuan",
						"City_CN": "张家川",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "maiji",
						"City_CN": "麦积",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "wudu",
						"City_CN": "武都",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "chengxian",
						"City_CN": "成县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "wenxian",
						"City_CN": "文县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "dangchang",
						"City_CN": "宕昌",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "kangxian",
						"City_CN": "康县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "xihe",
						"City_CN": "西和",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "lixian",
						"City_CN": "礼县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "huixian",
						"City_CN": "徽县",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "liangdang",
						"City_CN": "两当",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "longnan",
						"City_CN": "陇南",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "linxia",
						"City_CN": "临夏",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "kangle",
						"City_CN": "康乐",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "yongjing",
						"City_CN": "永靖",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "guanghe",
						"City_CN": "广河",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "hezheng",
						"City_CN": "和政",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "dongxiang",
						"City_CN": "东乡",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jishishan",
						"City_CN": "积石山",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "hezuo",
						"City_CN": "合作",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "lintan",
						"City_CN": "临潭",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhuoni",
						"City_CN": "卓尼",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "zhouqu",
						"City_CN": "舟曲",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "diebu",
						"City_CN": "迭部",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "maqu",
						"City_CN": "玛曲",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "luqu",
						"City_CN": "碌曲",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "xiahe",
						"City_CN": "夏河",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "gannan",
						"City_CN": "甘南",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "baiyin",
						"City_CN": "白银",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jingyuan",
						"City_CN": "靖远",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "huining",
						"City_CN": "会宁",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "pingchuan",
						"City_CN": "平川",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jingtai",
						"City_CN": "景泰",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "jiayuguan",
						"City_CN": "嘉峪关",
						"Province_EN": "gansu",
						"Province_CN": "甘肃"
					},
					{
						"City_EN": "yinchuan",
						"City_CN": "银川",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "yongning",
						"City_CN": "永宁",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "lingwu",
						"City_CN": "灵武",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "helan",
						"City_CN": "贺兰",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "xingqing",
						"City_CN": "兴庆",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "xixia",
						"City_CN": "西夏",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "jinfeng",
						"City_CN": "金凤",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "shizuishan",
						"City_CN": "石嘴山",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "huinong",
						"City_CN": "惠农",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "pingluo",
						"City_CN": "平罗",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "taole",
						"City_CN": "陶乐",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "dawukou",
						"City_CN": "大武口",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "wuzhong",
						"City_CN": "吴忠",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "tongxin",
						"City_CN": "同心",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "yanchi",
						"City_CN": "盐池",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "litong",
						"City_CN": "利通",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "hongsibao",
						"City_CN": "红寺堡",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "qingtongxia",
						"City_CN": "青铜峡",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "guyuan",
						"City_CN": "固原",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "xiji",
						"City_CN": "西吉",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "longde",
						"City_CN": "隆德",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "jinyuan",
						"City_CN": "泾源",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "yuanzhou",
						"City_CN": "原州",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "pengyang",
						"City_CN": "彭阳",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "zhongwei",
						"City_CN": "中卫",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "zhongning",
						"City_CN": "中宁",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "shapotou",
						"City_CN": "沙坡头",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "haiyuan",
						"City_CN": "海原",
						"Province_EN": "ningxia",
						"Province_CN": "宁夏"
					},
					{
						"City_EN": "zhengzhou",
						"City_CN": "郑州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "gongyi",
						"City_CN": "巩义",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xingyang",
						"City_CN": "荥阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "dengfeng",
						"City_CN": "登封",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinmi",
						"City_CN": "新密",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinzheng",
						"City_CN": "新郑",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhongmou",
						"City_CN": "中牟",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shangjie",
						"City_CN": "上街",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhongyuan",
						"City_CN": "中原",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "erqi",
						"City_CN": "二七",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "guancheng",
						"City_CN": "管城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jinshui",
						"City_CN": "金水",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huiji",
						"City_CN": "惠济",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "anyang",
						"City_CN": "安阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "tangyin",
						"City_CN": "汤阴",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huaxian",
						"City_CN": "滑县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "neihuang",
						"City_CN": "内黄",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "linzhou",
						"City_CN": "林州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wenfeng",
						"City_CN": "文峰",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "beiguan",
						"City_CN": "北关",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yindou",
						"City_CN": "殷都",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "longan",
						"City_CN": "龙安",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinxiang",
						"City_CN": "新乡",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huojia",
						"City_CN": "获嘉",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yuanyang",
						"City_CN": "原阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huixian",
						"City_CN": "辉县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "weihui",
						"City_CN": "卫辉",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yanjin",
						"City_CN": "延津",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "fengqiu",
						"City_CN": "封丘",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "changyuan",
						"City_CN": "长垣",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "hongqi",
						"City_CN": "红旗",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "weibin",
						"City_CN": "卫滨",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "fengquan",
						"City_CN": "凤泉",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "muye",
						"City_CN": "牧野",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xuchang",
						"City_CN": "许昌",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yanling",
						"City_CN": "鄢陵",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xiangcheng",
						"City_CN": "襄城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "changge",
						"City_CN": "长葛",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yuzhou",
						"City_CN": "禹州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "weidou",
						"City_CN": "魏都",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jianan",
						"City_CN": "建安",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "pingdingshan",
						"City_CN": "平顶山",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jiaxian",
						"City_CN": "郏县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "baofeng",
						"City_CN": "宝丰",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "ruzhou",
						"City_CN": "汝州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yexian",
						"City_CN": "叶县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wugang",
						"City_CN": "舞钢",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "lushan",
						"City_CN": "鲁山",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shilong",
						"City_CN": "石龙",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinhua",
						"City_CN": "新华",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "weidong",
						"City_CN": "卫东",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhanhe",
						"City_CN": "湛河",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinyang",
						"City_CN": "信阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xixian",
						"City_CN": "息县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luoshan",
						"City_CN": "罗山",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "guangshan",
						"City_CN": "光山",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinxian",
						"City_CN": "新县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huaibin",
						"City_CN": "淮滨",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huangchuan",
						"City_CN": "潢川",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "gushi",
						"City_CN": "固始",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shangcheng",
						"City_CN": "商城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shihe",
						"City_CN": "浉河",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "pingqiao",
						"City_CN": "平桥",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "nanyang",
						"City_CN": "南阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "nanzhao",
						"City_CN": "南召",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "fangcheng",
						"City_CN": "方城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "sheqi",
						"City_CN": "社旗",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xixia",
						"City_CN": "西峡",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "neixiang",
						"City_CN": "内乡",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhenping",
						"City_CN": "镇平",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xichuan",
						"City_CN": "淅川",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinye",
						"City_CN": "新野",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "tanghe",
						"City_CN": "唐河",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "dengzhou",
						"City_CN": "邓州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "tongbai",
						"City_CN": "桐柏",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wancheng",
						"City_CN": "宛城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wolong",
						"City_CN": "卧龙",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "kaifeng",
						"City_CN": "开封",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "qixian",
						"City_CN": "杞县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "weishi",
						"City_CN": "尉氏",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "tongxu",
						"City_CN": "通许",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "lankao",
						"City_CN": "兰考",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "longting",
						"City_CN": "龙亭",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shunhe",
						"City_CN": "顺河",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "gulou",
						"City_CN": "鼓楼",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yuwangtai",
						"City_CN": "禹王台",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xiangfu",
						"City_CN": "祥符",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luoyang",
						"City_CN": "洛阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xinan",
						"City_CN": "新安",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "mengjin",
						"City_CN": "孟津",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yiyang",
						"City_CN": "宜阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luoning",
						"City_CN": "洛宁",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yichuan",
						"City_CN": "伊川",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "songxian",
						"City_CN": "嵩县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yanshi",
						"City_CN": "偃师",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luanchuan",
						"City_CN": "栾川",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "ruyang",
						"City_CN": "汝阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jili",
						"City_CN": "吉利",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "laocheng",
						"City_CN": "老城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xigong",
						"City_CN": "西工",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "chanhe",
						"City_CN": "瀍河",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jianxi",
						"City_CN": "涧西",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luolong",
						"City_CN": "洛龙",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shangqiu",
						"City_CN": "商丘",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "liangyuan",
						"City_CN": "梁园",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "suixian",
						"City_CN": "睢县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "minquan",
						"City_CN": "民权",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yucheng",
						"City_CN": "虞城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhecheng",
						"City_CN": "柘城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "ningling",
						"City_CN": "宁陵",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xiayi",
						"City_CN": "夏邑",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yongcheng",
						"City_CN": "永城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "suiyang",
						"City_CN": "睢阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jiaozuo",
						"City_CN": "焦作",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xiuwu",
						"City_CN": "修武",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wuzhi",
						"City_CN": "武陟",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "qinyang",
						"City_CN": "沁阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jiefang",
						"City_CN": "解放",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "boai",
						"City_CN": "博爱",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wenxian",
						"City_CN": "温县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "mengzhou",
						"City_CN": "孟州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhongzhan",
						"City_CN": "中站",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "macun",
						"City_CN": "马村",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shanyang",
						"City_CN": "山阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "hebi",
						"City_CN": "鹤壁",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xunxian",
						"City_CN": "浚县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "qixian",
						"City_CN": "淇县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "heshan",
						"City_CN": "鹤山",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shancheng",
						"City_CN": "山城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "qibin",
						"City_CN": "淇滨",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "puyang",
						"City_CN": "濮阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "taiqian",
						"City_CN": "台前",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "nanle",
						"City_CN": "南乐",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "qingfeng",
						"City_CN": "清丰",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "fanxian",
						"City_CN": "范县",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "hualong",
						"City_CN": "华龙",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhoukou",
						"City_CN": "周口",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "fugou",
						"City_CN": "扶沟",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "taikang",
						"City_CN": "太康",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "huaiyang",
						"City_CN": "淮阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xihua",
						"City_CN": "西华",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shangshui",
						"City_CN": "商水",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xiangcheng",
						"City_CN": "项城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "dancheng",
						"City_CN": "郸城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luyi",
						"City_CN": "鹿邑",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shenqiu",
						"City_CN": "沈丘",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "chuanhui",
						"City_CN": "川汇",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "luohe",
						"City_CN": "漯河",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "linying",
						"City_CN": "临颍",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "wuyang",
						"City_CN": "舞阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yuanhui",
						"City_CN": "源汇",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yancheng",
						"City_CN": "郾城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhaoling",
						"City_CN": "召陵",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhumadian",
						"City_CN": "驻马店",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xiping",
						"City_CN": "西平",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "suiping",
						"City_CN": "遂平",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shangcai",
						"City_CN": "上蔡",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "runan",
						"City_CN": "汝南",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "biyang",
						"City_CN": "泌阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "pingyu",
						"City_CN": "平舆",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "xincai",
						"City_CN": "新蔡",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "queshan",
						"City_CN": "确山",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "zhengyang",
						"City_CN": "正阳",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yicheng",
						"City_CN": "驿城",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "sanmenxia",
						"City_CN": "三门峡",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "lingbao",
						"City_CN": "灵宝",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "mianchi",
						"City_CN": "渑池",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "lushi",
						"City_CN": "卢氏",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "yima",
						"City_CN": "义马",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "hubin",
						"City_CN": "湖滨",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "shanzhou",
						"City_CN": "陕州",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "jiyuan",
						"City_CN": "济源",
						"Province_EN": "henan",
						"Province_CN": "河南"
					},
					{
						"City_EN": "nanjing",
						"City_CN": "南京",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "lishui",
						"City_CN": "溧水",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gaochun",
						"City_CN": "高淳",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jiangning",
						"City_CN": "江宁",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "luhe",
						"City_CN": "六合",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "pukou",
						"City_CN": "浦口",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xuanwu",
						"City_CN": "玄武",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "qinhuai",
						"City_CN": "秦淮",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jianye",
						"City_CN": "建邺",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gulou",
						"City_CN": "鼓楼",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "qixia",
						"City_CN": "栖霞",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yuhuatai",
						"City_CN": "雨花台",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "wuxi",
						"City_CN": "无锡",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jiangyin",
						"City_CN": "江阴",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yixing",
						"City_CN": "宜兴",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xishan",
						"City_CN": "锡山",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "huishan",
						"City_CN": "惠山",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "binhu",
						"City_CN": "滨湖",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "liangxi",
						"City_CN": "梁溪",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xinwu",
						"City_CN": "新吴",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "zhenjiang",
						"City_CN": "镇江",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "danyang",
						"City_CN": "丹阳",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yangzhong",
						"City_CN": "扬中",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jurong",
						"City_CN": "句容",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "dantu",
						"City_CN": "丹徒",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jingkou",
						"City_CN": "京口",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "runzhou",
						"City_CN": "润州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "suzhou",
						"City_CN": "苏州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "changshu",
						"City_CN": "常熟",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "zhangjiagang",
						"City_CN": "张家港",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "kunshan",
						"City_CN": "昆山",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "wuzhong",
						"City_CN": "吴中",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "huqiu",
						"City_CN": "虎丘",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "wujiang",
						"City_CN": "吴江",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "taicang",
						"City_CN": "太仓",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xiangcheng",
						"City_CN": "相城",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gusu",
						"City_CN": "姑苏",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "nantong",
						"City_CN": "南通",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "haian",
						"City_CN": "海安",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "rugao",
						"City_CN": "如皋",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "rudong",
						"City_CN": "如东",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "chongchuan",
						"City_CN": "崇川",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gangzha",
						"City_CN": "港闸",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "qidong",
						"City_CN": "启东",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "haimen",
						"City_CN": "海门",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "tongzhou",
						"City_CN": "通州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yangzhou",
						"City_CN": "扬州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "baoying",
						"City_CN": "宝应",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yizheng",
						"City_CN": "仪征",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gaoyou",
						"City_CN": "高邮",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jiangdu",
						"City_CN": "江都",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "hanjiang",
						"City_CN": "邗江",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "guangling",
						"City_CN": "广陵",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yancheng",
						"City_CN": "盐城",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xiangshui",
						"City_CN": "响水",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "binhai",
						"City_CN": "滨海",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "funing",
						"City_CN": "阜宁",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "sheyang",
						"City_CN": "射阳",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jianhu",
						"City_CN": "建湖",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "dongtai",
						"City_CN": "东台",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "dafeng",
						"City_CN": "大丰",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yandu",
						"City_CN": "盐都",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "tinghu",
						"City_CN": "亭湖",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xuzhou",
						"City_CN": "徐州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "tongshan",
						"City_CN": "铜山",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "fengxian",
						"City_CN": "丰县",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "peixian",
						"City_CN": "沛县",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "pizhou",
						"City_CN": "邳州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "suining",
						"City_CN": "睢宁",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xinyi",
						"City_CN": "新沂",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gulou",
						"City_CN": "鼓楼",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "yunlong",
						"City_CN": "云龙",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jiawang",
						"City_CN": "贾汪",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "quanshan",
						"City_CN": "泉山",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "huaian",
						"City_CN": "淮安",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jinhu",
						"City_CN": "金湖",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xuyi",
						"City_CN": "盱眙",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "hongze",
						"City_CN": "洪泽",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "lianshui",
						"City_CN": "涟水",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "huaiyinqu",
						"City_CN": "淮阴区",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "qingjiangpu",
						"City_CN": "清江浦",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "huaianqu",
						"City_CN": "淮安区",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "lianyungang",
						"City_CN": "连云港",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "donghai",
						"City_CN": "东海",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "ganyu",
						"City_CN": "赣榆",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "guanyun",
						"City_CN": "灌云",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "guannan",
						"City_CN": "灌南",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "haizhou",
						"City_CN": "海州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "lianyun",
						"City_CN": "连云",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "changzhou",
						"City_CN": "常州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "liyang",
						"City_CN": "溧阳",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jintan",
						"City_CN": "金坛",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "wujin",
						"City_CN": "武进",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "tianning",
						"City_CN": "天宁",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "zhonglou",
						"City_CN": "钟楼",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xinbei",
						"City_CN": "新北",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "taizhou",
						"City_CN": "泰州",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "xinghua",
						"City_CN": "兴化",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "taixing",
						"City_CN": "泰兴",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jiangyan",
						"City_CN": "姜堰",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "jingjiang",
						"City_CN": "靖江",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "hailing",
						"City_CN": "海陵",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "gaogang",
						"City_CN": "高港",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "suqian",
						"City_CN": "宿迁",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "shuyang",
						"City_CN": "沭阳",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "siyang",
						"City_CN": "泗阳",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "sihong",
						"City_CN": "泗洪",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "suyu",
						"City_CN": "宿豫",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "sucheng",
						"City_CN": "宿城",
						"Province_EN": "jiangsu",
						"Province_CN": "江苏"
					},
					{
						"City_EN": "wuhan",
						"City_CN": "武汉",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "caidian",
						"City_CN": "蔡甸",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huangpi",
						"City_CN": "黄陂",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xinzhou",
						"City_CN": "新洲",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jiangxia",
						"City_CN": "江夏",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "dongxihu",
						"City_CN": "东西湖",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jiangan",
						"City_CN": "江岸",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jianghan",
						"City_CN": "江汉",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "qiaokou",
						"City_CN": "硚口",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hanyang",
						"City_CN": "汉阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "wuchang",
						"City_CN": "武昌",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "qingshan",
						"City_CN": "青山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hongshan",
						"City_CN": "洪山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hannan",
						"City_CN": "汉南",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiangyang",
						"City_CN": "襄阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiangzhou",
						"City_CN": "襄州",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "baokang",
						"City_CN": "保康",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "nanzhang",
						"City_CN": "南漳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yicheng",
						"City_CN": "宜城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "laohekou",
						"City_CN": "老河口",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "gucheng",
						"City_CN": "谷城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zaoyang",
						"City_CN": "枣阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiangcheng",
						"City_CN": "襄城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "fancheng",
						"City_CN": "樊城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "ezhou",
						"City_CN": "鄂州",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "liangzihu",
						"City_CN": "梁子湖",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huarong",
						"City_CN": "华容",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "echeng",
						"City_CN": "鄂城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiaogan",
						"City_CN": "孝感",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "anlu",
						"City_CN": "安陆",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yunmeng",
						"City_CN": "云梦",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "dawu",
						"City_CN": "大悟",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yingcheng",
						"City_CN": "应城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hanchuan",
						"City_CN": "汉川",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiaochang",
						"City_CN": "孝昌",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiaonan",
						"City_CN": "孝南",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huanggang",
						"City_CN": "黄冈",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hongan",
						"City_CN": "红安",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "macheng",
						"City_CN": "麻城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "luotian",
						"City_CN": "罗田",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yingshan",
						"City_CN": "英山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xishui",
						"City_CN": "浠水",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "qichun",
						"City_CN": "蕲春",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huangmei",
						"City_CN": "黄梅",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "wuxue",
						"City_CN": "武穴",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "tuanfeng",
						"City_CN": "团风",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huangzhou",
						"City_CN": "黄州",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huangshi",
						"City_CN": "黄石",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "daye",
						"City_CN": "大冶",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yangxin",
						"City_CN": "阳新",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "tieshan",
						"City_CN": "铁山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xialu",
						"City_CN": "下陆",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xisaishan",
						"City_CN": "西塞山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "huangshigang",
						"City_CN": "黄石港",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xianning",
						"City_CN": "咸宁",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "chibi",
						"City_CN": "赤壁",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jiayu",
						"City_CN": "嘉鱼",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "chongyang",
						"City_CN": "崇阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "tongcheng",
						"City_CN": "通城",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "tongshan",
						"City_CN": "通山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xianan",
						"City_CN": "咸安",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jingzhou",
						"City_CN": "荆州",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jiangling",
						"City_CN": "江陵",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "gongan",
						"City_CN": "公安",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "shishou",
						"City_CN": "石首",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jianli",
						"City_CN": "监利",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "honghu",
						"City_CN": "洪湖",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "songzi",
						"City_CN": "松滋",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "shashi",
						"City_CN": "沙市",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yichang",
						"City_CN": "宜昌",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yuanan",
						"City_CN": "远安",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zigui",
						"City_CN": "秭归",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xingshan",
						"City_CN": "兴山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiling",
						"City_CN": "西陵",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "wufeng",
						"City_CN": "五峰",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "dangyang",
						"City_CN": "当阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "changyang",
						"City_CN": "长阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yidu",
						"City_CN": "宜都",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zhijiang",
						"City_CN": "枝江",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "sanxia",
						"City_CN": "三峡",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yiling",
						"City_CN": "夷陵",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "wujiagang",
						"City_CN": "伍家岗",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "dianjun",
						"City_CN": "点军",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiaoting",
						"City_CN": "猇亭",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "enshi",
						"City_CN": "恩施",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "lichuan",
						"City_CN": "利川",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jianshi",
						"City_CN": "建始",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xianfeng",
						"City_CN": "咸丰",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xuanen",
						"City_CN": "宣恩",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hefeng",
						"City_CN": "鹤峰",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "laifeng",
						"City_CN": "来凤",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "badong",
						"City_CN": "巴东",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "shiyan",
						"City_CN": "十堰",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zhuxi",
						"City_CN": "竹溪",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yunxi",
						"City_CN": "郧西",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "yunyang",
						"City_CN": "郧阳",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zhushan",
						"City_CN": "竹山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "fangxian",
						"City_CN": "房县",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "danjiangkou",
						"City_CN": "丹江口",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "maojian",
						"City_CN": "茅箭",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zhangwan",
						"City_CN": "张湾",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "shennongjia",
						"City_CN": "神农架",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "suizhou",
						"City_CN": "随州",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "guangshui",
						"City_CN": "广水",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zengdou",
						"City_CN": "曾都",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "suixian",
						"City_CN": "随县",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jingmen",
						"City_CN": "荆门",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "zhongxiang",
						"City_CN": "钟祥",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "jingshan",
						"City_CN": "京山",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "duodao",
						"City_CN": "掇刀",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "shayang",
						"City_CN": "沙洋",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "dongbao",
						"City_CN": "东宝",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "tianmen",
						"City_CN": "天门",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "xiantao",
						"City_CN": "仙桃",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "qianjiang",
						"City_CN": "潜江",
						"Province_EN": "hubei",
						"Province_CN": "湖北"
					},
					{
						"City_EN": "hangzhou",
						"City_CN": "杭州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xiaoshan",
						"City_CN": "萧山",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "tonglu",
						"City_CN": "桐庐",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "chunan",
						"City_CN": "淳安",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jiande",
						"City_CN": "建德",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yuhang",
						"City_CN": "余杭",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "linan",
						"City_CN": "临安",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "fuyang",
						"City_CN": "富阳",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "shangcheng",
						"City_CN": "上城",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xiacheng",
						"City_CN": "下城",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jianggan",
						"City_CN": "江干",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "gongshu",
						"City_CN": "拱墅",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xihu",
						"City_CN": "西湖",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "binjiang",
						"City_CN": "滨江",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "huzhou",
						"City_CN": "湖州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "changxing",
						"City_CN": "长兴",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "anji",
						"City_CN": "安吉",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "deqing",
						"City_CN": "德清",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "wuxing",
						"City_CN": "吴兴",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "nanxun",
						"City_CN": "南浔",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jiaxing",
						"City_CN": "嘉兴",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jiashan",
						"City_CN": "嘉善",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "haining",
						"City_CN": "海宁",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "tongxiang",
						"City_CN": "桐乡",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "pinghu",
						"City_CN": "平湖",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "haiyan",
						"City_CN": "海盐",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "nanhu",
						"City_CN": "南湖",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xiuzhou",
						"City_CN": "秀洲",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "ningbo",
						"City_CN": "宁波",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "haishu",
						"City_CN": "海曙",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "cixi",
						"City_CN": "慈溪",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yuyao",
						"City_CN": "余姚",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "fenghua",
						"City_CN": "奉化",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xiangshan",
						"City_CN": "象山",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "ninghai",
						"City_CN": "宁海",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jiangbei",
						"City_CN": "江北",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "beilun",
						"City_CN": "北仑",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yinzhou",
						"City_CN": "鄞州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "zhenhai",
						"City_CN": "镇海",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yuecheng",
						"City_CN": "越城",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "zhuji",
						"City_CN": "诸暨",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "shangyu",
						"City_CN": "上虞",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xinchang",
						"City_CN": "新昌",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "shengzhou",
						"City_CN": "嵊州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "keqiao",
						"City_CN": "柯桥",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "shaoxing",
						"City_CN": "绍兴",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "taizhou",
						"City_CN": "台州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yuhuan",
						"City_CN": "玉环",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "sanmen",
						"City_CN": "三门",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "tiantai",
						"City_CN": "天台",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "xianju",
						"City_CN": "仙居",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "wenling",
						"City_CN": "温岭",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "linhai",
						"City_CN": "临海",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jiaojiang",
						"City_CN": "椒江",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "huangyan",
						"City_CN": "黄岩",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "luqiao",
						"City_CN": "路桥",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "wenzhou",
						"City_CN": "温州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "taishun",
						"City_CN": "泰顺",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "wencheng",
						"City_CN": "文成",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "pingyang",
						"City_CN": "平阳",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "ruian",
						"City_CN": "瑞安",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "dongtou",
						"City_CN": "洞头",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yueqing",
						"City_CN": "乐清",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yongjia",
						"City_CN": "永嘉",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "cangnan",
						"City_CN": "苍南",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "lucheng",
						"City_CN": "鹿城",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "longwan",
						"City_CN": "龙湾",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "ouhai",
						"City_CN": "瓯海",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "lishui",
						"City_CN": "丽水",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "suichang",
						"City_CN": "遂昌",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "longquan",
						"City_CN": "龙泉",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jinyun",
						"City_CN": "缙云",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "qingtian",
						"City_CN": "青田",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yunhe",
						"City_CN": "云和",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "qingyuan",
						"City_CN": "庆元",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "songyang",
						"City_CN": "松阳",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jingning",
						"City_CN": "景宁",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "liandou",
						"City_CN": "莲都",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jinhua",
						"City_CN": "金华",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "pujiang",
						"City_CN": "浦江",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "lanxi",
						"City_CN": "兰溪",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yiwu",
						"City_CN": "义乌",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "dongyang",
						"City_CN": "东阳",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "wuyi",
						"City_CN": "武义",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "yongkang",
						"City_CN": "永康",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "panan",
						"City_CN": "磐安",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "wucheng",
						"City_CN": "婺城",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jindong",
						"City_CN": "金东",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "quzhou",
						"City_CN": "衢州",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "changshan",
						"City_CN": "常山",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "kaihua",
						"City_CN": "开化",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "longyou",
						"City_CN": "龙游",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "jiangshan",
						"City_CN": "江山",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "qujiang",
						"City_CN": "衢江",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "kecheng",
						"City_CN": "柯城",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "zhoushan",
						"City_CN": "舟山",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "shengsi",
						"City_CN": "嵊泗",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "daishan",
						"City_CN": "岱山",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "putuo",
						"City_CN": "普陀",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "dinghai",
						"City_CN": "定海",
						"Province_EN": "zhejiang",
						"Province_CN": "浙江"
					},
					{
						"City_EN": "hefei",
						"City_CN": "合肥",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "changfeng",
						"City_CN": "长丰",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "feidong",
						"City_CN": "肥东",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "feixi",
						"City_CN": "肥西",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "chaohu",
						"City_CN": "巢湖",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "lujiang",
						"City_CN": "庐江",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yaohai",
						"City_CN": "瑶海",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "luyang",
						"City_CN": "庐阳",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "shushan",
						"City_CN": "蜀山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "baohe",
						"City_CN": "包河",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "bengbu",
						"City_CN": "蚌埠",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huaiyuan",
						"City_CN": "怀远",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "guzhen",
						"City_CN": "固镇",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "wuhe",
						"City_CN": "五河",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "longzihu",
						"City_CN": "龙子湖",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "bangshan",
						"City_CN": "蚌山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yuhui",
						"City_CN": "禹会",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huaishang",
						"City_CN": "淮上",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "wuhu",
						"City_CN": "芜湖",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "fanyang",
						"City_CN": "繁昌",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "wuhuxian",
						"City_CN": "芜湖县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "nanling",
						"City_CN": "南陵",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "wuwei",
						"City_CN": "无为",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jinghu",
						"City_CN": "镜湖",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yijiang",
						"City_CN": "弋江",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jiujiang",
						"City_CN": "鸠江",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "sanshan",
						"City_CN": "三山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huainan",
						"City_CN": "淮南",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "fengtai",
						"City_CN": "凤台",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "panji",
						"City_CN": "潘集",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "datong",
						"City_CN": "大通",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "tianjiaan",
						"City_CN": "田家庵",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "xiejiaji",
						"City_CN": "谢家集",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "bagongshan",
						"City_CN": "八公山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "shouxian",
						"City_CN": "寿县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "maanshan",
						"City_CN": "马鞍山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "dangtu",
						"City_CN": "当涂",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "hanshan",
						"City_CN": "含山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "hexian",
						"City_CN": "和县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huashan",
						"City_CN": "花山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yushan",
						"City_CN": "雨山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "bowang",
						"City_CN": "博望",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "anqing",
						"City_CN": "安庆",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "taihu",
						"City_CN": "太湖",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "qianshan",
						"City_CN": "潜山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huaining",
						"City_CN": "怀宁",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "susong",
						"City_CN": "宿松",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "wangjiang",
						"City_CN": "望江",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yuexi",
						"City_CN": "岳西",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "tongcheng",
						"City_CN": "桐城",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yingjiang",
						"City_CN": "迎江",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "daguan",
						"City_CN": "大观",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yixiu",
						"City_CN": "宜秀",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "suzhou",
						"City_CN": "宿州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "dangshan",
						"City_CN": "砀山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "lingbi",
						"City_CN": "灵璧",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "sixian",
						"City_CN": "泗县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "xiaoxian",
						"City_CN": "萧县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yongqiao",
						"City_CN": "埇桥",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "fuyang",
						"City_CN": "阜阳",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "funan",
						"City_CN": "阜南",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yingshang",
						"City_CN": "颍上",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "linquan",
						"City_CN": "临泉",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jieshou",
						"City_CN": "界首",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "taihe",
						"City_CN": "太和",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yingzhou",
						"City_CN": "颍州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yingdong",
						"City_CN": "颍东",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yingquan",
						"City_CN": "颍泉",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "bozhou",
						"City_CN": "亳州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "guoyang",
						"City_CN": "涡阳",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "lixin",
						"City_CN": "利辛",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "mengcheng",
						"City_CN": "蒙城",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "qiaocheng",
						"City_CN": "谯城",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huangshan",
						"City_CN": "黄山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huangshanqu",
						"City_CN": "黄山区",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "tunxi",
						"City_CN": "屯溪",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "qimen",
						"City_CN": "祁门",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yixian",
						"City_CN": "黟县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "shexian",
						"City_CN": "歙县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "xiuning",
						"City_CN": "休宁",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huangshanfengjingqu",
						"City_CN": "黄山风景区(光明顶)",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huizhou",
						"City_CN": "徽州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "chuzhou",
						"City_CN": "滁州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "fengyang",
						"City_CN": "凤阳",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "mingguang",
						"City_CN": "明光",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "dingyuan",
						"City_CN": "定远",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "quanjiao",
						"City_CN": "全椒",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "laian",
						"City_CN": "来安",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "tianchang",
						"City_CN": "天长",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "langya",
						"City_CN": "琅琊",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "nanqiao",
						"City_CN": "南谯",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huaibei",
						"City_CN": "淮北",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "suixi",
						"City_CN": "濉溪",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "duji",
						"City_CN": "杜集",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "xiangshan",
						"City_CN": "相山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "lieshan",
						"City_CN": "烈山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "tongling",
						"City_CN": "铜陵",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "tongguan",
						"City_CN": "铜官",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yian",
						"City_CN": "义安",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jiaoqu",
						"City_CN": "郊区",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "zongyang",
						"City_CN": "枞阳",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "xuancheng",
						"City_CN": "宣城",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jingxian",
						"City_CN": "泾县",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jingde",
						"City_CN": "旌德",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "ningguo",
						"City_CN": "宁国",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jixi",
						"City_CN": "绩溪",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "guangde",
						"City_CN": "广德",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "langxi",
						"City_CN": "郎溪",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "xuanzhou",
						"City_CN": "宣州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "luan",
						"City_CN": "六安",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huoqiu",
						"City_CN": "霍邱",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jinan",
						"City_CN": "金安",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jinzhai",
						"City_CN": "金寨",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "huoshan",
						"City_CN": "霍山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "shucheng",
						"City_CN": "舒城",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yuan",
						"City_CN": "裕安",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "yeji",
						"City_CN": "叶集",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "chizhou",
						"City_CN": "池州",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "dongzhi",
						"City_CN": "东至",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "qingyang",
						"City_CN": "青阳",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "jiuhuashan",
						"City_CN": "九华山",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "shitai",
						"City_CN": "石台",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "guichi",
						"City_CN": "贵池",
						"Province_EN": "anhui",
						"Province_CN": "安徽"
					},
					{
						"City_EN": "fuzhou",
						"City_CN": "福州",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "minqing",
						"City_CN": "闽清",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "minhou",
						"City_CN": "闽侯",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "luoyuan",
						"City_CN": "罗源",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "lianjiang",
						"City_CN": "连江",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "gulou",
						"City_CN": "鼓楼",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "yongtai",
						"City_CN": "永泰",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "pingtan",
						"City_CN": "平潭",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "taijiang",
						"City_CN": "台江",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "changle",
						"City_CN": "长乐",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "fuqing",
						"City_CN": "福清",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "cangshan",
						"City_CN": "仓山",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "mawei",
						"City_CN": "马尾",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jinan",
						"City_CN": "晋安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xiamen",
						"City_CN": "厦门",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "tongan",
						"City_CN": "同安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "siming",
						"City_CN": "思明",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "haicang",
						"City_CN": "海沧",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "huli",
						"City_CN": "湖里",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jimei",
						"City_CN": "集美",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xiangan",
						"City_CN": "翔安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "ningde",
						"City_CN": "宁德",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "gutian",
						"City_CN": "古田",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xiapu",
						"City_CN": "霞浦",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "shouning",
						"City_CN": "寿宁",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zhouning",
						"City_CN": "周宁",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "fuan",
						"City_CN": "福安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zherong",
						"City_CN": "柘荣",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "fuding",
						"City_CN": "福鼎",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "pingnan",
						"City_CN": "屏南",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jiaocheng",
						"City_CN": "蕉城",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "putian",
						"City_CN": "莆田",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xianyou",
						"City_CN": "仙游",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "hanjiang",
						"City_CN": "涵江",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xiuyu",
						"City_CN": "秀屿",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "licheng",
						"City_CN": "荔城",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "chengxiang",
						"City_CN": "城厢",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "quanzhou",
						"City_CN": "泉州",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "anxi",
						"City_CN": "安溪",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jinmen",
						"City_CN": "金门",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "yongchun",
						"City_CN": "永春",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "dehua",
						"City_CN": "德化",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "nanan",
						"City_CN": "南安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "chongwu",
						"City_CN": "崇武",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "huian",
						"City_CN": "惠安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jinjiang",
						"City_CN": "晋江",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "shishi",
						"City_CN": "石狮",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "licheng",
						"City_CN": "鲤城",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "fengze",
						"City_CN": "丰泽",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "luojiang",
						"City_CN": "洛江",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "quangang",
						"City_CN": "泉港",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zhangzhou",
						"City_CN": "漳州",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "changtai",
						"City_CN": "长泰",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "nanjing",
						"City_CN": "南靖",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "pinghe",
						"City_CN": "平和",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "longhai",
						"City_CN": "龙海",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zhangpu",
						"City_CN": "漳浦",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zhaoan",
						"City_CN": "诏安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "dongshan",
						"City_CN": "东山",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "yunxiao",
						"City_CN": "云霄",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "huaan",
						"City_CN": "华安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xiangcheng",
						"City_CN": "芗城",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "longwen",
						"City_CN": "龙文",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "longyan",
						"City_CN": "龙岩",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "changting",
						"City_CN": "长汀",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "liancheng",
						"City_CN": "连城",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "wuping",
						"City_CN": "武平",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "shanghang",
						"City_CN": "上杭",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "yongding",
						"City_CN": "永定",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zhangping",
						"City_CN": "漳平",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "xinluo",
						"City_CN": "新罗",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "sanming",
						"City_CN": "三明",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "ninghua",
						"City_CN": "宁化",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "qingliu",
						"City_CN": "清流",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "taining",
						"City_CN": "泰宁",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jiangle",
						"City_CN": "将乐",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jianning",
						"City_CN": "建宁",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "mingxi",
						"City_CN": "明溪",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "shaxian",
						"City_CN": "沙县",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "youxi",
						"City_CN": "尤溪",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "yongan",
						"City_CN": "永安",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "datian",
						"City_CN": "大田",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "meilie",
						"City_CN": "梅列",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "sanyuan",
						"City_CN": "三元",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "nanping",
						"City_CN": "南平",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "shunchang",
						"City_CN": "顺昌",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "guangze",
						"City_CN": "光泽",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "shaowu",
						"City_CN": "邵武",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "wuyishan",
						"City_CN": "武夷山",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "pucheng",
						"City_CN": "浦城",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jianyang",
						"City_CN": "建阳",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "songxi",
						"City_CN": "松溪",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "zhenghe",
						"City_CN": "政和",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "jianou",
						"City_CN": "建瓯",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "yanping",
						"City_CN": "延平",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "diaoyudao",
						"City_CN": "钓鱼岛",
						"Province_EN": "fujian",
						"Province_CN": "福建"
					},
					{
						"City_EN": "nanchang",
						"City_CN": "南昌",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xinjian",
						"City_CN": "新建",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "nanchangxian",
						"City_CN": "南昌县",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "anyi",
						"City_CN": "安义",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jinxian",
						"City_CN": "进贤",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "donghu",
						"City_CN": "东湖",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xihu",
						"City_CN": "西湖",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "qingyunpu",
						"City_CN": "青云谱",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "wanli",
						"City_CN": "湾里",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "qingshanhu",
						"City_CN": "青山湖",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jiujiang",
						"City_CN": "九江",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "ruichang",
						"City_CN": "瑞昌",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "lushan",
						"City_CN": "庐山",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "wuning",
						"City_CN": "武宁",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "dean",
						"City_CN": "德安",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yongxiu",
						"City_CN": "永修",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "hukou",
						"City_CN": "湖口",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "pengze",
						"City_CN": "彭泽",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "duchang",
						"City_CN": "都昌",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xunyang",
						"City_CN": "浔阳",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xiushui",
						"City_CN": "修水",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "gongqingcheng",
						"City_CN": "共青城",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "lianxi",
						"City_CN": "濂溪",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "chaisang",
						"City_CN": "柴桑",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "shangrao",
						"City_CN": "上饶",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "poyang",
						"City_CN": "鄱阳",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "wuyuan",
						"City_CN": "婺源",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xinzhou",
						"City_CN": "信州",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yugan",
						"City_CN": "余干",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "wannian",
						"City_CN": "万年",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "dexing",
						"City_CN": "德兴",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "shangraoxian",
						"City_CN": "上饶县",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yiyang",
						"City_CN": "弋阳",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "hengfeng",
						"City_CN": "横峰",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yanshan",
						"City_CN": "铅山",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yushan",
						"City_CN": "玉山",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "guangfeng",
						"City_CN": "广丰",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "fuzhou",
						"City_CN": "抚州",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "guangchang",
						"City_CN": "广昌",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "anle",
						"City_CN": "乐安",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "chongren",
						"City_CN": "崇仁",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jinxi",
						"City_CN": "金溪",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "zixi",
						"City_CN": "资溪",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yihuang",
						"City_CN": "宜黄",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "nancheng",
						"City_CN": "南城",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "nanfeng",
						"City_CN": "南丰",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "lichuan",
						"City_CN": "黎川",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "dongxiang",
						"City_CN": "东乡",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "linchuan",
						"City_CN": "临川",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yichun",
						"City_CN": "宜春",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "tonggu",
						"City_CN": "铜鼓",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yifeng",
						"City_CN": "宜丰",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "wanzai",
						"City_CN": "万载",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "shanggao",
						"City_CN": "上高",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jingan",
						"City_CN": "靖安",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "fengxin",
						"City_CN": "奉新",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "gaoan",
						"City_CN": "高安",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "zhangshu",
						"City_CN": "樟树",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "fengcheng",
						"City_CN": "丰城",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yuanzhou",
						"City_CN": "袁州",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jian",
						"City_CN": "吉安",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jianxian",
						"City_CN": "吉安县",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jishui",
						"City_CN": "吉水",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xingan",
						"City_CN": "新干",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xiajiang",
						"City_CN": "峡江",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yongfeng",
						"City_CN": "永丰",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yongxin",
						"City_CN": "永新",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jinggangshan",
						"City_CN": "井冈山",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "wanan",
						"City_CN": "万安",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "suichuan",
						"City_CN": "遂川",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "taihe",
						"City_CN": "泰和",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "anfu",
						"City_CN": "安福",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jizhou",
						"City_CN": "吉州",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "qingyuan",
						"City_CN": "青原",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xiaping",
						"City_CN": "厦坪",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "ganzhou",
						"City_CN": "赣州",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "chongyi",
						"City_CN": "崇义",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "shangyou",
						"City_CN": "上犹",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "nankang",
						"City_CN": "南康",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "dayu",
						"City_CN": "大余",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xinfeng",
						"City_CN": "信丰",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "ningdu",
						"City_CN": "宁都",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "shicheng",
						"City_CN": "石城",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "ruijin",
						"City_CN": "瑞金",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yudu",
						"City_CN": "于都",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "huichang",
						"City_CN": "会昌",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "anyuan",
						"City_CN": "安远",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "quannan",
						"City_CN": "全南",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "longnan",
						"City_CN": "龙南",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "dingnan",
						"City_CN": "定南",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xunwu",
						"City_CN": "寻乌",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xingguo",
						"City_CN": "兴国",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "ganxian",
						"City_CN": "赣县",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "zhanggong",
						"City_CN": "章贡",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "jingdezhen",
						"City_CN": "景德镇",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "leping",
						"City_CN": "乐平",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "fuliang",
						"City_CN": "浮梁",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "changjiang",
						"City_CN": "昌江",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "zhushan",
						"City_CN": "珠山",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "pingxiang",
						"City_CN": "萍乡",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "lianhua",
						"City_CN": "莲花",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "shangli",
						"City_CN": "上栗",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "anyuan",
						"City_CN": "安源",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "luxi",
						"City_CN": "芦溪",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xiangdong",
						"City_CN": "湘东",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "xinyu",
						"City_CN": "新余",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "fenyi",
						"City_CN": "分宜",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yushui",
						"City_CN": "渝水",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yingtan",
						"City_CN": "鹰潭",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yujiang",
						"City_CN": "余江",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "guixi",
						"City_CN": "贵溪",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "yuehu",
						"City_CN": "月湖",
						"Province_EN": "jiangxi",
						"Province_CN": "江西"
					},
					{
						"City_EN": "changsha",
						"City_CN": "长沙",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "ningxiang",
						"City_CN": "宁乡",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "liuyang",
						"City_CN": "浏阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xiangjiangxinqu",
						"City_CN": "湘江新区",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "wangcheng",
						"City_CN": "望城",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "changshaxian",
						"City_CN": "长沙县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "furong",
						"City_CN": "芙蓉",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "tianxin",
						"City_CN": "天心",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yuelu",
						"City_CN": "岳麓",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "kaifu",
						"City_CN": "开福",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yuhua",
						"City_CN": "雨花",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xiangtan",
						"City_CN": "湘潭",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shaoshan",
						"City_CN": "韶山",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xiangxiang",
						"City_CN": "湘乡",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yuhu",
						"City_CN": "雨湖",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yuetang",
						"City_CN": "岳塘",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zhuzhou",
						"City_CN": "株洲",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "youxian",
						"City_CN": "攸县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "liling",
						"City_CN": "醴陵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hetang",
						"City_CN": "荷塘",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "chaling",
						"City_CN": "茶陵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yanling",
						"City_CN": "炎陵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lusong",
						"City_CN": "芦淞",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shifeng",
						"City_CN": "石峰",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "tianyuan",
						"City_CN": "天元",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hengyang",
						"City_CN": "衡阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hengshan",
						"City_CN": "衡山",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hengdong",
						"City_CN": "衡东",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "qidong",
						"City_CN": "祁东",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hengyangxian",
						"City_CN": "衡阳县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "changning",
						"City_CN": "常宁",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hengnan",
						"City_CN": "衡南",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "leiyang",
						"City_CN": "耒阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "nanyue",
						"City_CN": "南岳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zhuhui",
						"City_CN": "珠晖",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yanfeng",
						"City_CN": "雁峰",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shigu",
						"City_CN": "石鼓",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zhengxiang",
						"City_CN": "蒸湘",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "chenzhou",
						"City_CN": "郴州",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "guiyang",
						"City_CN": "桂阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "jiahe",
						"City_CN": "嘉禾",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yizhang",
						"City_CN": "宜章",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "linwu",
						"City_CN": "临武",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "beihu",
						"City_CN": "北湖",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zixing",
						"City_CN": "资兴",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "rucheng",
						"City_CN": "汝城",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "anren",
						"City_CN": "安仁",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yongxing",
						"City_CN": "永兴",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "guidong",
						"City_CN": "桂东",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "suxian",
						"City_CN": "苏仙",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "changde",
						"City_CN": "常德",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "anxiang",
						"City_CN": "安乡",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "taoyuan",
						"City_CN": "桃源",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hanshou",
						"City_CN": "汉寿",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lixian",
						"City_CN": "澧县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "linli",
						"City_CN": "临澧",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shimen",
						"City_CN": "石门",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "jinshi",
						"City_CN": "津市",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "wuling",
						"City_CN": "武陵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "dingcheng",
						"City_CN": "鼎城",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yiyang",
						"City_CN": "益阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "heshanqu",
						"City_CN": "赫山区",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "nanxian",
						"City_CN": "南县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "taojiang",
						"City_CN": "桃江",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "anhua",
						"City_CN": "安化",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yuanjiang",
						"City_CN": "沅江",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "ziyang",
						"City_CN": "资阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "loudi",
						"City_CN": "娄底",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shuangfeng",
						"City_CN": "双峰",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lengshuijiang",
						"City_CN": "冷水江",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "louxing",
						"City_CN": "娄星",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xinhua",
						"City_CN": "新化",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lianyuan",
						"City_CN": "涟源",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shaoyang",
						"City_CN": "邵阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "longhui",
						"City_CN": "隆回",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "dongkou",
						"City_CN": "洞口",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xinshao",
						"City_CN": "新邵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shaodong",
						"City_CN": "邵东",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "suining",
						"City_CN": "绥宁",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xinning",
						"City_CN": "新宁",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "wugang",
						"City_CN": "武冈",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "chengbu",
						"City_CN": "城步",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shaoyangxian",
						"City_CN": "邵阳县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shuangqing",
						"City_CN": "双清",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "daxiang",
						"City_CN": "大祥",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "beita",
						"City_CN": "北塔",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yueyang",
						"City_CN": "岳阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "huarong",
						"City_CN": "华容",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xiangyin",
						"City_CN": "湘阴",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "miluo",
						"City_CN": "汨罗",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "pingjiang",
						"City_CN": "平江",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "linxiang",
						"City_CN": "临湘",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yueyanglouqu",
						"City_CN": "岳阳楼区",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yunxi",
						"City_CN": "云溪",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "junshan",
						"City_CN": "君山",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zhangjiajie",
						"City_CN": "张家界",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "sangzhi",
						"City_CN": "桑植",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "cili",
						"City_CN": "慈利",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "wulingyuan",
						"City_CN": "武陵源",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yongding",
						"City_CN": "永定",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "huaihua",
						"City_CN": "怀化",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hecheng",
						"City_CN": "鹤城",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yuanling",
						"City_CN": "沅陵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "chenxi",
						"City_CN": "辰溪",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "jingzhou",
						"City_CN": "靖州",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "huitong",
						"City_CN": "会同",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "tongdao",
						"City_CN": "通道",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "mayang",
						"City_CN": "麻阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xinhuang",
						"City_CN": "新晃",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zhijiang",
						"City_CN": "芷江",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xupu",
						"City_CN": "溆浦",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "zhongfang",
						"City_CN": "中方",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "hongjiang",
						"City_CN": "洪江",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yongzhou",
						"City_CN": "永州",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "qiyang",
						"City_CN": "祁阳",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "dongan",
						"City_CN": "东安",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "shuangpai",
						"City_CN": "双牌",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "daoxian",
						"City_CN": "道县",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "ningyuan",
						"City_CN": "宁远",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "jiangyong",
						"City_CN": "江永",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lanshan",
						"City_CN": "蓝山",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xintian",
						"City_CN": "新田",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "jianghua",
						"City_CN": "江华",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lengshuitan",
						"City_CN": "冷水滩",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "lingling",
						"City_CN": "零陵",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "jishou",
						"City_CN": "吉首",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "baojing",
						"City_CN": "保靖",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "yongshun",
						"City_CN": "永顺",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "guzhang",
						"City_CN": "古丈",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "fenghuang",
						"City_CN": "凤凰",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "luxi",
						"City_CN": "泸溪",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "longshan",
						"City_CN": "龙山",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "huayuan",
						"City_CN": "花垣",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "xiangxi",
						"City_CN": "湘西",
						"Province_EN": "hunan",
						"Province_CN": "湖南"
					},
					{
						"City_EN": "guiyang",
						"City_CN": "贵阳",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "baiyun",
						"City_CN": "白云",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "huaxi",
						"City_CN": "花溪",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "wudang",
						"City_CN": "乌当",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "xifeng",
						"City_CN": "息烽",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "kaiyang",
						"City_CN": "开阳",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "xiuwen",
						"City_CN": "修文",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qingzhen",
						"City_CN": "清镇",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "yunyan",
						"City_CN": "云岩",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "nanming",
						"City_CN": "南明",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "guanshanhu",
						"City_CN": "观山湖",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zunyi",
						"City_CN": "遵义",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "renhuai",
						"City_CN": "仁怀",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "suiyang",
						"City_CN": "绥阳",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "meitan",
						"City_CN": "湄潭",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "fenggang",
						"City_CN": "凤冈",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "tongzi",
						"City_CN": "桐梓",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "chishui",
						"City_CN": "赤水",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "xishui",
						"City_CN": "习水",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "daozhen",
						"City_CN": "道真",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zhengan",
						"City_CN": "正安",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "wuchuan",
						"City_CN": "务川",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "yuqing",
						"City_CN": "余庆",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "huichuan",
						"City_CN": "汇川",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "honghuagang",
						"City_CN": "红花岗",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "bozhou",
						"City_CN": "播州",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "anshun",
						"City_CN": "安顺",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "puding",
						"City_CN": "普定",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zhenning",
						"City_CN": "镇宁",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "pingba",
						"City_CN": "平坝",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "ziyun",
						"City_CN": "紫云",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "guanling",
						"City_CN": "关岭",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "xixiu",
						"City_CN": "西秀",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "duyun",
						"City_CN": "都匀",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "guiding",
						"City_CN": "贵定",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "wengan",
						"City_CN": "瓮安",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "changshun",
						"City_CN": "长顺",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "fuquan",
						"City_CN": "福泉",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "huishui",
						"City_CN": "惠水",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "longli",
						"City_CN": "龙里",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "luodian",
						"City_CN": "罗甸",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "pingtang",
						"City_CN": "平塘",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "dushan",
						"City_CN": "独山",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "sandu",
						"City_CN": "三都",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "libo",
						"City_CN": "荔波",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qiannan",
						"City_CN": "黔南",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "kaili",
						"City_CN": "凯里",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "cengong",
						"City_CN": "岑巩",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "shibing",
						"City_CN": "施秉",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zhenyuan",
						"City_CN": "镇远",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "huangping",
						"City_CN": "黄平",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qiandongnan",
						"City_CN": "黔东南",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "majiang",
						"City_CN": "麻江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "danzhai",
						"City_CN": "丹寨",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "sansui",
						"City_CN": "三穗",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "taijiang",
						"City_CN": "台江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "jianhe",
						"City_CN": "剑河",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "leishan",
						"City_CN": "雷山",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "liping",
						"City_CN": "黎平",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "tianzhu",
						"City_CN": "天柱",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "jinping",
						"City_CN": "锦屏",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "rongjiang",
						"City_CN": "榕江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "congjiang",
						"City_CN": "从江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "tongren",
						"City_CN": "铜仁",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "jiangkou",
						"City_CN": "江口",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "yuping",
						"City_CN": "玉屏",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "wanshan",
						"City_CN": "万山",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "sinan",
						"City_CN": "思南",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "bijiang",
						"City_CN": "碧江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "yinjiang",
						"City_CN": "印江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "shiqian",
						"City_CN": "石阡",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "yanhe",
						"City_CN": "沿河",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "dejiang",
						"City_CN": "德江",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "songtao",
						"City_CN": "松桃",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "bijie",
						"City_CN": "毕节",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "hezhang",
						"City_CN": "赫章",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "jinsha",
						"City_CN": "金沙",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "weining",
						"City_CN": "威宁",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "dafang",
						"City_CN": "大方",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "nayong",
						"City_CN": "纳雍",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zhijin",
						"City_CN": "织金",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qianxi",
						"City_CN": "黔西",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qixingguan",
						"City_CN": "七星关",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "shuicheng",
						"City_CN": "水城",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "liuzhi",
						"City_CN": "六枝",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "liupanshui",
						"City_CN": "六盘水",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "panzhou",
						"City_CN": "盘州",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zhongshan",
						"City_CN": "钟山",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "xingyi",
						"City_CN": "兴义",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qinglong",
						"City_CN": "晴隆",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "xingren",
						"City_CN": "兴仁",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "zhenfeng",
						"City_CN": "贞丰",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "wangmo",
						"City_CN": "望谟",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "qianxinan",
						"City_CN": "黔西南",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "anlong",
						"City_CN": "安龙",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "ceheng",
						"City_CN": "册亨",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "puan",
						"City_CN": "普安",
						"Province_EN": "guizhou",
						"Province_CN": "贵州"
					},
					{
						"City_EN": "chengdu",
						"City_CN": "成都",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "longquanyi",
						"City_CN": "龙泉驿",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xindu",
						"City_CN": "新都",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wenjiang",
						"City_CN": "温江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jintang",
						"City_CN": "金堂",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shuangliu",
						"City_CN": "双流",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pidu",
						"City_CN": "郫都",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dayi",
						"City_CN": "大邑",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pujiang",
						"City_CN": "蒲江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xinjin",
						"City_CN": "新津",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dujiangyan",
						"City_CN": "都江堰",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pengzhou",
						"City_CN": "彭州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qionglai",
						"City_CN": "邛崃",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "chongzhou",
						"City_CN": "崇州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qingbaijiang",
						"City_CN": "青白江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jinjiang",
						"City_CN": "锦江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qingyang",
						"City_CN": "青羊",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jinniu",
						"City_CN": "金牛",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wuhou",
						"City_CN": "武侯",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "chenghua",
						"City_CN": "成华",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jianyang",
						"City_CN": "简阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "panzhihua",
						"City_CN": "攀枝花",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "renhe",
						"City_CN": "仁和",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "miyi",
						"City_CN": "米易",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yanbian",
						"City_CN": "盐边",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dongqu",
						"City_CN": "东区",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xiqu",
						"City_CN": "西区",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "zigong",
						"City_CN": "自贡",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "fushun",
						"City_CN": "富顺",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "rongxian",
						"City_CN": "荣县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "ziliujing",
						"City_CN": "自流井",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "gongjing",
						"City_CN": "贡井",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "daan",
						"City_CN": "大安",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yantan",
						"City_CN": "沿滩",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "mianyang",
						"City_CN": "绵阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "santai",
						"City_CN": "三台",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yanting",
						"City_CN": "盐亭",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "zitong",
						"City_CN": "梓潼",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "beichuan",
						"City_CN": "北川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pingwu",
						"City_CN": "平武",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiangyou",
						"City_CN": "江油",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "fucheng",
						"City_CN": "涪城",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "youxian",
						"City_CN": "游仙",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "anzhou",
						"City_CN": "安州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "nanchong",
						"City_CN": "南充",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "nanbu",
						"City_CN": "南部",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yingshan",
						"City_CN": "营山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pengan",
						"City_CN": "蓬安",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yilong",
						"City_CN": "仪陇",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xichong",
						"City_CN": "西充",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "langzhong",
						"City_CN": "阆中",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shunqing",
						"City_CN": "顺庆",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "gaoping",
						"City_CN": "高坪",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jialing",
						"City_CN": "嘉陵",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dazhou",
						"City_CN": "达州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xuanhan",
						"City_CN": "宣汉",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "kaijiang",
						"City_CN": "开江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dazhu",
						"City_CN": "大竹",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "quxian",
						"City_CN": "渠县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wanyuan",
						"City_CN": "万源",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "tongchuan",
						"City_CN": "通川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dachuan",
						"City_CN": "达川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "suining",
						"City_CN": "遂宁",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pengxi",
						"City_CN": "蓬溪",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shehong",
						"City_CN": "射洪",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "chuanshan",
						"City_CN": "船山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "anju",
						"City_CN": "安居",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "daying",
						"City_CN": "大英",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "guangan",
						"City_CN": "广安",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yuechi",
						"City_CN": "岳池",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wusheng",
						"City_CN": "武胜",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "linshui",
						"City_CN": "邻水",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "huaying",
						"City_CN": "华蓥",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qianfeng",
						"City_CN": "前锋",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "bazhong",
						"City_CN": "巴中",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "tongjiang",
						"City_CN": "通江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "nanjiang",
						"City_CN": "南江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pingchang",
						"City_CN": "平昌",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "bazhou",
						"City_CN": "巴州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "enyang",
						"City_CN": "恩阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "luzhou",
						"City_CN": "泸州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiangyang",
						"City_CN": "江阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "luxian",
						"City_CN": "泸县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "hejiang",
						"City_CN": "合江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xuyong",
						"City_CN": "叙永",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "gulin",
						"City_CN": "古蔺",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "naxi",
						"City_CN": "纳溪",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "longmatan",
						"City_CN": "龙马潭",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yibin",
						"City_CN": "宜宾",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "cuiping",
						"City_CN": "翠屏",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yibinxian",
						"City_CN": "宜宾县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "nanxi",
						"City_CN": "南溪",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiangan",
						"City_CN": "江安",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "changning",
						"City_CN": "长宁",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "gaoxian",
						"City_CN": "高县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "gongxian",
						"City_CN": "珙县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "junlian",
						"City_CN": "筠连",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xingwen",
						"City_CN": "兴文",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pingshan",
						"City_CN": "屏山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "neijiang",
						"City_CN": "内江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dongxing",
						"City_CN": "东兴",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "weiyuan",
						"City_CN": "威远",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "zizhong",
						"City_CN": "资中",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "longchang",
						"City_CN": "隆昌",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shizhong",
						"City_CN": "市中",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "ziyang",
						"City_CN": "资阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "anyue",
						"City_CN": "安岳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "lezhi",
						"City_CN": "乐至",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yanjiang",
						"City_CN": "雁江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "leshan",
						"City_CN": "乐山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qianwei",
						"City_CN": "犍为",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jingyan",
						"City_CN": "井研",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiajiang",
						"City_CN": "夹江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "muchuan",
						"City_CN": "沐川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "ebian",
						"City_CN": "峨边",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "mabian",
						"City_CN": "马边",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "emeishan",
						"City_CN": "峨眉山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shizhong",
						"City_CN": "市中",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shawan",
						"City_CN": "沙湾",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wutongqiao",
						"City_CN": "五通桥",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jinkouhe",
						"City_CN": "金口河",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "emeishanshi",
						"City_CN": "峨眉山市",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "meishan",
						"City_CN": "眉山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "renshou",
						"City_CN": "仁寿",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "pengshan",
						"City_CN": "彭山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "hongya",
						"City_CN": "洪雅",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "danleng",
						"City_CN": "丹棱",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qingshen",
						"City_CN": "青神",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dongpo",
						"City_CN": "东坡",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "liangshan",
						"City_CN": "凉山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "muli",
						"City_CN": "木里",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yanyuan",
						"City_CN": "盐源",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dechang",
						"City_CN": "德昌",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "huili",
						"City_CN": "会理",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "huidong",
						"City_CN": "会东",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "ningnan",
						"City_CN": "宁南",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "puge",
						"City_CN": "普格",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xichang",
						"City_CN": "西昌",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jinyang",
						"City_CN": "金阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "zhaojue",
						"City_CN": "昭觉",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xide",
						"City_CN": "喜德",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "mianning",
						"City_CN": "冕宁",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yuexi",
						"City_CN": "越西",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "ganluo",
						"City_CN": "甘洛",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "leibo",
						"City_CN": "雷波",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "meigu",
						"City_CN": "美姑",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "butuo",
						"City_CN": "布拖",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yaan",
						"City_CN": "雅安",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "mingshan",
						"City_CN": "名山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yingjing",
						"City_CN": "荥经",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "hanyuan",
						"City_CN": "汉源",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shimian",
						"City_CN": "石棉",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "tianquan",
						"City_CN": "天全",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "lushan",
						"City_CN": "芦山",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "baoxing",
						"City_CN": "宝兴",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yucheng",
						"City_CN": "雨城",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "ganzi",
						"City_CN": "甘孜",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "kangding",
						"City_CN": "康定",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "luding",
						"City_CN": "泸定",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "danba",
						"City_CN": "丹巴",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiulong",
						"City_CN": "九龙",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "yajiang",
						"City_CN": "雅江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "daofu",
						"City_CN": "道孚",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "luhuo",
						"City_CN": "炉霍",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xinlong",
						"City_CN": "新龙",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "dege",
						"City_CN": "德格",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "baiyu",
						"City_CN": "白玉",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shiqu",
						"City_CN": "石渠",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "seda",
						"City_CN": "色达",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "litang",
						"City_CN": "理塘",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "batang",
						"City_CN": "巴塘",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xiangcheng",
						"City_CN": "乡城",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "daocheng",
						"City_CN": "稻城",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "derong",
						"City_CN": "得荣",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "aba",
						"City_CN": "阿坝",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wenchuan",
						"City_CN": "汶川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "lixian",
						"City_CN": "理县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "maoxian",
						"City_CN": "茂县",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "songfan",
						"City_CN": "松潘",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiuzhaigou",
						"City_CN": "九寨沟",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jinchuan",
						"City_CN": "金川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "xiaojin",
						"City_CN": "小金",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "heishui",
						"City_CN": "黑水",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "maerkang",
						"City_CN": "马尔康",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "rangtang",
						"City_CN": "壤塘",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "nuoergai",
						"City_CN": "若尔盖",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "hongyuan",
						"City_CN": "红原",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "deyang",
						"City_CN": "德阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "zhongjiang",
						"City_CN": "中江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "guanghan",
						"City_CN": "广汉",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "shifang",
						"City_CN": "什邡",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "mianzhu",
						"City_CN": "绵竹",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "luojiang",
						"City_CN": "罗江",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jingyang",
						"City_CN": "旌阳",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "guangyuan",
						"City_CN": "广元",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "wangcang",
						"City_CN": "旺苍",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "qingchuan",
						"City_CN": "青川",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "jiange",
						"City_CN": "剑阁",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "cangxi",
						"City_CN": "苍溪",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "lizhou",
						"City_CN": "利州",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "zhaohua",
						"City_CN": "昭化",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "chaotian",
						"City_CN": "朝天",
						"Province_EN": "sichuan",
						"Province_CN": "四川"
					},
					{
						"City_EN": "guangzhou",
						"City_CN": "广州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "panyu",
						"City_CN": "番禺",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "conghua",
						"City_CN": "从化",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zengcheng",
						"City_CN": "增城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huadu",
						"City_CN": "花都",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "liwan",
						"City_CN": "荔湾",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yuexiu",
						"City_CN": "越秀",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "haizhu",
						"City_CN": "海珠",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "tianhe",
						"City_CN": "天河",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "baiyun",
						"City_CN": "白云",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huangpu",
						"City_CN": "黄埔",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "nansha",
						"City_CN": "南沙",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "shaoguan",
						"City_CN": "韶关",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "ruyuan",
						"City_CN": "乳源",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "shixing",
						"City_CN": "始兴",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "wengyuan",
						"City_CN": "翁源",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "lechang",
						"City_CN": "乐昌",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "renhua",
						"City_CN": "仁化",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "nanxiong",
						"City_CN": "南雄",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xinfeng",
						"City_CN": "新丰",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "qujiang",
						"City_CN": "曲江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zhenjiang",
						"City_CN": "浈江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "wujiang",
						"City_CN": "武江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huizhou",
						"City_CN": "惠州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "boluo",
						"City_CN": "博罗",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huiyang",
						"City_CN": "惠阳",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huidong",
						"City_CN": "惠东",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "longmen",
						"City_CN": "龙门",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huicheng",
						"City_CN": "惠城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "meizhou",
						"City_CN": "梅州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xingning",
						"City_CN": "兴宁",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jiaoling",
						"City_CN": "蕉岭",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "dabu",
						"City_CN": "大埔",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "meijiang",
						"City_CN": "梅江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "fengshun",
						"City_CN": "丰顺",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "pingyuan",
						"City_CN": "平远",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "wuhua",
						"City_CN": "五华",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "meixian",
						"City_CN": "梅县",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "shantou",
						"City_CN": "汕头",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chaoyang",
						"City_CN": "潮阳",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chenghai",
						"City_CN": "澄海",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "nanao",
						"City_CN": "南澳",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "longhu",
						"City_CN": "龙湖",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jinping",
						"City_CN": "金平",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "haojiang",
						"City_CN": "濠江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chaonan",
						"City_CN": "潮南",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "shenzhen",
						"City_CN": "深圳",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "luohu",
						"City_CN": "罗湖",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "futian",
						"City_CN": "福田",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "nanshan",
						"City_CN": "南山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "baoan",
						"City_CN": "宝安",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "longgang",
						"City_CN": "龙岗",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yantian",
						"City_CN": "盐田",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "longhua",
						"City_CN": "龙华",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "pingshan",
						"City_CN": "坪山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zhuhai",
						"City_CN": "珠海",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "doumen",
						"City_CN": "斗门",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jinwan",
						"City_CN": "金湾",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xiangzhou",
						"City_CN": "香洲",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "foshan",
						"City_CN": "佛山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "shunde",
						"City_CN": "顺德",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "sanshui",
						"City_CN": "三水",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "nanhai",
						"City_CN": "南海",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "gaoming",
						"City_CN": "高明",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chancheng",
						"City_CN": "禅城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zhaoqing",
						"City_CN": "肇庆",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "guangning",
						"City_CN": "广宁",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "sihui",
						"City_CN": "四会",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "duanzhou",
						"City_CN": "端州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "deqing",
						"City_CN": "德庆",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huaiji",
						"City_CN": "怀集",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "fengkai",
						"City_CN": "封开",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "gaoyao",
						"City_CN": "高要",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "dinghu",
						"City_CN": "鼎湖",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zhanjiang",
						"City_CN": "湛江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "wuchuan",
						"City_CN": "吴川",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "leizhou",
						"City_CN": "雷州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xuwen",
						"City_CN": "徐闻",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "lianjiang",
						"City_CN": "廉江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chikan",
						"City_CN": "赤坎",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "suixi",
						"City_CN": "遂溪",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "potou",
						"City_CN": "坡头",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xiashan",
						"City_CN": "霞山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "mazhang",
						"City_CN": "麻章",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jiangmen",
						"City_CN": "江门",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "kaiping",
						"City_CN": "开平",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xinhui",
						"City_CN": "新会",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "enping",
						"City_CN": "恩平",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "taishan",
						"City_CN": "台山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "pengjiang",
						"City_CN": "蓬江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "heshan",
						"City_CN": "鹤山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jianghai",
						"City_CN": "江海",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "heyuan",
						"City_CN": "河源",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zijin",
						"City_CN": "紫金",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "lianping",
						"City_CN": "连平",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "heping",
						"City_CN": "和平",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "longchuan",
						"City_CN": "龙川",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "dongyuan",
						"City_CN": "东源",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yuancheng",
						"City_CN": "源城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "qingyuan",
						"City_CN": "清远",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "liannan",
						"City_CN": "连南",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "lianzhou",
						"City_CN": "连州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "lianshan",
						"City_CN": "连山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yangshan",
						"City_CN": "阳山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "fogang",
						"City_CN": "佛冈",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yingde",
						"City_CN": "英德",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "qingxin",
						"City_CN": "清新",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "qingcheng",
						"City_CN": "清城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yunfu",
						"City_CN": "云浮",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "luoding",
						"City_CN": "罗定",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xinxing",
						"City_CN": "新兴",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yunan",
						"City_CN": "郁南",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yuncheng",
						"City_CN": "云城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yunan",
						"City_CN": "云安",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chaozhou",
						"City_CN": "潮州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "raoping",
						"City_CN": "饶平",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "chaoan",
						"City_CN": "潮安",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xiangqiao",
						"City_CN": "湘桥",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "dongguan",
						"City_CN": "东莞",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "zhongshan",
						"City_CN": "中山",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yangjiang",
						"City_CN": "阳江",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yangchun",
						"City_CN": "阳春",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yangdong",
						"City_CN": "阳东",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "yangxi",
						"City_CN": "阳西",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jiangcheng",
						"City_CN": "江城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jieyang",
						"City_CN": "揭阳",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jiexi",
						"City_CN": "揭西",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "puning",
						"City_CN": "普宁",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huilai",
						"City_CN": "惠来",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "jiedong",
						"City_CN": "揭东",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "rongcheng",
						"City_CN": "榕城",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "maoming",
						"City_CN": "茂名",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "gaozhou",
						"City_CN": "高州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "huazhou",
						"City_CN": "化州",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "dianbai",
						"City_CN": "电白",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "xinyi",
						"City_CN": "信宜",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "maonan",
						"City_CN": "茂南",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "shanwei",
						"City_CN": "汕尾",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "haifeng",
						"City_CN": "海丰",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "lufeng",
						"City_CN": "陆丰",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "luhe",
						"City_CN": "陆河",
						"Province_EN": "guangdong",
						"Province_CN": "广东"
					},
					{
						"City_EN": "kunming",
						"City_CN": "昆明",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "wuhua",
						"City_CN": "五华",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "dongchuan",
						"City_CN": "东川",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xundian",
						"City_CN": "寻甸",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jinning",
						"City_CN": "晋宁",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yiliang",
						"City_CN": "宜良",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "shilin",
						"City_CN": "石林",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "chenggong",
						"City_CN": "呈贡",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "fumin",
						"City_CN": "富民",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "songming",
						"City_CN": "嵩明",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "luquan",
						"City_CN": "禄劝",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "anning",
						"City_CN": "安宁",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "taihuashan",
						"City_CN": "太华山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "panlong",
						"City_CN": "盘龙",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "guandu",
						"City_CN": "官渡",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xishan",
						"City_CN": "西山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "dali",
						"City_CN": "大理",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yunlong",
						"City_CN": "云龙",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yangbi",
						"City_CN": "漾濞",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yongping",
						"City_CN": "永平",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "binchuan",
						"City_CN": "宾川",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "midu",
						"City_CN": "弥渡",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xiangyun",
						"City_CN": "祥云",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "weishan",
						"City_CN": "巍山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jianchuan",
						"City_CN": "剑川",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "eryuan",
						"City_CN": "洱源",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "heqing",
						"City_CN": "鹤庆",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "nanjian",
						"City_CN": "南涧",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "honghe",
						"City_CN": "红河",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "shiping",
						"City_CN": "石屏",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jianshui",
						"City_CN": "建水",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "mile",
						"City_CN": "弥勒",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yuanyang",
						"City_CN": "元阳",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lvchun",
						"City_CN": "绿春",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "kaiyuan",
						"City_CN": "开远",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "gejiu",
						"City_CN": "个旧",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "mengzi",
						"City_CN": "蒙自",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "pingbian",
						"City_CN": "屏边",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "luxi",
						"City_CN": "泸西",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jinping",
						"City_CN": "金平",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "hekou",
						"City_CN": "河口",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "qujing",
						"City_CN": "曲靖",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "zhanyi",
						"City_CN": "沾益",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "luliang",
						"City_CN": "陆良",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "fuyuan",
						"City_CN": "富源",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "malong",
						"City_CN": "马龙",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "shizong",
						"City_CN": "师宗",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "luoping",
						"City_CN": "罗平",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "huize",
						"City_CN": "会泽",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xuanwei",
						"City_CN": "宣威",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "qilin",
						"City_CN": "麒麟",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "baoshan",
						"City_CN": "保山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "longyang",
						"City_CN": "隆阳",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "longling",
						"City_CN": "龙陵",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "sidian",
						"City_CN": "施甸",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "changning",
						"City_CN": "昌宁",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "tengchong",
						"City_CN": "腾冲",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "wenshan",
						"City_CN": "文山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xichou",
						"City_CN": "西畴",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "maguan",
						"City_CN": "马关",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "malipo",
						"City_CN": "麻栗坡",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yanshan",
						"City_CN": "砚山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "qiubei",
						"City_CN": "丘北",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "guangnan",
						"City_CN": "广南",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "funing",
						"City_CN": "富宁",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yuxi",
						"City_CN": "玉溪",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "chengjiang",
						"City_CN": "澄江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jiangchuan",
						"City_CN": "江川",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "tonghai",
						"City_CN": "通海",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "huaning",
						"City_CN": "华宁",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xinping",
						"City_CN": "新平",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yimen",
						"City_CN": "易门",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "eshan",
						"City_CN": "峨山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yuanjiang",
						"City_CN": "元江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "hongta",
						"City_CN": "红塔",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "chuxiong",
						"City_CN": "楚雄",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "dayao",
						"City_CN": "大姚",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yuanmou",
						"City_CN": "元谋",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yaoan",
						"City_CN": "姚安",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "mouding",
						"City_CN": "牟定",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "nanhua",
						"City_CN": "南华",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "wuding",
						"City_CN": "武定",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lufeng",
						"City_CN": "禄丰",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "shuangbai",
						"City_CN": "双柏",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yongren",
						"City_CN": "永仁",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "puer",
						"City_CN": "普洱",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jinggu",
						"City_CN": "景谷",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jingdong",
						"City_CN": "景东",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lancang",
						"City_CN": "澜沧",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "simao",
						"City_CN": "思茅",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "mojiang",
						"City_CN": "墨江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jiangcheng",
						"City_CN": "江城",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "menglian",
						"City_CN": "孟连",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "ximeng",
						"City_CN": "西盟",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "zhenyuan",
						"City_CN": "镇沅",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "ninger",
						"City_CN": "宁洱",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "zhaotong",
						"City_CN": "昭通",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "ludian",
						"City_CN": "鲁甸",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yiliang",
						"City_CN": "彝良",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "zhenxiong",
						"City_CN": "镇雄",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "weixin",
						"City_CN": "威信",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "qiaojia",
						"City_CN": "巧家",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "suijiang",
						"City_CN": "绥江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yongshan",
						"City_CN": "永善",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yanjin",
						"City_CN": "盐津",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "daguan",
						"City_CN": "大关",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "shuifu",
						"City_CN": "水富",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "zhaoyang",
						"City_CN": "昭阳",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lincang",
						"City_CN": "临沧",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "cangyuan",
						"City_CN": "沧源",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "gengma",
						"City_CN": "耿马",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "shuangjiang",
						"City_CN": "双江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "fengqing",
						"City_CN": "凤庆",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yongde",
						"City_CN": "永德",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yunxian",
						"City_CN": "云县",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "zhenkang",
						"City_CN": "镇康",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "linxiang",
						"City_CN": "临翔",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "nujiang",
						"City_CN": "怒江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "fugong",
						"City_CN": "福贡",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lanping",
						"City_CN": "兰坪",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lushui",
						"City_CN": "泸水",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "gongshan",
						"City_CN": "贡山",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xianggelila",
						"City_CN": "香格里拉",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "deqin",
						"City_CN": "德钦",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "weixi",
						"City_CN": "维西",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "diqing",
						"City_CN": "迪庆",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lijiang",
						"City_CN": "丽江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yongsheng",
						"City_CN": "永胜",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "huaping",
						"City_CN": "华坪",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "ninglang",
						"City_CN": "宁蒗",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "gucheng",
						"City_CN": "古城",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yulong",
						"City_CN": "玉龙",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "dehong",
						"City_CN": "德宏",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "longchuan",
						"City_CN": "陇川",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "yingjiang",
						"City_CN": "盈江",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "ruili",
						"City_CN": "瑞丽",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "lianghe",
						"City_CN": "梁河",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "mangshi",
						"City_CN": "芒市",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "jinghong",
						"City_CN": "景洪",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "xishuangbanna",
						"City_CN": "西双版纳",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "menghai",
						"City_CN": "勐海",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "mengla",
						"City_CN": "勐腊",
						"Province_EN": "yunnan",
						"Province_CN": "云南"
					},
					{
						"City_EN": "nanning",
						"City_CN": "南宁",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xingning",
						"City_CN": "兴宁",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yongning",
						"City_CN": "邕宁",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "hengxian",
						"City_CN": "横县",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "longan",
						"City_CN": "隆安",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "mashan",
						"City_CN": "马山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "shanglin",
						"City_CN": "上林",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "wuming",
						"City_CN": "武鸣",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "binyang",
						"City_CN": "宾阳",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "qingxiu",
						"City_CN": "青秀",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "jiangnan",
						"City_CN": "江南",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xixiangtang",
						"City_CN": "西乡塘",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "liangqing",
						"City_CN": "良庆",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "chongzuo",
						"City_CN": "崇左",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tiandeng",
						"City_CN": "天等",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "longzhou",
						"City_CN": "龙州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "pingxiang",
						"City_CN": "凭祥",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "daxin",
						"City_CN": "大新",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "fusui",
						"City_CN": "扶绥",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "ningming",
						"City_CN": "宁明",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "jiangzhou",
						"City_CN": "江州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "liuzhou",
						"City_CN": "柳州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "liucheng",
						"City_CN": "柳城",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "chengzhong",
						"City_CN": "城中",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "luzhai",
						"City_CN": "鹿寨",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "liujiang",
						"City_CN": "柳江",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "rongan",
						"City_CN": "融安",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "rongshui",
						"City_CN": "融水",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "sanjiang",
						"City_CN": "三江",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yufeng",
						"City_CN": "鱼峰",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "liunan",
						"City_CN": "柳南",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "liubei",
						"City_CN": "柳北",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "laibin",
						"City_CN": "来宾",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xicheng",
						"City_CN": "忻城",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "jinxiu",
						"City_CN": "金秀",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xiangzhou",
						"City_CN": "象州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "wuxuan",
						"City_CN": "武宣",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "heshan",
						"City_CN": "合山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xingbin",
						"City_CN": "兴宾",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "guilin",
						"City_CN": "桂林",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xiufeng",
						"City_CN": "秀峰",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "longsheng",
						"City_CN": "龙胜",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yongfu",
						"City_CN": "永福",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "lingui",
						"City_CN": "临桂",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xingan",
						"City_CN": "兴安",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "lingchuan",
						"City_CN": "灵川",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "quanzhou",
						"City_CN": "全州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "guanyang",
						"City_CN": "灌阳",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yangshuo",
						"City_CN": "阳朔",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "gongcheng",
						"City_CN": "恭城",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "pingle",
						"City_CN": "平乐",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "lipu",
						"City_CN": "荔浦",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "ziyuan",
						"City_CN": "资源",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "diecai",
						"City_CN": "叠彩",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xiangshan",
						"City_CN": "象山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "qixing",
						"City_CN": "七星",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yanshan",
						"City_CN": "雁山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "wuzhou",
						"City_CN": "梧州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tengxian",
						"City_CN": "藤县",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "wanxiu",
						"City_CN": "万秀",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "cangwu",
						"City_CN": "苍梧",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "mengshan",
						"City_CN": "蒙山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "cenxi",
						"City_CN": "岑溪",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "changzhou",
						"City_CN": "长洲",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "longwei",
						"City_CN": "龙圩",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "hezhou",
						"City_CN": "贺州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "zhaoping",
						"City_CN": "昭平",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "fuchuan",
						"City_CN": "富川",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "zhongshan",
						"City_CN": "钟山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "babu",
						"City_CN": "八步",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "pinggui",
						"City_CN": "平桂",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "guigang",
						"City_CN": "贵港",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "guiping",
						"City_CN": "桂平",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "pingnan",
						"City_CN": "平南",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "gangbei",
						"City_CN": "港北",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "gangnan",
						"City_CN": "港南",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tantang",
						"City_CN": "覃塘",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yulin",
						"City_CN": "玉林",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "bobai",
						"City_CN": "博白",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "beiliu",
						"City_CN": "北流",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "rongxian",
						"City_CN": "容县",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "luchuan",
						"City_CN": "陆川",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xingye",
						"City_CN": "兴业",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yuzhou",
						"City_CN": "玉州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "fumian",
						"City_CN": "福绵",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "baise",
						"City_CN": "百色",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "napo",
						"City_CN": "那坡",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tianyang",
						"City_CN": "田阳",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "debao",
						"City_CN": "德保",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "jingxi",
						"City_CN": "靖西",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tiandong",
						"City_CN": "田东",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "pingguo",
						"City_CN": "平果",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "longlin",
						"City_CN": "隆林",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "xilin",
						"City_CN": "西林",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "leye",
						"City_CN": "乐业",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "lingyun",
						"City_CN": "凌云",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tianlin",
						"City_CN": "田林",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "youjiang",
						"City_CN": "右江",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "qinzhou",
						"City_CN": "钦州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "pubei",
						"City_CN": "浦北",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "lingshan",
						"City_CN": "灵山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "qinnan",
						"City_CN": "钦南",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "qinbei",
						"City_CN": "钦北",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "hechi",
						"City_CN": "河池",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tiane",
						"City_CN": "天峨",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "donglan",
						"City_CN": "东兰",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "bama",
						"City_CN": "巴马",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "huanjiang",
						"City_CN": "环江",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "luocheng",
						"City_CN": "罗城",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yizhou",
						"City_CN": "宜州",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "fengshan",
						"City_CN": "凤山",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "nandan",
						"City_CN": "南丹",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "andu",
						"City_CN": "都安",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "dahua",
						"City_CN": "大化",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "jinchengjiang",
						"City_CN": "金城江",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "beihai",
						"City_CN": "北海",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "hepu",
						"City_CN": "合浦",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "weizhoudao",
						"City_CN": "涠洲岛",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "haicheng",
						"City_CN": "海城",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "yinhai",
						"City_CN": "银海",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "tieshangang",
						"City_CN": "铁山港",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "fangchenggang",
						"City_CN": "防城港",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "shangsi",
						"City_CN": "上思",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "dongxing",
						"City_CN": "东兴",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "gangkou",
						"City_CN": "港口",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "fangcheng",
						"City_CN": "防城",
						"Province_EN": "guangxi",
						"Province_CN": "广西"
					},
					{
						"City_EN": "haikou",
						"City_CN": "海口",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "xiuying",
						"City_CN": "秀英",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "longhua",
						"City_CN": "龙华",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "qiongshan",
						"City_CN": "琼山",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "meilan",
						"City_CN": "美兰",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "sanya",
						"City_CN": "三亚",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "dongfang",
						"City_CN": "东方",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "lingao",
						"City_CN": "临高",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "chengmai",
						"City_CN": "澄迈",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "danzhou",
						"City_CN": "儋州",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "changjiang",
						"City_CN": "昌江",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "baisha",
						"City_CN": "白沙",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "qiongzhong",
						"City_CN": "琼中",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "dingan",
						"City_CN": "定安",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "tunchang",
						"City_CN": "屯昌",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "qionghai",
						"City_CN": "琼海",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "wenchang",
						"City_CN": "文昌",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "haitang",
						"City_CN": "海棠",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "baoting",
						"City_CN": "保亭",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "wanning",
						"City_CN": "万宁",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "lingshui",
						"City_CN": "陵水",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "jiyang",
						"City_CN": "吉阳",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "tianya",
						"City_CN": "天涯",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "ledong",
						"City_CN": "乐东",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "wuzhishan",
						"City_CN": "五指山",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "yazhou",
						"City_CN": "崖州",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "sansha",
						"City_CN": "三沙",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "xisha",
						"City_CN": "西沙",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "zhongsha",
						"City_CN": "中沙",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "nansha",
						"City_CN": "南沙",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "huangyandao",
						"City_CN": "黄岩岛",
						"Province_EN": "hainan",
						"Province_CN": "海南"
					},
					{
						"City_EN": "hongkong",
						"City_CN": "香港",
						"Province_EN": "hongkong",
						"Province_CN": "香港"
					},
					{
						"City_EN": "jiulong",
						"City_CN": "九龙",
						"Province_EN": "hongkong",
						"Province_CN": "香港"
					},
					{
						"City_EN": "xinjie",
						"City_CN": "新界",
						"Province_EN": "hongkong",
						"Province_CN": "香港"
					},
					{
						"City_EN": "macao",
						"City_CN": "澳门",
						"Province_EN": "macao",
						"Province_CN": "澳门"
					},
					{
						"City_EN": "dangzidao",
						"City_CN": "氹仔岛",
						"Province_EN": "macao",
						"Province_CN": "澳门"
					},
					{
						"City_EN": "luhuandao",
						"City_CN": "路环岛",
						"Province_EN": "macao",
						"Province_CN": "澳门"
					},
					{
						"City_EN": "Taibei",
						"City_CN": "台北",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "taoyuan",
						"City_CN": "桃园",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "xinzhu",
						"City_CN": "新竹",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "yilan",
						"City_CN": "宜兰",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "gaoxiong",
						"City_CN": "高雄",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "jiayi",
						"City_CN": "嘉义",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "tainan",
						"City_CN": "台南",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "taidong",
						"City_CN": "台东",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "pingdong",
						"City_CN": "屏东",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "taizhong",
						"City_CN": "台中",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "miaoli",
						"City_CN": "苗栗",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "zhanghua",
						"City_CN": "彰化",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "nantou",
						"City_CN": "南投",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "hualian",
						"City_CN": "花莲",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					},
					{
						"City_EN": "yunlin",
						"City_CN": "云林",
						"Province_EN": "taiwan",
						"Province_CN": "台湾"
					}
				],
				searchCity: '请输入搜索城市',
				result: 0,
				history: [],
				flag: 0
			}
		},
		onLoad() {
			if (uni.getStorageSync('history').length > 0) {
				this.history = uni.getStorageSync('history');
				this.flag = 1;
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1,
					animationType: 'slide-out-left',
					animationDuration: 300
				})
			},
			search() {
				for (var i = 0; i < this.city.length - 1; i++) {
					if (this.city[i].City_CN == this.searchCity) {
						console.log(this.searchCity);
						this.result = 1; //判断查询后是否有此城市
						break;
					}
				}
				if (this.result == 1) {
					for (var i = 0; i < this.history.length; i++) {
						if (this.searchCity == this.history[i]) {
							this.history.splice(i, 1);
						}
					}
					if (this.history.length >= 14) {
						this.history.shift();
						this.history.push(this.searchCity);
					} else {
						this.history.push(this.searchCity);
					}
					uni.setStorageSync("history", this.history);

					var cityArr = uni.getStorageSync("city_key");
					for (var i = 0; i < cityArr.length; i++) {
						if (cityArr[i] == this.searchCity) {
							this.result = 2;
							uni.reLaunch({
								url: '../index/index?city=' + this.searchCity,
								animationType: 'pop-out',
								animationDuration: 300
							});
						}
					}
					if (this.result == 1) {
						cityArr.push(this.searchCity);
						uni.setStorageSync("city_key", cityArr);
						uni.reLaunch({
							url: '../index/index?city=' + this.searchCity,
							animationType: 'pop-out',
							animationDuration: 300
						});
					}
				} else if (this.result == 0) {
					uni.showModal({
						title: '查询错误',
						content: '没有此城市信息，请重新查询',
						showCancel: false
					})
				}
			},
			goIndex(val) {
				var flag = 0;
				var cityArr = uni.getStorageSync('city_key')
				for (var i = 0; i < cityArr.length; i++) {
					if (cityArr[i] != val) {
						flag++;
					}
				}
				if (flag == cityArr.length) {
					cityArr.push(val);
					uni.setStorageSync('city_key', cityArr);
				}
				uni.reLaunch({
					url: '../index/index?city=' + val,
					animationType: 'pop-out',
					animationDuration: 300
				})
			},
			change() {
				if (this.searchCity == '请输入搜索城市') this.searchCity = '';
			},
			clear() {
				this.history = [];
				uni.setStorageSync('history', this.history);
				this.flag = 0;
			}
		}
	}
</script>

<style>
	page {
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

	.title {
		font-size: 50upx;
		color: #fff;
		display: inline;
		margin-left: -80upx;
	}

	.searchBar {
		width: 90%;
		height: 70upx;
		margin: 0 auto;
	}

	input {
		width: 75%;
		padding-left: 40upx;
		height: 66upx;
		border: 2upx rgba(192, 192, 192, .4) solid;
		border-radius: 55upx;
		background-color: rgba(192, 192, 192, .1);
		font-size: 30upx;
		color: #333333;
		float: left;
	}

	.sure {
		width: 18%;
		height: 70upx;
		border: 2upx rgba(192, 192, 192, .4) solid;
		background-color: rgba(192, 192, 192, .1);
		border-radius: 55upx;
		font-size: 30upx;
		color: #333333;
		float: right;
	}

	.history {
		width: 90%;
		margin: 30upx auto 0;
	}

	.history text {
		float: left;
		width: 100%;
		font-size: 40upx;
		font-weight: bold;
		margin-bottom: 15upx;
	}

	.history .boder {
		width: 100%;
		margin-bottom: 30upx;
		overflow: hidden;
	}

	.history-item {
		float: left;
		margin-right: 10upx;
		font-size: 36upx;
		color: #333333;
		border: 2upx rgba(192, 192, 192, .4) solid;
		border-radius: 15upx;
		background-color: rgba(192, 192, 192, .1);
	}

	.clear {
		display: block;
		font-size: 36upx;
		font-weight: bold;
		width: 240upx;
		border: 2upx rgba(192, 192, 192, .4) solid;
		border-radius: 55upx;
		background-color: rgba(192, 192, 192, .1);
		text-align: center;
		margin: 0 auto;
	}
</style>
