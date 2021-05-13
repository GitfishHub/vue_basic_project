import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import Less from 'less'
Vue.use(Vant)
Vue.use(Less)
//获取vue的版本号,根据不同的版本号采取不同的策略
// console.log(Vue.version)

//适配
import 'lib-flexible'

Vue.config.productionTip = false
import store from './store'

//mintui导入
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

//全局过滤器的导入
import vFilter from '@/static/js/filter'
for (let key in vFilter) {
	Vue.filter(key, vFilter[key])
}

//md5加密导入
// import md5 from 'js-md5';
// Vue.prototype.$md5 = md5;



//导入vconsole调试工具，发布的时候注释掉！！！
// import vConsole from '@/assets/js/vconsole.js'

new Vue({
	render: h => h(App),
	router,
	store,
}).$mount('#app')
