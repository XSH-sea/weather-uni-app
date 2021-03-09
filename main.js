import Vue from 'vue'
import App from './App'
import {myAjax} from './common/request.js'

Vue.config.productionTip = false
Vue.prototype.myAjax = myAjax;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
