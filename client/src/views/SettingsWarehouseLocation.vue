<template>
  <div>
    <div class="container">
      <h4 class="mb-3">
        <i class="fad fa-warehouse" />  Lagerorte
      </h4>
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
