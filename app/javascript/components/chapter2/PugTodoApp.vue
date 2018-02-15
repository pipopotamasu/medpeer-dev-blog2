<template lang="pug">
  div#pug-todo-app
    input(v-model="input" type="text" size="20")
    button(@click="addTodo") Submit
    ul
      template(v-for="(todo, i) in todos")
        li
          input(v-model="todo.checked" type="checkbox" :id="'todo-' + i")
          label(:class="{ done: todo.checked }" :for="'todo-' + i") {{ todo.body }}
          span(@click="deleteTodo(i)" class="delete") [×]
</template>

<script>
export default {
  data: function () {
    return {
      input: '',
      todos: [ { body: 'サンプルだよ!', checked: false } ]
    }
  },
  methods: {
    addTodo: function() {
      if(this.input == '') return false;
      this.todos.push({ body: this.input, checked: false })
      this.input = '';
    },
    deleteTodo: function(index) {
      console.log('Deleted!')
    }
  }
}
</script>
