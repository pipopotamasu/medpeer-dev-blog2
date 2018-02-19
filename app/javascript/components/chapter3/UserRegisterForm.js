export default {
  data: function () {
    return {
      errors: [],
      lastname: '',
      firstname: '',
      age: 0,
      address: '',
      email: '',
      phone: 0
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
        true
      }
  }
}