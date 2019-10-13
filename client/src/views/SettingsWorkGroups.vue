<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>
          <i class="fad fa-users-class " />  Arbeitsfelder
        </h4>
        <div
          v-b-modal.CreateWorkgroupsModalRef
          class="pointer"
        >
          <i
            class="fad fa-plus-circle"
          /> Arbeitsfeld anlegen
        </div>
      </div>

      <div class="row">
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
