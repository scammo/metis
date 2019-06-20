<template>
  <div>
    <b-modal
      id="CreateMaterialModalRef"
      ref="CreateMaterialModalRef"
      title="Material Hinzufügen"
      hide-footer
    >
      <div>
        <pre
          v-for="warehouse in warehouses.data"
          :key="warehouse._id"
        >{{ warehouse }}</pre>
        <div>
          <div>
            Name:
          </div>
          <div>
            <b-input
              v-model="material.name"
              type="text"
            />
          </div>
          <div class="pt-2">
            Anzahl:
          </div>
          <div>
            <b-input
              v-model="material.amount"
              type="number"
            />
          </div>
          <div class="pt-2">
            MHD:
          </div>
          <div>
            <b-input
              v-model="material.BBD"
              type="date"
            />
          </div>
          <div class="pt-2">
            Arbeitskreis:
          </div>
          <div>
            <b-form-select
              v-model="material.worktgoup"
              :options="optionsArbeitskreis"
            />
          </div>
          <div class="pt-2">
            Empfindlichkeit:
          </div>
          <div>
            <b-form-select
              v-model="material.sensivity"
              :options="optionsEmpfindlichkeit"
            />
          </div>
          <div class="pt-2">
            Verbrauchsgegenstand:
          </div>
          <div>
            <b-form-select
              v-model="material.consumtion"
              :options="optionsVerbrauchsgegenstand"
            />
          </div>
          <div>
            Bestelllink
          </div>
          <div>
            <b-input
              v-model="material.oderlink"
              type="text"
              placeholder="https://example.com/"
            />
          </div>
          <div class="pt-2">
            Schlagwörter:
          </div>
          <div>
            <tag-edit :tags="material.tags" />
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
      material: {
        selectedMHD: null,
        selectedArbeitskreis: null,
        selectedVerbrauchsgegenstand: null,
        tags: []
      },
      optionsEmpfindlichkeit: [
        { value: null, text: 'Wählen Sie eine Option aus' },
        { value: 'a', text: 'Nicht Empfindlich' },
        { value: 'b', text: 'Sehr Empfindlich' }
      ],
      optionsMHD: [
        { value: null, text: 'Wählen Sie eine Option aus' },
        { value: 'a', text: 'Ja' },
        { value: 'b', text: 'Nein' }
      ],
      optionsArbeitskreis: [
        { value: null, text: 'Wählen Sie eine Option aus' },
        { value: 'a', text: 'Muster' },
        { value: 'b', text: 'Muster' },
        { value: 'c', text: 'Muster' },
        { value: 'd', text: 'Muster' }
      ],
      optionsVerbrauchsgegenstand: [
        { value: null, text: 'Wählen Sie eine Option aus' },
        { value: 'a', text: 'Ja' },
        { value: 'b', text: 'Nein' }
      ],
      warehouses: {}
    }
  },
  methods: {
    async fetch () {
      this.warehouses = await materialsService.find()
    },
    async create () {
      await materialsService.create(this.material)
      await this.fetch()
    }
  }
}
</script>
