<template>
  <div>
    <div class="container">
      <h4 class="mb-3">
        <i class="fad fa-users-class " />  Arbeitsfelder
      </h4>
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
