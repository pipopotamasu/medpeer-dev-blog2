<template>
  <div id="vue-app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'
import { csrfToken } from 'rails-ujs'

axios.defaults.headers.common['X-CSRF-Token'] = csrfToken()

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
