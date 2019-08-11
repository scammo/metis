<template>
  <b-container class="login mt-5">
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
      <div class="alert alert-danger my-3" v-if="alert.message === 'Invalid login'" role="alert">
        Benutzer oder Passwort falsch
      </div>
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
      },
      alert: {
        message: null
      }
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      this.$store.dispatch('auth/authenticate', { strategy: 'local', ...this.login })
        .then(res => { this.$router.push({ name: 'home' }) })
        .catch((err) => { this.alert = err.data })
    }
  }
}
</script>
