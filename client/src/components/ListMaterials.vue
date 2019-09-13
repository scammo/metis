<template>
  <table class="table table-borderless">
    <thead>
      <tr class="border-bottom">
        <th scope="col">
          Material
        </th>
        <th scope="col">
          Anzahl
        </th>
        <th scope="col">
          MHD
        </th>
        <th scope="col">
          Arbeitskreis
        </th>
        <th scope="col">
          Verbrauch
        </th>
        <th scope="col">
          leichte Brechbarkeit
        </th>
        <th scope="col">
          Bestelllink
        </th>
        <th
          scope="col"
          width="10%"
        >
          <i
            v-b-modal.CreateMaterialModalRef
            class="fal fa-plus float-right pointer"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="material in materials"
        :key="material._id"
      >
        <td>{{ material.name }}</td>
        <td>{{ material.amount }}</td>
        <td>{{ material.BBD }}</td>
        <td>{{ material.workgroupid }}</td>
        <td>{{ material.consumtion }}</td>
        <td>{{ material.sensivity }}</td>
        <td>{{ material.oderlink }}</td>
        <td>
          <i
            v-b-modal.EditMaterialModalRef
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
    materials () {
      return this.$store.getters['material/list']
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
      await this.$store.dispatch('material/find')
    }
  }
}
</script>
