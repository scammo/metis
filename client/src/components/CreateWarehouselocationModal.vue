<template>
  <div>
    <b-modal
      id="CreateWarehouselocationModalRef"
      ref="CreateWarehouselocationModalRef"
      title="Lagerort Hinzufügen"
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
import feathers from '../api'
const warehousesService = feathers.service('warehouse')

export default {
  data: function () {
    return {
      warehouses: {},
      warehouse: {}
    }
  },
  methods: {
    async fetch () {
      this.warehouses = await warehousesService.find()
    },
    async create () {
      await warehousesService.create(this.warehouse)
      await this.$bvModal.hide('CreateWarehouselocationModalRef')
    }
  }
}
</script>
