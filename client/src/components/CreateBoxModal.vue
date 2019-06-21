<template>
  <div>
    <b-modal
      id="CreateBoxModalRef"
      ref="CreateBoxModalRef"
      title="Kiste Hinzufügen"
      hide-footer
    >
      <div>
        <pre
          v-for="box in boxes.data"
          :key="box._id"
        >{{ box }}</pre>
        <div>
          <div>
            Titel:
          </div>
          <div>
            <b-input
              v-model="boxinput.name"
              type="text"
            />
          </div>
          <div class="pt-2">
            Art:
          </div>
          <div>
            <b-form-select
              v-model="boxinput.kind"
              :options="optionskind"
            />
          </div>
          <div class="pt-2">
            Artikelnummer:
          </div>
          <div>
            <b-input
              v-model="boxinput.itemnumber"
              type="text"
            />
          </div>
          <div class="pt-2">
            Lagerstandort:
          </div>
          <div>
            <b-form-select
              v-model="boxinput.warehouseid"
              :options="optionswarehouseid"
            />
          </div>
          <div class="py-3">
            <b-button
              variant="primary"
              size="sm"
              class="float-right"
              @click="create(), hide()"
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
const boxesService = feathers.service('box')

export default {
  data: function () {
    return {
      boxinput: {
        kind: null,
        warehouseid: null
      },
      optionskind: [
        { value: 'a', text: 'Typ 1' },
        { value: 'b', text: 'Typ 2' },
        { value: 'c', text: 'Typ 3' },
        { value: 'd', text: 'Typ 4' }
      ],
      optionswarehouseid: [
        { value: 'a', text: 'Ort 1' },
        { value: 'b', text: 'Ort 2' },
        { value: 'c', text: 'Ort 3' },
        { value: 'd', text: 'Ort 4' }
      ],
      boxes: {}
    }
  },
  methods: {
    async fetch () {
      this.boxes = await boxesService.find()
    },
    async create () {
      await boxesService.create(this.boxinput)
      await this.$bvModal.hide('CreateBoxModalRef')
    }
  }
}
</script>
