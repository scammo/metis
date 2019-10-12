<template>
  <div>
    <b-modal
      id="EditWarehouselocationModalRef"
      ref="EditWarehouselocationModalRef"
      title="Lagerort Bearbeiten"
      hide-footer
    >
      <div>
        <div class="pt-2">
          Ort:
        </div>
        <div>
          <b-input v-model="warehouse.name" />
        </div>
        <div class="pt-2">
          Adresse:
        </div>
        <div>
          <b-input v-model="warehouse.adress" />
        </div>
        <div class="pt-2">
          Besonderheiten:
        </div>
        <div>
          <b-input v-model="warehouse.particularities" />
        </div>
        <div class="py-3">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="create()"
          >
            Speichern
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  data () {
    return {
      warehouse: {}
    }
  },
  computed: {
    warehouswe () {
      return this.$store.getters['warehouse/get']()
    }
  },
  methods: {
    save () {
      this.$store.dispatch('warehouse/patch', [this.warehouse._id, this.warehouse]).then((res) => {
        this.$bvModal.hide('EditWarehouselocationModalRef')
      })
    }
  }
}
</script>
