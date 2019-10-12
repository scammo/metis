<template>
  <div>
    <b-modal
      id="EditWorkgroupsModalRef"
      ref="EditWorkgroupsModalRef"
      title="Arbeitsgruppen Bearbeiten"
      hide-footer
    >
      <div v-if="workgroup">
        <div class="pt-2">
          Abkürzung:
        </div>
        <div>
          <b-input v-model="workgroup.name" />
        </div>
        <div class="pt-2">
          vollständiger Name:
        </div>
        <div>
          <b-input v-model="workgroup.abbreviation" />
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
    </b-modal>
  </div>
</template>

<script>

export default {
  computed: {
    workgroup () {
      return this.$store.getters['workgroups/current']
    }
  },
  methods: {
    save () {
      this.$store.dispatch('workgroups/patch', [this.workgroup._id, this.workgroup]).then((res) => {
        this.$bvModal.hide('EditWorkgroupsModalRef')
      })
    }
  }
}
</script>
