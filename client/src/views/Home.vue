<template>
  <div>
    <div class="container">
      <div class="d-flex justify-content-end pt-4">
        <span
          v-b-modal.CreateBoxModalRef
          class="pointer"
        >
          <i class="fas fa-plus-circle" /> Kiste anlegen
        </span>
      </div>
      <ListBoxes />
      <create-box-modal />
    </div>
  </div>
</template>

<script>
import CreateBoxModal from '../components/CreateBoxModal'
import ListBoxes from '../components/ListBoxes'

export default {
  components: {
    CreateBoxModal,
    ListBoxes
  }
}
</script>
