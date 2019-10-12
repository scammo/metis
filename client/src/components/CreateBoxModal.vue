<template>
  <div>
    <b-modal
      id="CreateBoxModalRef"
      ref="CreateBoxModalRef"
      title="Kiste Hinzufügen"
      hide-footer
    >
      <div>
        <div>
          <div>
            Titel:
          </div>
          <div>
            <b-input
              v-model="boxinput.name"
              type="text"
              :required="true"
            />
          </div>
          <selectWorkgroup :box="boxinput" />
          <selectWarehouse :box="boxinput" />
          <selectBoxtype :box="boxinput" />
          <selectWeight :box="boxinput" />
          <div class="pt-2">
            Artikelnummer:
          </div>
          <div>
            <b-input
              v-model="boxinput.itemnumber"
              type="number"
            />
          </div>
          <pre>{{ boxinput }}</pre>
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
import selectWorkgroup from './DynamicFields/selectWorkgroup'
import selectWarehouse from './DynamicFields/selectWarehouse'
import selectBoxtype from './DynamicFields/selectBoxtype'
import selectWeight from './DynamicFields/selectWeight'
const boxesService = feathers.service('box')

export default {
  name: 'CreateBoxModal',
  components: {
    selectWorkgroup,
    selectWarehouse,
    selectBoxtype,
    selectWeight
  },
  data: function () {
    return {
      boxinput: {
        warehouseid: null
      },
      boxes: {}
    }
  },
  methods: {
    async create () {
      await boxesService.create(this.boxinput)
      await this.$bvModal.hide('CreateBoxModalRef')
    }
  }
}
</script>
