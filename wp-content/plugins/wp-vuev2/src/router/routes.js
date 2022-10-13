import App from '../App.vue.js';
import Doc from '../Doc.vue.js';
import Video from '../Video.vue.js';
import Search from '../Search.vue.js';

var routes = [
  {
    path: '/',
    component: Search
  },
  {
    path: '/docs',
    component: Doc,
    props: (route) => ({ id: route.query.id, has_model: route.query.has_model, thumbnail: route.query.thumbnail, related: route.query.related, keyword: route.query.keyword})
  },
  {
    path: '/videos',
    component: Video
  },
  {
    path: '/search',
    component: Search,
    props: (route) => ({ keyword: route.query.keyword, type: route.query.type, val: route.query.val, label: route.query.label })
  }
  
]

var router = new VueRouter({
    routes: routes,
    base: '/'
});

export default router;
