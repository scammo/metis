<template>
  <div>
    <div
      v-for="box in boxes"
      :key="box.id"
      class="row pb-2 pt-2"
    >
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
                {{ box.name }}
              </router-link>
            </h2>
            <div class="grey">
              Eckernförde
            </div>
            <div class="row grey">
              <div class="col-5 font-weight-bold">
                Typ <br>
                Kistennummer <br>
                Gewicht <br>
                Typ
              </div>
              <div class="col-7">
                {{ box.kind }} <br>
                {{ box.itemnumber }} <br>
                schwer <br>
                {{ box.warehouseid }}
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
</template>

<script>
export default {
  data: function () {
    return {

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
