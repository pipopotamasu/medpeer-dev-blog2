import Vue from 'vue'
import UserRegisterFormVue from '../../components/chapter3/UserRegisterForm.vue'
import UserRegisterForm from '../../components/chapter3/UserRegisterForm'

Vue.component('user-register-form-vue', UserRegisterFormVue)
Vue.component('user-register-form', UserRegisterForm)

new Vue({
  el: '#user-register-forms'
})