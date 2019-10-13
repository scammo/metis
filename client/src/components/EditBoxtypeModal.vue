<template>
  <div>
    <b-modal
      id="EditBoxtypeModalRef"
      ref="EditBoxtypeModalRef"
      title="Kistentyp bearbeiten"
      hide-footer
    >
      <div v-if="boxtype">
        <div class="pt-2">
          Name:
        </div>
        <div>
          <b-input v-model="boxtype.name" />
        </div>
        <div class="pt-2">
          Außenmaße L x B x H:
        </div>
        <div>
          <b-input v-model="boxtype.sizes" />
        </div>
        <div class="pt-2">
          Handgriffe:
        </div>
        <div>
          <b-input v-model="boxtype.handgrips" />
        </div>
        <div class="pt-2">
          Artikelnummer:
        </div>
        <div>
          <b-input v-model="boxtype.artNumber" />
        </div>
        <div class="pt-2">
          Bild Url:
        </div>
        <div>
          <b-input v-model="boxtype.imageUrl" />
        </div>
        <div class="pt-2">
          Link zum Hersteller:
        </div>
        <div>
          <b-input v-model="boxtype.producerLink" />
        </div>
        <div class="py-3">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
            @click="create()"
          >
            Speichern
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  computed: {
    boxtype () {
      return this.$store.getters['boxtypes/current']
    }
  },
  methods: {
    save () {
      this.$store.dispatch('boxtypes/patch', [this.boxtype._id, this.boxtype]).then((res) => {
        this.$bvModal.hide('EditBoxtypeModalRef')
      })
    }
  }
}
</script>
