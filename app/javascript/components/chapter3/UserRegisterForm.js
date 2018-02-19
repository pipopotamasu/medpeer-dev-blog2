export default {
  data: function () {
    return {
      errors: ['hoge', 'fuga'],
      lastname: '',
      firstname: '',
      age: 0,
      address: '',
      email: '',
      phone: 0
    }
  },
  methods: {
      hoge: function(e) {
        e.preventDefault()
        console.log(this.lastname)
      }
  }
}