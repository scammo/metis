<template>
  <div>
    <div class="pt-2">
      Lagerort:
    </div>
    <div>
      <b-form-select
        id="inline-form-custom-select-pref"
        v-model="box.warehouseId"
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
  </div>
</template>

<script>

export default {
  name: 'SelectWarehouse',
  props: {
    box: {
      type: Object,
      required: true
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
    }
  }
}

</script>
