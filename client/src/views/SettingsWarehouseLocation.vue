<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h4>
          <i class="fad fa-warehouse" />  Lagerorte
        </h4>
        <div
          v-b-modal.CreateWarehouselocationModalRef
          class="pointer"
        >
          <i
            class="fad fa-plus-circle"
          /> Lager anlegen
        </div>
      </div>
      <div class="row">
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
