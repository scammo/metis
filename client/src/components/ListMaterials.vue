<template>
  <div>
    <tr
      v-for="material in materials"
      :key="material.id"
    >
      <td>{{ materials.name }}</td>
      <td>3</td>
      <td>/</td>
      <td>OekA</td>
      <td>Ja</td>
      <td>Nein</td>
      <td>bueroshop24</td>
      <td>
        <i
          v-b-modal.EditMaterialModalRef
          class="far fa-edit float-right pointer"
        />
      </td>
    </tr>
  </div>
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
