<template>
  <div>
    <div class="container">
      <div class="row py-4">
        <div class="col-2 float-left border">
          <img
            src="../assets/box.png"
            class="img-fluid"
          >
        </div>
        <div class="col-10 border py-2 pl-4 float-left">
          <div class="row">
            <div class="col-10">
              <h2 class="text-uppercase">
                Klappbare Big Box geschlossen
              </h2>
              <div class="grey">
                Eckernförde
              </div>
              <div class="row grey">
                <div class="col-5 font-weight-bold">
                  Titel <br>
                  Kistennummer <br>
                  Gewicht <br>
                  Typ
                </div>
                <div class="col-7">
                  Titel <br>
                  26 <br>
                  schwer <br>
                  Klappbare Big Box geschlossen
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="float-right font-weight-bold">
                26
              </div>
              <br>
              <div class="float-right">
                <i
                  v-b-modal.EditBoxModalRef
                  class="far fa-edit float-right pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
      >
        <div class="col-12 border">
          <ListMaterials />
        </div>
      </div>
    </div>
    <edit-material-modal />
    <create-material-modal />
    <edit-box-modal />
  </div>
</template>

<script>
import EditMaterialModal from '../components/EditMaterialModal'
import CreateMaterialModal from '../components/CreateMaterialModal'
import EditBoxModal from '../components/EditBoxModal'
import ListMaterials from '../components/ListMaterials'

export default {
  components: {
    EditMaterialModal,
    CreateMaterialModal,
    EditBoxModal,
    ListMaterials
  }
}
</script>
