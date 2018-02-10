<template>
  <div id="vue-app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      message: "Hello Vue!"
    }
  },
  created () {
    axios.post('/csrf')
  }
}
</script>
