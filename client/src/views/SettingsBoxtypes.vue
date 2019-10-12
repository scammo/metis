<template>
  <div>
    <div class="container">
      <h4 class="mb-3">
        <i class="fad fa-boxes " />  Kistentypen
      </h4>
      <div class="row">
        <div class="col-12">
          <ListBoxtypes />
        </div>
      </div>
    </div>
    <create-boxtype-modal />
    <edit-workgroups-modal />
  </div>
</template>
<script>

import CreateBoxtypeModal from '../components/CreateBoxtypeModal'
import EditWorkgroupsModal from '../components/EditWorkgroupsModal'
import ListBoxtypes from '../components/ListBoxtypes'

export default {
  components: {
    CreateBoxtypeModal,
    EditWorkgroupsModal,
    ListBoxtypes
  }
}
</script>
