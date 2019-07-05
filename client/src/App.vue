<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        type="light"
      >
        <router-link
          :to="{ name: 'home'}"
        >
          <b-navbar-brand>
            LAGERVERWALTUNG
          </b-navbar-brand>
        </router-link>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template slot="button-content">
              User
            </template>
            <b-dropdown-item :to="{ name: 'warehouselocation'}">
              Settings
            </b-dropdown-item>
            <b-dropdown-item href="#">
              Sign Out
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
       
      </b-navbar>
    </div>
    <pre>{{user}}</pre>
    <router-view />
  </div>
</template>

<script>

export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    }
  }
}

</script>