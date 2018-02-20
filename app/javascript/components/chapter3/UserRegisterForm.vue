<template>
    <form id="user-register-form-vue" action="hoge" accept-charset="UTF-8" data-remote="true" method="post">
        <input name="utf8" type="hidden" value="✓" />
        <input name="authenticity_token" type="hidden" value="csrftoken入れる" />
        <div class="error-area">
          <p v-for="error in errors" :key="error.key">{{ error.message }}</p>
        </div>
        <div class="form-group">
          <label for="user_lastname">苗字:</label>
          <input type="text" name="user[lastname]" v-model="lastname">
          <label for="user_firstname">名前:</label>
          <input type="text" name="user[firstname]" v-model="firstname">
        </div>
        <div class="form-group">
          <label for="user_age">年齢:</label>
          <input type="text" name="user[age]" v-model="age">
        </div>
        <div class="form-group">
          <label for="user_email">メール:</label>
          <input type="text" name="user[email]" v-model="email">
        </div>
        <div class="submit">
          <button name="button" type="submit" @click.prevent="onSubmit">
            登録する
          </button>
        </div>
    </form>
</template>

<script>
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
</script>