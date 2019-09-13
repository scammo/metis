<template>
  <div>
    <div class="container py-2">
      <span>Bearbeiten
        <i
          v-b-modal.EditBoxModalRef
          class="far fa-pen pointer"
        />
      </span>
      <div class="row py-4">
        <div class="col-2 float-left border">
          <img
            src="https://www.auer-packaging.com/images/products/800/Eurobeh%C3%A4lter-mit-Scharnierdeckel-AUER--ed_64-32_01.jpg"
            class="img-fluid"
          >
        </div>
        <div class="col-10 border py-2 pl-4 float-left">
          <div class="row">
            <div class="col-10">
              <h2>
                {{ box.name }}
              </h2>
              <div class="grey">
                Arbeitskreis
              </div>
              <div class="row grey">
                <div class="col-5 font-weight-bold">
                  Art <br>
                  Gewicht <br>
                  Lagerstandort
                </div>
                <div class="col-7">
                  {{ box.kind }} <br>
                  {{ box.weight }} <br>
                  {{ box.warehouseid }}
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
      <pre>{{ warehouse }}</pre>
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
  },
  computed: {
    box () {
      return this.$store.getters['box/list'][0]
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
      await this.$store.dispatch('box/find', { _id: this.$route.params.boxId }).then((res) => {
        this.$store.dispatch('warehouse/find', { _id: res.data[0].warehouseid })
      })
    }
  }
}
</script>
