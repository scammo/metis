<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-around pt-4">
          <i
            v-b-modal.CreateBoxModalRef
            class="fal fa-plus float-right pointer"
          />
        </div>
      </div>
      <ListBoxes />
      <create-box-modal />
      <list-box />
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
