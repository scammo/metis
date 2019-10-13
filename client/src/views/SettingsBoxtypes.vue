<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>
          <i class="fad fa-boxes" />  Kistentypen
        </h4>
        <div
          v-b-modal.CreateBoxtypeModalRef
          class="pointer"
        >
          <i
            class="fad fa-plus-circle"
          /> Kistentyp anlegen
        </div>
      </div>
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
