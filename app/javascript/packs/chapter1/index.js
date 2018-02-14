import Vue from 'vue'
import axios from 'axios'
import { csrfToken } from 'rails-ujs'
import VueAxiosPlugin from '../../plugins/vue-axios'
import App from '../../components/chapter1/App.vue'

Vue.use(VueAxiosPlugin, { axios: axios, csrfToken: csrfToken })

Vue.component('vue-app', App)

new Vue({
  el: '#app'
})
