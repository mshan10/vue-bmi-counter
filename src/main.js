import Vue from 'vue'
import App from './App.vue'
import Vue2Filters from 'vue2-filters'
import VueMDCAdapter from 'vue-mdc-adapter'
import "vue-mdc-adapter/dist/vue-mdc-adapter.css";

Vue.config.productionTip = false
Vue.use(Vue2Filters)
Vue.use(VueMDCAdapter)

new Vue({
  render: h => h(App),
}).$mount('#app')


