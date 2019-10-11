<template>
  <div class="container">
    <h5>Benutzer</h5>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            Vorname
          </th>
          <th scope="col">
            Nachname
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Erstellt am
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user._id"
        >
          <td>{{ user.firstname }}</td>
          <td>{{ user.lastname }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.createdAt | formatDate }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import formatDate from '../filters/formatDate.js'

export default {
  filters: {
    formatDate
  },
  data: function () {
    return {

    }
  },
  computed: {
    users () {
      return this.$store.getters['user/list']
    }
  },
  watch: {
    '$route': {
      handler: 'fetch',
      immediate: true
    }
  },
  methods: {
    async fetch () {
      await this.$store.dispatch('user/find')
    }
  }
}
</script>
