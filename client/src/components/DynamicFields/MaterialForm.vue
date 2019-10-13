<template>
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
      Haltbar:
    </div>
    <div>
      <b-form-select
        v-model="material.durable"
        :options="optionsBoolean"
      />
    </div>
    <div v-if="material.durable == false">
      <div class="pt-2">
        Mindeshaltbarkeitsdatum:
      </div>
      <div>
        <b-input
          v-model="material.bestBeforeDate"
          type="date"
        />
      </div>
    </div>
    <selectWorkgroup
      :box="material"
    />
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
        :options="optionsBoolean"
      />
    </div>
    <div class="pt-2">
      Bestelllink
    </div>
    <div>
      <b-input
        v-model="material.oderlink"
        type="text"
        placeholder="https://example.com/"
      />
    </div>
    <div class="pt-2 d-none">
      Schlagwörter:
    </div>
    <div class="d-none">
      <tag-edit :tags="material.tags" />
    </div>
    <div class="py-3">
      <b-button
        variant="primary"
        size="sm"
        class="float-right"
        @click="submit()"
      >
        Speichern
      </b-button>
    </div>
  </div>
</template>

<script>
import TagEdit from '../TagEdit'
import selectWorkgroup from './selectWorkgroup'

export default {
  components: {
    selectWorkgroup,
    TagEdit
  },
  props: {
    material: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      optionsEmpfindlichkeit: [
        { value: 'notSensitive', text: 'Nicht Empfindlich' },
        { value: 'verySensitive', text: 'Sehr Empfindlich' }
      ],
      optionsBoolean: [
        { value: true, text: 'Ja' },
        { value: false, text: 'Nein' }
      ]
    }
  },
  computed: {
    box () {
      return this.$store.getters['box/current']
    }
  },
  methods: {
    submit () {
      this.$emit('submit', { ...this.material, boxId: this.box._id })
    }
  }
}

</script>
