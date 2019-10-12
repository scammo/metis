<template>
  <div v-if="box">
    <div>
      Titel:
    </div>
    <div>
      <b-input
        v-model="box.name"
        type="text"
        :required="true"
      />
    </div>
    <selectWorkgroup :box="box" />
    <selectWarehouse :box="box" />
    <selectBoxtype :box="box" />
    <selectWeight :box="box" />
    <div class="pt-2">
      Kistennummer:
    </div>
    <div>
      <b-input
        v-model="box.itemnumber"
        type="number"
      />
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
  </div>
</template>

<script>
import selectWorkgroup from './selectWorkgroup'
import selectWarehouse from './selectWarehouse'
import selectBoxtype from './selectBoxtype'
import selectWeight from './selectWeight'

export default {
  name: 'BoxForm',
  components: {
    selectWorkgroup,
    selectWarehouse,
    selectBoxtype,
    selectWeight
  },
  props: {
    box: {
      type: Object,
      required: true
    }
  },
  methods: {
    save () {
      this.$emit('save', this.box)
    }
  }
}
</script>
