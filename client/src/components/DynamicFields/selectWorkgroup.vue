<template>
  <div>
    <div class="pt-2">
      Arbeitsfeld:
    </div>
    <div>
      <b-form-select
        id="inline-form-custom-select-pref"
        v-model="box.workgroupId"
        class="mb-2 mr-sm-2 mb-sm-0"
        :value="null"
      >
        <option :value="null">
          Bitte wählen
        </option>
        <template v-for="workgroup in workgroups">
          <option
            :key="workgroup._id"
            :value="workgroup._id"
            :name="workgroup.name"
          >
            {{ workgroup.name }}
          </option>
        </template>
      </b-form-select>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SelectWorkgroup',
  props: {
    box: {
      type: Object,
      required: true
    }
  },
  computed: {
    workgroups () {
      return this.$store.getters['workgroups/list']
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
      await this.$store.dispatch('workgroups/find')
    }
  }
}

</script>
