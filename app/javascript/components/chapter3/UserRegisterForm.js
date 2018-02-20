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
      onSubmit: function() {
        this.errors = []
        if(this.valid()) {
          console.log('submit!')
        }
      },
      valid: function() {
        this.validateLastName()
        this.validateFirstName()
        this.validateAge()
        this.validateEmail()
        return this.errors.length === 0
      },
      validateLastName: function() {
        if(this.lastname.length == 0) this.errors.push({ key: 'lastname', message: '苗字を入力してください'})
      },
      validateFirstName: function() {
        if(this.firstname.length == 0) this.errors.push({ key: 'firstname', message: '名前を入力してください'})
      },
      validateAge: function() {
        if(this.age <= 0) this.errors.push({ key: 'age', message: '年齢を正しく入力してください' })
      },
      validateEmail: function() {
        if(this.email == '') this.errors.push({ key: 'email', message: 'メールアドレスを入力してください' })
      },
  }
}