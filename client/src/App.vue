<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        class="bg-dark px-0"
      >
        <div class="container">
          <router-link
            :to="{ name: 'home'}"
          >
            <b-navbar-brand>
              <img
                class="logo"
                src="https://static.codeanker.de/images/stockit-logo-white.png"
              >
            </b-navbar-brand>
          </router-link>
          <b-navbar-nav
            v-if="user"
            class="ml-auto"
          >
            <div class="useravatar">
              <img :src="gravatar">
            </div>
            <b-nav-item-dropdown right>
              <template slot="button-content">
                {{ user.firstname }} {{ user.lastname }}
              </template>
              <b-dropdown-item :to="{ name: 'warehouselocation'}">
                <i class="fad fa-cog" /> Settings
              </b-dropdown-item>
              <b-dropdown-item href="#">
                <i class="fad fa-sign-out" /> Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </div>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.state.auth.user
    },
    gravatar () {
      return 'https://www.gravatar.com/avatar/3ea573c8e0b309c39c69ae99191d2c60.jpg'
    }
  }
}
</script>

<style lang="scss">

.useravatar {
  width:40px;
  border-radius:50%;
  overflow:hidden;

  img {
    width: 100%;
  }
}
 .logo{
    height: 31px;
  }
</style>
