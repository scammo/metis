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
          <i
            v-b-modal.CreateWorkgroupsModalRef
            class="fal fa-plus float-right pointer"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="workgroups in workgroup"
        :key="workgroups._id"
      >
        <td>
          {{ workgroups.name }}
        </td>
        <td>
          {{ workgroups.abbreviation }}
        </td>
        <td>
          <i
            v-b-modal.EditWorkgroupsModalRef
            class="far fa-edit float-right pointer"
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
    workgroup () {
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
    }
  }
}
</script>
