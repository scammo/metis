<template>
  <div>
    <b-modal
      id="EditMaterialModalRef"
      ref="EditMaterialModalRef"
      title="Material Bearbeiten"
      hide-footer
    >
      <materialForm
        :material="material"
        @submit="save($event)"
      />
    </b-modal>
  </div>
</template>

<script>
import materialForm from './DynamicFields/MaterialForm'
export default {
  components: {
    materialForm
  },
  computed: {
    material () {
      return this.$store.getters['material/current']
    }
  },
  methods: {
    save (event) {
      this.$store.dispatch('material/patch', [event._id, event]).then((res) => {
        this.$bvModal.hide('EditMaterialModalRef')
      })
    }
  }
}
</script>
