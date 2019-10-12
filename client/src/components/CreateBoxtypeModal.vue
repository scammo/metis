<template>
  <div>
    <b-modal
      id="CreateBoxtypeModalRef"
      ref="CreateBoxtypeModalRef"
      title="Lagerort Hinzufügen"
      hide-footer
    >
      <div>
        <div>
          <div class="pt-2">
            Name:
          </div>
          <div>
            <b-input v-model="boxtypeInput.name" />
          </div>
          <div class="pt-2">
            Außenmaße L x B x H:
          </div>
          <div>
            <b-input v-model="boxtypeInput.sizes" />
          </div>
          <div class="pt-2">
            Handgriffe:
          </div>
          <div>
            <b-input v-model="boxtypeInput.handgrips" />
          </div>
          <div class="pt-2">
            Artikelnummer:
          </div>
          <div>
            <b-input v-model="boxtypeInput.artNumber" />
          </div>
          <div class="pt-2">
            Bild Url:
          </div>
          <div>
            <b-input v-model="boxtypeInput.imageUrl" />
          </div>
          <div class="pt-2">
            Link zum Hersteller:
          </div>
          <div>
            <b-input v-model="boxtypeInput.producerLink" />
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
const boxtypeService = feathers.service('boxtypes')

export default {
  data: function () {
    return {
      boxtype: {},
      boxtypeInput: {}
    }
  },
  methods: {
    async fetch () {
      this.warehouses = await boxtypeService.find()
    },
    async create () {
      await boxtypeService.create(this.boxtypeInput)
      await this.$bvModal.hide('CreateBoxtypeModalRef')
    }
  }
}
</script>
