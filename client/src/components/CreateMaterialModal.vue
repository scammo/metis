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
          Name:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          Anzahl:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          MHD vorhanden:
        </div>
        <div>
          <b-form-select
            v-model="selectedMHD"
            :options="optionsMHD"
          />
        </div>
        <div class="pt-2">
          MHD:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          Arbeitskreis:
        </div>
        <div>
          <b-form-select
            v-model="selectedArbeitskreis"
            :options="optionsArbeitskreis"
          />
        </div>
        <div class="pt-2">
          Empfindlichkeit:
        </div>
        <div>
          <b-form-select
            v-model="selectedEmpfindlichkeit"
            :options="optionsEmpfindlichkeit"
          />
        </div>
        <div class="pt-2">
          Verbrauchsgegenstand:
        </div>
        <div>
          <b-form-select
            v-model="selectedVerbrauchsgegenstand"
            :options="optionsVerbrauchsgegenstand"
          />
        </div>
        <div class="pt-2">
          Schlagwörter:
        </div>
        <div>
          <b-input />
        </div>
        <div class="py-3">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
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
      selectedMHD: null,
      optionsMHD: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Ja' },
        { value: 'b', text: 'Nein' }
      ],
      selectedArbeitskreis: null,
      optionsArbeitskreis: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Muster' },
        { value: 'b', text: 'Muster' },
        { value: 'c', text: 'Muster' },
        { value: 'd', text: 'Muster' }
      ],
      selectedEmpfindlichkeit: null,
      optionsEmpfindlichkeit: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Nicht Empfindlich' },
        { value: 'b', text: 'Sehr Empfindlich' }
      ],
      selectedVerbrauchsgegenstand: null,
      optionsVerbrauchsgegenstand: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Ja' },
        { value: 'b', text: 'Nein' }
      ]
    }
  }
}

</script>
