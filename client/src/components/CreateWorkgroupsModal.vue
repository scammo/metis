<template>
  <div>
    <b-modal
      id="CreateWorkgroupsModalRef"
      ref="CreateWorkgroupsModalRef"
      title="Arbeitsgruppen Hinzufügen"
      hide-footer
    >
      <div>
        <div class="pt-2">
          Abkürzung:
        </div>
        <div>
          <b-input v-model="workgroupsinput.name" />
        </div>
        <div class="pt-2">
          vollständiger Name:
        </div>
        <div>
          <b-input v-model="workgroupsinput.abbreviation" />
        </div>
        <div class="py-3">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="create()"
          >
            Speichern
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
import feathers from '../api'
const workgroupsService = feathers.service('workgroups')

export default {
  data: function () {
    return {
      workgroups: {},
      workgroupsinput: {}
    }
  },
  methods: {
    async fetch () {
      this.workgroups = await workgroupsService.find()
    },
    async create () {
      await workgroupsService.create(this.workgroupsinput)
      await this.$bvModal.hide('CreateWorkgroupsModalRef')
    }
  }
}
</script>
