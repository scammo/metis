<template>
  <div>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="bg-gray-1 py-3"
      variant="primary"
    >
      <div class="container">
        <b-navbar-brand href="#">
          <img
            class="logo"
            src="https://static.codeanker.de/images/stockit-logo-white.png"
            alt="Codeanker Logo"
          >
        </b-navbar-brand>
        <b-collapse
          id="nav-collapse-main"
          is-nav
        >
          <form class="form-inline my-2 my-lg-0 d-none">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            >
            <button
              class="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <span class="user-avatar">
                  <vue-initials-img :name="user.firstname + ' ' + user.lastname" />
                </span>
              </template>
              <b-dropdown-item href="#">
                Profile
              </b-dropdown-item>
              <b-dropdown-item href="#">
                Sign Out
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <b-navbar
      toggleable="lg"
      type="dark"
      class="bg-gray-2 py-1 font-weight-light"
      variant="primary"
    >
      <div class="container">
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <!-- Right aligned nav items -->
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }">
              <i class="fad fa-search" /> Dashboard
            </b-nav-item>
            <b-nav-item :to="{ name: 'boxes'}">
              <i class="fad fa-box" /> Kisten
            </b-nav-item>
            <b-nav-item :to="{ name: 'materials'}">
              <i class="fad fa-baseball" /> Materialien
            </b-nav-item>
            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template v-slot:button-content>
                <i class="fad fa-cogs " /> Einstellungen
              </template>
              <b-dropdown-item :to="{ name: 'warehouselocation' }">
                <i class="fad fa-warehouse" /> Lager
              </b-dropdown-item>
              <b-dropdown-item :to="{ name: 'boxtypes' }">
                <i class="fad fa-boxes " /> Kistentypen
              </b-dropdown-item>
              <b-dropdown-item :to="{ name: 'workgroups' }">
                <i class="fad fa-users-class " /> Arbeitsfelder
              </b-dropdown-item>
              <b-dropdown-item :to="{ name: 'users' }">
                <i class="fad fa-users " /> Benutzer
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <div
      v-if="!user.hideAlert"
      class="container py-3"
    >
      <b-alert
        show
        variant="warning"
        dismissible
        @dismissed="dismissAlert"
      >
        <p class="mb-0">
          <i class="fad fa-exclamation-triangle" /> <span class="font-weight-bold"> Entwicklungsphase</span>
          <br> Dieses System befindet sich noch in der Entwicklung. Wünsche und Fehler können auf <i class="fab fa-github" /> Github eingetragen werden
          <a
            href="https://github.com/dlrg/metis/issues"
            target="_blank"
          > <i class="fad fa-external-link" /> Issues anlegen</a>
        </p>
      </b-alert>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LayoutHeader',
  computed: {
    user () {
      return this.$store.getters['user/current']
    }
  },
  methods: {
    dismissAlert () {
      console.log('dismiss')
      this.$store.dispatch('user/patch', [this.user._id, { ...this.user, hideAlert: true }])
    }
  }
}

</script>

<style lang="scss">

  .user-avatar img{
    height: 32px;
    border-radius: 15px;
  }

  .logo{
    height: 38px;
  }

</style>
