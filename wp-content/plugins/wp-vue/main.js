import routes from './src/router/routes.js'
import App from './src/App.vue.js'
import Doc from './src/Doc.vue.js'
import Video from './src/Video.vue.js'
import Search from './src/Search.vue.js'
import languaje from './src/components/languajes.vue.js'
import { store } from './src/store/store.js'
import { i18n } from './src/plugins/i18n.js'

Vue.config.productionTip = false;
Vue.config.devtools = false;
Vue.config.debug = false;

var app = new Vue({
	el: '#app',
	store,
	i18n,
	router:routes,
	components: {
		'App': App,
		'Doc': Doc,
		'Video':Video,
		//'Searchs': Search,
		'languaje': languaje	
	}
})