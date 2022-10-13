import search from './components/search.vue.js'
import facets from './components/facets.vue.js'
import docs from './components/docs.vue.js'
import pages from './components/pages.vue.js'
import helperbar from './components/helperbar.vue.js'

export default{
    name: 'Searchs',
    template: '#searchview',
	props: ['keyword', 'type', 'val', 'label', 'search_in', 'filter', 'json_data'],
	components: {
		'search' : search,
		'docs': docs,
		'pages': pages,
		'helperbar': helperbar,
		'facets': facets,
	},
	computed: {
		repo(){
			return this.$store.state.principal.repo;
		}		
	},
	created: function () {
		//this.get_data();
	},
	methods: {
		get_data() {
			//alert("Search");
			this.$store.dispatch('principal/get_data', this.$store.getters['principal/url']);
		}
	},
}