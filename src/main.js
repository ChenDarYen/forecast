// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App'

import DegreeFilter from './components/filters/degree'

Vue.use(VueAxios, axios)

Vue.filter('degreeFilter', DegreeFilter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
