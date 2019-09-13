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
          <b-input v-model="box.name" />
        </div>
        <div class="pt-2">
          Gewicht:
        </div>
        <div>
          <b-form-select
            v-model="box.weight"
            :options="optionsGewicht"
          />
        </div>
        <div class="pt-2">
          Typ:
        </div>
        <div>
          <b-form-select
            v-model="box.typId"
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
            id="inline-form-custom-select-pref"
            v-model="box.warehouseid"
            class="mb-2 mr-sm-2 mb-sm-0"
            :value="null"
          >
            <option :value="null">
              Bitte wählen
            </option>
            <template v-for="warehouse in warehouses">
              <option
                :key="warehouse._id"
                :value="warehouse._id"
                :name="warehouse.name"
              >
                {{ warehouse.name }}
              </option>
            </template>
          </b-form-select>
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
            @click="save()"
          >
            Speichern
          </b-button>
        </div>
        <pre>{{ warehouses }}</pre>
        <pre>{{ box }}</pre>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      box: {},
      selectedGewicht: null,
      optionsGewicht: [
        { value: null, text: 'Please select an option' },
        { value: 'schwer', text: 'schwer' },
        { value: 'mittel', text: 'mittel' },
        { value: 'leicht', text: 'leicht' }
      ],
      selectedTyp: null,
      optionsTyp: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: '1' },
        { value: 'b', text: '2' },
        { value: 'c', text: '3' }
      ]
    }
  },
  computed: {
    warehouses () {
      return this.$store.getters['warehouse/list']
    }
  },
  watch: {
    '$route': {
      handler: 'fetch',
      immediate: true
    }
  },
  methods: {
    async fetch () {
      await this.$store.dispatch('warehouse/find')
      await this.$store.dispatch('box/find', { _id: this.$route.params.boxId }).then((res) => {
        this.box = this.$store.getters['box/list'][0]
      })
    },
    save () {
      this.$store.dispatch('box/patch', [this.$route.params.boxId, this.box]).then((res) => {
      })
    }
  }
}

</script>
