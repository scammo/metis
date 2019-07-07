<template>
<<<<<<< HEAD
  <div class="row pb-4 pt-2">
    <router-link
      :to="{ name: 'details'}"
      class="col-2"
    >
      <img
        src="https://www.auer-packaging.com/images/products/800/Eurobeh%C3%A4lter-mit-Scharnierdeckel-AUER--ed_64-32_01.jpg"
        class="img-fluid"
      >
    </router-link>
    <div class="col-10 py-2 pl-4">
      <div class="row">
        <div class="col-10">
          <h2>
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
            <div class="col-5 font-weight-bold">
              Titel <br>
              Kistennummer <br>
              Gewicht <br>
              Typ
=======
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
>>>>>>> c8d36726ecbb28db0ed2ebe342e26d871640fe67
            </div>
            <div class="row grey">
              <div class="col-5 font-weight-bold">
                Art <br>
                Gewicht <br>
                Lagerstandort
              </div>
              <div class="col-7">
                {{ box.kind }} <br>
                schwer <br>
                {{ box.warehouseid }}
              </div>
            </div>
          </div>
          <div class="col-2">
            <div class="float-right font-weight-bold">
              {{ box.itemnumber }}
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
