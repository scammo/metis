<template>
  <table class="table">
    <thead>
      <tr>
        <th
          scope="col"
          width="25%"
        >
          Abkürzung
        </th>
        <th
          scope="col"
        >
          vollständiger Name
        </th>
        <th
          scope="col"
          width="10%"
        >
          <span
            v-b-modal.CreateWorkgroupsModalRef
            class="pointer"
          ><i
            class="fad fa-plus-circle"
          /> anlegen</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(workgroup, index) in workgroups"
        :key="index"
      >
        <td>
          {{ workgroup.name }}
        </td>
        <td>
          {{ workgroup.abbreviation }}
        </td>
        <td>
          <i
            class="d-none far fa-trash float-right pointer text-danger ml-2"
            @click="remove(workgroup._id)"
          />
          <i
            class="far fa-edit float-right pointer"
            @click="openModal(workgroup._id)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  computed: {
    workgroups () {
      return this.$store.getters['workgroups/list']
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
      await this.$store.dispatch('workgroups/find')
    },
    remove (id) {
      // löschen ist derzeit noch ein Prolem wegen der refernzen zu den boxen
      /* if (confirm('sicher?')) {
        this.$store.dispatch('workgroups/remove', id)
      } */
    },
    openModal (id) {
      this.$store.dispatch('workgroups/get', id)
      this.$bvModal.show('EditWorkgroupsModalRef')
    }
  }
}
</script>
