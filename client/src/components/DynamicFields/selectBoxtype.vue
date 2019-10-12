<template>
  <div>
    <div class="pt-2">
      Kisten Typ:
    </div>
    <div>
      <b-form-select
        id="inline-form-custom-select-pref"
        v-model="box.boxtypeId"
        class="mb-2 mr-sm-2 mb-sm-0"
        :value="null"
      >
        <option :value="null">
          Bitte wählen
        </option>
        <template v-for="boxtype in boxtypes">
          <option
            :key="boxtype._id"
            :value="boxtype._id"
            :name="boxtype.name"
          >
            {{ boxtype.artNumber }} - {{ boxtype.name }}
          </option>
        </template>
      </b-form-select>
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
  computed: {
    boxtypes () {
      return this.$store.getters['boxtypes/list']
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
      await this.$store.dispatch('boxtypes/find')
    }
  }
}

</script>
