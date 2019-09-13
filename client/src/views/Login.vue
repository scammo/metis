<template>
  <div class="login mt-5 mx-auto">
    <b-form @submit="onSubmit">
      <h3 class="text-center">
        <i class="fal fa-user-circle" /> Anmelden
      </h3>
      <p>Melde dich hier mit deinem Synlogy-Konto an.</p>
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
      <div
        v-if="alert.message === 'Invalid login'"
        class="alert alert-danger my-3"
        role="alert"
      >
        Benutzer oder Passwort falsch
      </div>
      <b-button
        class="mt-2 w-100"
        variant="success"
        type="submit"
      >
        Login
      </b-button>
    </b-form>
  </div>
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

<style lang="scss">

  .login{
    max-width:400px;
  }

</style>
