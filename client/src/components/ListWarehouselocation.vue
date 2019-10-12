<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">
          Ort
        </th>
        <th scope="col">
          Adresse
        </th>
        <th scope="col">
          Einschränkungen
        </th>
        <th
          scope="col"
          width="10%"
        >
          <i
            v-b-modal.CreateWarehouselocationModalRef
            class="fal fa-plus float-right pointer"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="warehouse in warehouses"
        :key="warehouse._id"
      >
        <td>{{ warehouse.name }}</td>
        <td>{{ warehouse.adress }}</td>
        <td>{{ warehouse.particularities }}</td>
        <td>
          <i
            class="far fa-edit float-right pointer"
            @click="openModal(warehouse._id)"
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
    warehouses () {
      return this.$store.getters['warehouse/list']
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
      await this.$store.dispatch('warehouse/find')
    },
    openModal (id) {
      this.$store.dispatch('warehouse/get', id)
      this.$bvModal.show('EditWarehouselocationModalRef')
    }
  }
}
</script>
