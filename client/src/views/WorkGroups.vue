<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <router-link
          :to="{ name: 'warehouselocation'}"
          class="border col-6 py-2 text-center linkbackground"
        >
          <div>
            Lagerstandorte verwalten
          </div>
        </router-link>
        <router-link
          :to="{ name: 'workgroups'}"
          class="border col-6 py-2 text-center router-link-active-now linkbackground"
        >
          <div>
            Arbeitskreise verwalten
          </div>
        </router-link>
      </div>
      <div class="row px-2 pt-4 border">
        <div class="col-12">
          <ListWorkGroups />
        </div>
      </div>
    </div>
    <create-workgroups-modal />
    <edit-workgroups-modal />
  </div>
</template>
<script>

import CreateWorkgroupsModal from '../components/CreateWorkgroupsModal'
import EditWorkgroupsModal from '../components/EditWorkgroupsModal'
import ListWorkGroups from '../components/ListWorkGroups'

export default {
  components: {
    CreateWorkgroupsModal,
    EditWorkgroupsModal,
    ListWorkGroups
  }
}
</script>
