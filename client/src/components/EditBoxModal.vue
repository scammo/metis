<template>
  <div>
    <b-modal
      id="EditBoxModalRef"
      ref="EditBoxModalRef"
      title="Kiste Hinzufügen"
      hide-footer
    >
      <div>
        <div class="pt-2">
          Titel:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          Gewicht:
        </div>
        <div>
          <b-form-select
            v-model="selectedGewicht"
            :options="optionsGewicht"
          />
        </div>
        <div class="pt-2">
          Typ:
        </div>
        <div>
          <b-form-select
            v-model="selectedTyp"
            :options="optionsTyp"
          />
        </div>
        <div class="pt-2">
          Artikelnummer:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          Lagerort:
        </div>
        <div>
          <b-form-select
            v-model="selectedStoragelocation"
            :options="optionsStoragelocation"
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
      selectedGewicht: null,
      optionsGewicht: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'schwer' },
        { value: 'b', text: 'mittel' },
        { value: 'c', text: 'leicht' }
      ],
      selectedTyp: null,
      optionsTyp: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: '1' },
        { value: 'b', text: '2' },
        { value: 'c', text: '3' }
      ],
      selectedStoragelocation: null,
      optionsStoragelocation: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'Eckerförde' },
        { value: 'b', text: 'Eckerförde' }
      ]
    }
  }
}

</script>
