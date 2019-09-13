<template>
  <div>
    <div
      v-for="box in boxes"
      :key="box._id"
      class="row pb-2 pt-2"
    >
      <router-link
        :to="{ path: `/box/${box._id}`}"
        class="col-2 float-left border"
      >
        <img
          src="https://www.auer-packaging.com/images/products/800/Eurobeh%C3%A4lter-mit-Scharnierdeckel-AUER--ed_64-32_01.jpg"
          class="img-fluid"
        >
      </router-link>
      <div class="col-10 border py-2 pl-4 float-left">
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
                {{ box.kind }} <br>
                schwer <br>
                {{ box.warehouseid }}
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
