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
      <div class="row pb-4 pt-2">
        <router-link
          :to="{ name: 'details'}"
          class="col-2 float-left border"
        >
          <img
            src="../assets/box.png"
            class="img-fluid"
          >
        </router-link>
        <div class="col-10 border py-2 pl-4 float-left">
          <div class="row">
            <div class="col-10">
              <h2 class="text-uppercase">
                <router-link
                  :to="{ name: 'details'}"
                  class="linknobackground"
                >
                  Klappbare Big Box geschlossen
                </router-link>
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
            </div>
          </div>
        </div>
      </div>
    </div>
    <create-box-modal />
  </div>
</template>

<script>
import CreateBoxModal from '../components/CreateBoxModal'

export default {
  components: {
    CreateBoxModal
  }
}
</script>
