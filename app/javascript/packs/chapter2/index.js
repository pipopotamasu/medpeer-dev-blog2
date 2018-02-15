import Vue from 'vue'
import TodoApp from '../../components/chapter2/TodoApp.vue'

Vue.component('todo-app', TodoApp)

new Vue({
  el: '#app'
})
