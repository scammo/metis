<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <router-link
          :to="{ name: 'warehouselocation'}"
          class="border col-6 py-2 text-center router-link-active-now linkbackground"
        >
          <div>
            Lagerstandorte verwalten
          </div>
        </router-link>
        <router-link
          :to="{ name: 'workgroups'}"
          class="border col-6 py-2 text-center linkbackground"
        >
          <div>
            Arbeitskreise verwalten
          </div>
        </router-link>
      </div>
      <div class="row px-2 pt-4 border">
        <div class="col-12">
          <ListWarehouselocation />
        </div>
      </div>
    </div>
    <edit-warehouselocation-modal />
    <create-warehouselocation-modal />
  </div>
</template>

<script>
import CreateWarehouselocationModal from '../components/CreateWarehouselocationModal'
import EditWarehouselocationModal from '../components/EditWarehouselocationModal'
import ListWarehouselocation from '../components/ListWarehouselocation'

export default {
  components: {
    CreateWarehouselocationModal,
    EditWarehouselocationModal,
    ListWarehouselocation
  }
}
</script>
