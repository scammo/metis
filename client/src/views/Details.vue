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
        <div class="col-10 border pt-2 pl-4 float-left">
          <div class="row">
            <div class="col-10">
              <h2 class="text-uppercase">
                Klappbare Big Box geschlossen
              </h2>
              <div class="grey">
                Eckernförde
              </div>
              <div class="row grey">
                <div class="col-3 font-weight-bold">
                  Titel <br>
                  Kisten Nummer <br>
                  Gewicht <br>
                  Typ
                </div>
                <div class="col-4">
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
              <div>
                <b-button
                  v-b-modal.EditBoxModalRef
                  class="p-0 table m-auto"
                >
                  Edit
                </b-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
      >
        <div class="col-12 border">
          <table class="table table-borderless">
            <thead>
              <tr>
                <th scope="col">
                  Material
                </th>
                <th scope="col">
                  Anzahl
                </th>
                <th scope="col">
                  MHD
                </th>
                <th scope="col">
                  Arbeitskreis
                </th>
                <th scope="col">
                  Verbrauch
                </th>
                <th scope="col">
                  leichte Brechbarkeit
                </th>
                <th scope="col">
                  Bestelllink
                </th>
                <th
                  scope="col"
                  width="10%"
                >
                  <i
                    v-b-modal.CreateMaterialModalRef
                    class="fal fa-plus float-right"
                  />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Kleber</td>
                <td>3</td>
                <td>/</td>
                <td>OekA</td>
                <td>Ja</td>
                <td>Nein</td>
                <td>bueroshop24</td>
                <td>
                  <i
                    v-b-modal.EditMaterialModalRef
                    class="far fa-edit float-right"
                  />
                </td>
              </tr>
              <tr>
                <td>Kleber</td>
                <td>3</td>
                <td>/</td>
                <td>OekA</td>
                <td>Ja</td>
                <td>Nein</td>
                <td>bueroshop24</td>
                <td>
                  <i
                    v-b-modal.EditMaterialModalRef
                    class="far fa-edit float-right"
                  />
                </td>
              </tr>
              <tr>
                <td>Kleber</td>
                <td>3</td>
                <td>/</td>
                <td>OekA</td>
                <td>Ja</td>
                <td>Nein</td>
                <td>bueroshop24</td>
                <td>
                  <i
                    v-b-modal.EditMaterialModalRef
                    class="far fa-edit float-right"
                  />
                </td>
              </tr>
              <tr>
                <td>Kleber</td>
                <td>3</td>
                <td>/</td>
                <td>OekA</td>
                <td>Ja</td>
                <td>Nein</td>
                <td>bueroshop24</td>
                <td>
                  <i
                    v-b-modal.EditMaterialModalRef
                    class="far fa-edit float-right"
                  />
                </td>
              </tr>
              <tr>
                <td>Kleber</td>
                <td>3</td>
                <td>/</td>
                <td>OekA</td>
                <td>Ja</td>
                <td>Nein</td>
                <td>bueroshop24</td>
                <td>
                  <i
                    v-b-modal.EditMaterialModalRef
                    class="far fa-edit float-right"
                  />
                </td>
              </tr>
            </tbody>
          </table>
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

export default {
  components: {
    EditMaterialModal,
    CreateMaterialModal,
    EditBoxModal
  }
}
</script>
