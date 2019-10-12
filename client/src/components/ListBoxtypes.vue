<template>
  <table class="table">
    <thead>
      <tr>
        <th
          scope="col"
          width="30px"
        />
        <th scope="col">
          Name
        </th>
        <th scope="col">
          Außenmaße L x B x H
        </th>
        <th scope="col">
          Handgriffe
        </th>
        <th scope="col">
          Artikelnummer
        </th>
        <th
          scope="col"
          width="10%"
        >
          <i
            v-b-modal.CreateBoxtypeModalRef
            class="fal fa-plus float-right pointer"
          />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(boxtype, index) in boxtypes"
        :key="boxtype._id"
      >
        <td :id="'popover-'+index">
          <img
            class="box-image-thumb"
            :src="boxtype.imageUrl"
            width="30px"
          >
        </td>
        <td>{{ boxtype.name }}</td>
        <td>{{ boxtype.sizes }}</td>
        <td>{{ boxtype.handgrips }}</td>
        <td>
          {{ boxtype.artNumber }}
          <b-popover
            :target="'popover-'+index"
            triggers="hover"
            placement="top"
          >
            <img
              class="box-image"
              :src="boxtype.imageUrl"
            >
          </b-popover>
        </td>
        <td>
          <i
            v-b-modal.EditBoxtypeModalRef
            class="far fa-edit float-right pointer"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data: function () {
    return {

    }
  },
  computed: {
    boxtypes () {
      return this.$store.getters['boxtypes/list']
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
      await this.$store.dispatch('boxtypes/find')
    }
  }
}
</script>

<style lang="scss">
  .box-image{
    width:200px;
  }
</style>
