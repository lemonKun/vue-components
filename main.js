import Vue from 'vue';
import App from './App';

import CzMenu from './components/menu/cz-menu';
import CzMenuItem from './components/menu/cz-menu-item';
import CzSubmenu from './components/menu/cz-submenu';

Vue.component('cz-menu', CzMenu);
Vue.component('cz-menu-item', CzMenuItem);
Vue.component('cz-submenu', CzSubmenu);

new Vue({
    el: '#app',
    render: h => h(App)
})