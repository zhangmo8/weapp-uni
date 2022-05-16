import Vue from 'vue'
import App from './App'
import store from './store'
import globalMixin from "@/mixin/global.vue"

Vue.config.productionTip = false
Vue.mixin(globalMixin);
App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

// 引入uview的封装vuex操作
const vuexStore = require('@/mixin/vuex.js')
Vue.mixin(vuexStore)

const app = new Vue({
	store,
    ...App
})
app.$mount()
