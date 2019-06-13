<template>
  <b-container class="login">
    <b-form @submit="onSubmit">
      <h3>Login</h3>
      <b-form-input
        id="input-email"
        v-model="login.email"
        type="email"
        required
        placeholder="Enter email"
      />
      <b-form-input
        id="input-password"
        v-model="login.password"
        class="mt-1"
        type="password"
        required
        placeholder="Enter password"
      />
      <b-button
        class="mt-2"
        variant="success"
        type="submit"
      >
        Login
      </b-button>
    </b-form>
  </b-container>
</template>

<script>
export default {
  data: function () {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$store.dispatch('auth/authenticate', { strategy: 'local', ...this.login })
        .then(res => { this.$router.push({ name: 'home' }) })
        .catch(() => { })
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  max-width: 350px;
}
</style>
