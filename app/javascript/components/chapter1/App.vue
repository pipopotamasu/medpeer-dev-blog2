<template>
  <div id="vue-app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: "Hello Vue!"
    }
  },
  created () {
    this.axios.post('/users')
  }
}
</script>
