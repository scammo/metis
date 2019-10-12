<template>
  <div>
    <b-modal
      id="CreateBoxModalRef"
      ref="CreateBoxModalRef"
      title="Kiste Hinzufügen"
      hide-footer
    >
      <box-form
        :box="box"
        @save="create"
      />
    </b-modal>
  </div>
</template>

<script>
import feathers from '../api'
import boxForm from './DynamicFields/BoxForm'
const boxesService = feathers.service('box')

export default {
  name: 'CreateBoxModal',
  components: {
    boxForm
  },
  data: function () {
    return {
      box: {}
    }
  },
  methods: {
    async create () {
      await boxesService.create(this.box)
      await this.$bvModal.hide('CreateBoxModalRef')
    }
  }
}
</script>
