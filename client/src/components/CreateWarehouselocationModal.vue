<template>
  <div>
    <b-modal
      id="CreateWarehouselocationModalRef"
      ref="CreateWarehouselocationModalRef"
      title="Lagerort Hinzufügen"
      hide-footer
    >
      <div>
        <pre
          v-for="warehouse in warehouses.data"
          :key="warehouse._id"
        >{{ warehouse }}</pre>
        <div>
          <div class="pt-2">
            Ort:
          </div>
          <div>
            <b-input v-model="name" />
          </div>
          <div class="pt-2">
            Adresse:
          </div>
          <div>
            <b-input v-model="adress" />
          </div>
          <div class="pt-2">
            Besonderheiten:
          </div>
          <div>
            <b-input v-model="particularities" />
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
      warehouses: {}
    }
  },
  methods: {
    async fetch () {
      this.warehouses = await warehousesService.find()
    },
    async create () {
      await warehousesService.create({ name: this.name, adress: this.adress, particularities: this.particularities })
      await this.fetch()
    }
  }
}
</script>
