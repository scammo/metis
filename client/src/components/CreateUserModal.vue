<template>
  <div>
    <b-modal
      id="CreateUserModalRef"
      ref="CreateUserModalRef"
      title="Benutzer Hinzufügen"
      hide-footer
    >
      <div>
        <div class="pt-2">
          Vorname:
        </div>
        <div>
          <b-input v-model="user.firstname" />
        </div>
        <div class="pt-2">
          Nachname:
        </div>
        <div>
          <b-input v-model="user.lastname" />
        </div>
        <div class="pt-2">
          Email:
        </div>
        <div>
          <b-input v-model="user.email" />
        </div>
        <selectWorkgroup :box="user" />
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
import selectWorkgroup from './DynamicFields/selectWorkgroup'
const userService = feathers.service('user')

export default {
  components: {
    selectWorkgroup
  },
  data: function () {
    return {
      user: {}
    }
  },
  methods: {
    async fetch () {
      this.user = await userService.find()
    },
    async create () {
      await userService.create(this.user)
      await this.$bvModal.hide('CreateUserModalRef')
    }
  }
}
</script>
