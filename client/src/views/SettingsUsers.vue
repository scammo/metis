<template>
  <div class="container">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h4>
        <i class="fad fa-users" />  Benutzer
      </h4>
      <div
        v-b-modal.CreateUserModalRef
        class="pointer"
      >
        <i
          class="fad fa-plus-circle"
        /> Benutzer anlegen
      </div>
    </div>
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
            Arbeitskreis
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
          <td>
            <span v-if="user.workgroup">{{ user.workgroup.name }}</span>
          </td>
          <td>{{ user.createdAt | formatDate }}</td>
        </tr>
      </tbody>
    </table>
    <create-user-modal />
  </div>
</template>

<script>
import CreateUserModal from '../components/CreateUserModal'
import formatDate from '../filters/formatDate.js'

export default {
  components: {
    CreateUserModal
  },
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
