<template>
  <div>
    <b-modal
      id="EditBoxModalRef"
      ref="EditBoxModalRef"
      title="Kiste Hinzufügen"
      hide-footer
    >
      <box-form
        :box="box"
        @save="save"
      />
    </b-modal>
  </div>
</template>

<script>
import boxForm from './DynamicFields/BoxForm.vue'

export default {
  components: {
    boxForm
  },
  computed: {
    box () {
      return this.$store.getters['box/current']
    }
  },
  methods: {
    save () {
      this.$store.dispatch('box/patch', [this.$route.params.boxId, this.box]).then((res) => {
        this.$bvModal.hide('EditBoxModalRef')
      })
    }
  }
}
</script>
