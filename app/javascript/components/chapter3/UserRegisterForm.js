export default {
  data: function () {
    return {
      errors: [],
      lastname: '',
      firstname: '',
      age: 0,
      email: ''
    }
  },
  methods: {
      onSubmit: function(e) {
        e.preventDefault()
        if(this.valid()) {
          // submit!
        }
      },
      valid: function() {
        return this.errors.length === 0
      }
  }
}