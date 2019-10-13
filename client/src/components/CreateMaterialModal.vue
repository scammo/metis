<template>
  <div>
    <b-modal
      id="CreateMaterialModalRef"
      ref="CreateMaterialModalRef"
      title="Material Hinzufügen"
      hide-footer
    >
      <materialForm
        :material="material"
        @submit="create"
      />
    </b-modal>
  </div>
</template>

<script>
import feathers from '../api'
import materialForm from './DynamicFields/MaterialForm'
const materialsService = feathers.service('material')

export default {
  components: {
    materialForm
  },
  data: function () {
    return {
      material: {}
    }
  },
  methods: {
    async create () {
      await materialsService.create(this.material)
      await this.$bvModal.hide('CreateMaterialModalRef')
      this.material = {}
    }
  }
}
</script>
