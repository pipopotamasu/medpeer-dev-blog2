<template>
  <div id="vue-app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

const token = document.getElementsByName('csrf-token')[0].getAttribute('content')
axios.defaults.headers.common['X-CSRF-Token'] = token

export default {
  data () {
    return {
      message: "Hello Vue!"
    }
  },
  created () {
    axios.post('/users')
  }
}
</script>
