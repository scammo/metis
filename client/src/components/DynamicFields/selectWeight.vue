<template>
  <div>
    <div class="pt-2">
      Gewicht
    </div>
    <div>
      <b-form-select
        v-model="box.weight"
        :options="optionsGewicht"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBoxtype',
  props: {
    box: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      optionsGewicht: [
        { value: null, text: 'Bitte wählen' },
        { value: 'schwer', text: 'schwer' },
        { value: 'mittel', text: 'mittel' },
        { value: 'leicht', text: 'leicht' }
      ]
    }
  }
}
</script>
