import Vue from 'vue'
import TodoApp from '../../components/chapter2/TodoApp.vue'
import PugTodoApp from '../../components/chapter2/PugTodoApp.vue'

Vue.component('todo-app', TodoApp)
Vue.component('pug-todo-app', PugTodoApp)

new Vue({
  el: '#app'
})
