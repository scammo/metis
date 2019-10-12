<template>
  <div>
    <div
      v-b-modal.CreateBoxModalRef
      class="d-flex justify-content-end"
    >
      <span
        class="pointer"
      >
        <i class="fad fa-plus-circle" /> Kiste anlegen
      </span>
    </div>
    <div class="d-flex justify-content-center pb-4">
      <div class="search w-100 mb-3">
        <b-form-input
          v-model="search"
          class="text-center"
          placeholder="Wonach suchst du?"
        />
      </div>
    </div>
    <div
      v-for="box in boxes"
      :key="box._id"
      class="row pb-2 pt-2 border-bottom"
    >
      <router-link
        :to="{ path: `/box/${box._id}`}"
        class="col-2 float-left"
      >
        <img
          v-if="box.boxtype && box.boxtype.imageUrl"
          :src="box.boxtype.imageUrl"
          class="img-fluid"
        >
      </router-link>
      <div class="col-10 py-2 pl-4 float-left">
        <div class="row">
          <div class="col-10">
            <h2>
              <router-link
                :to="{ path: `/box/${box._id}`}"
                class="linknobackground"
              >
                {{ box.name }}
              </router-link>
            </h2>

            <div class="row grey">
              <div class="col-5 font-weight-bold">
                Art: <br>
                Gewicht: <br>
                Lagerstandort:
              </div>
              <div class="col-7">
                artNumber<br>
                schwer <br>
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="float-right font-weight-bold">
              <h2>#{{ box.itemnumber }}</h2>
            </div>
          </div>
        </div>
      </div>
      <pre>
        {{ boxes }}
      </pre>
    </div>
    <create-box-modal />
  </div>
</template>

<script>
import CreateBoxModal from '../components/CreateBoxModal'

export default {
  components: {
    CreateBoxModal
  },
  data: function () {
    return {
      search: null
    }
  },
  computed: {
    boxes () {
      return this.$store.getters['box/list']
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
      await this.$store.dispatch('box/find')
    }
  }
}
</script>
