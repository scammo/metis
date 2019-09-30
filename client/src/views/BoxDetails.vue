<template>
  <div>
    <div class="container py-2">
      <div class="row py-4 border-bottom">
        <div class="col-2 float-left">
          <img
            v-if="box && box.boxtype && box.boxtype.imageUrl"
            :src="box.boxtype.imageUrl"
            class="img-fluid"
          >
        </div>
        <div
          v-if="box"
          class="col-10 py-2 pl-4 float-left"
        >
          <div class="row">
            <div class="col-10">
              <h2>
                {{ box.name }}
                <small><i
                  v-b-modal.EditBoxModalRef
                  class="far fa-pen pointer"
                /></small>
              </h2>
              <div class="row grey">
                <div class="col-5 font-weight-bold">
                  Art <br>
                  Gewicht <br>
                  Lagerstandort
                </div>
                <div class="col-7">
                  {{ box.kind }} <br>
                  {{ box.weight }} <br>
                  {{ box.warehouse.name }}
                </div>
              </div>
            </div>
            <div class="col-2">
              <div class="float-right font-weight-bold">
                <h2>#{{ box.itemnumber }}</h2>
              </div>
              <br>
            </div>
          </div>
        </div>
      </div>
      <div
        class="row"
      >
        <div class="col-12">
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
  },
  computed: {
    box () {
      return this.$store.getters['box/current']
    },
    warehouse () {
      return this.$store.getters['warehouse/list']
    }
  },
  watch: {
    '$route': {
      handler: 'fetch',
      immediate: true
    }
  },
  methods: {
    async fetch () {
      await this.$store.dispatch('box/get', this.$route.params.boxId)
    }
  }
}
</script>
