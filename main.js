import Vue from 'vue';
import App from './App';

import CzMenu from './components/menu/cz-menu';
import CzMenuItem from './components/menu/cz-menu-item';
import CzSubmenu from './components/menu/cz-submenu';

Vue.component('cz-menu', CzMenu);
Vue.component('cz-menu-item', CzMenuItem);
Vue.component('cz-submenu', CzSubmenu);

import VueLazyload from './components/vue-lazyload';
import Loading from './assets/pictures/loading.gif';

import './mock/mock.js';

Vue.use(VueLazyload, {
    preLoad: 1.3,//可见区域的1.3倍
    loading: Loading//loading图片
})

new Vue({
    el: '#app',
    render: h => h(App)
})