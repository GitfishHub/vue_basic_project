import Vue from "vue";
import Router from "vue-router";


/**
 * 懒加载的工厂
 * @param {*} path
 */
const lazyLoad = path => () => import(`@/views${path}`);

const Home = lazyLoad("/home"); //主页
// import HelloWorld from '@/views/HelloWorld'

Vue.use(Router);

export default new Router({
	mode: "hash",
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			component: Home,
		}
	]
});
