<template>
  <div>
    <b-modal
      id="CreateMaterialModalRef"
      ref="CreateMaterialModalRef"
      title="Material Hinzufügen"
      hide-footer
    >
      <div>
        <div>
          <div>
            Name:
          </div>
          <div>
            <b-input
              v-model="materialinput.name"
              type="text"
            />
          </div>
          <div class="pt-2">
            Anzahl:
          </div>
          <div>
            <b-input
              v-model="materialinput.amount"
              type="number"
            />
          </div>
          <div class="pt-2">
            MHD:
          </div>
          <div>
            <b-input
              v-model="materialinput.BBD"
              type="date"
            />
          </div>
          <div class="pt-2">
            Arbeitskreis:
          </div>
          <div>
            <b-form-select
              v-model="materialinput.worktgoup"
              :options="optionsArbeitskreis"
            />
          </div>
          <div class="pt-2">
            Empfindlichkeit:
          </div>
          <div>
            <b-form-select
              v-model="materialinput.sensivity"
              :options="optionsEmpfindlichkeit"
            />
          </div>
          <div class="pt-2">
            Verbrauchsgegenstand:
          </div>
          <div>
            <b-form-select
              v-model="materialinput.consumtion"
              :options="optionsVerbrauchsgegenstand"
            />
          </div>
          <div>
            Bestelllink
          </div>
          <div>
            <b-input
              v-model="materialinput.oderlink"
              type="text"
              placeholder="https://example.com/"
            />
          </div>
          <div class="pt-2">
            Schlagwörter:
          </div>
          <div>
            <tag-edit :tags="materialinput.tags" />
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
import TagEdit from './TagEdit'
const materialsService = feathers.service('material')

export default {
  components: {
    TagEdit
  },
  data: function () {
    return {
      materialinput: {
        selectedMHD: null,
        selectedArbeitskreis: null,
        selectedVerbrauchsgegenstand: null,
        tags: []
      },
      optionsEmpfindlichkeit: [
        { value: 'a', text: 'Nicht Empfindlich' },
        { value: 'b', text: 'Sehr Empfindlich' }
      ],
      optionsMHD: [
        { value: 'a', text: 'Ja' },
        { value: 'b', text: 'Nein' }
      ],
      optionsArbeitskreis: [
        { value: 'a', text: 'Muster' },
        { value: 'b', text: 'Muster' },
        { value: 'c', text: 'Muster' },
        { value: 'd', text: 'Muster' }
      ],
      optionsVerbrauchsgegenstand: [
        { value: 'a', text: 'Ja' },
        { value: 'b', text: 'Nein' }
      ],
      materials: {}
    }
  },
  methods: {
    async fetch () {
      this.materials = await materialsService.find()
    },
    async create () {
      await materialsService.create(this.materialinput)
      await this.$bvModal.hide('CreateMaterialModalRef')
    }
  }
}
</script>
