<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        class="blue"
      >
        <router-link
          :to="{ name: 'home'}"
        >
          <b-navbar-brand>
            LAGERVERWALTUNG
          </b-navbar-brand>
        </router-link>
        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav class="mx-auto">
            <b-nav-form class="search">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
              />
            </b-nav-form>
          </b-navbar-nav>
          <b-navbar-nav>
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
        </b-collapse>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>
