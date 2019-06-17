<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <router-link
          :to="{ name: 'warehouselocation'}"
          class="border col-6 py-2 text-center router-link-active-now linkbackground"
        >
          <div>
            Lagerstandorte verwalten
          </div>
        </router-link>
        <router-link
          :to="{ name: 'workgroups'}"
          class="border col-6 py-2 text-center linkbackground"
        >
          <div>
            Arbeitskreise verwalten
          </div>
        </router-link>
      </div>
      <div class="row px-2 pt-4  border">
        <div class="col-12">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  Ort
                </th>
                <th scope="col">
                  Adresse
                </th>
                <th scope="col">
                  Einschrenkungen
                </th>
                <th
                  scope="col"
                  width="10%"
                >
                  <b-button
                    v-b-modal.CreateStoragelocationModalRef
                    class="p-0 table m-auto"
                  >
                    +
                  </b-button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Eckernförde</td>
                <td>24340 Eckernförde, Musterstraße</td>
                <td>Keine Paletten</td>
                <td>
                  <b-button
                    v-b-modal.EditStoragelocationModalRef
                    class="p-0 table m-auto"
                  >
                    Edit
                  </b-button>
                </td>
              </tr>
              <tr>
                <td>Eckernförde</td>
                <td>24340 Eckernförde, Musterstraße</td>
                <td>Keine Paletten</td>
                <td>
                  <b-button
                    v-b-modal.EditStoragelocationModalRef
                    class="p-0 table m-auto"
                  >
                    Edit
                  </b-button>
                </td>
              </tr>
              <tr>
                <td>Eckernförde</td>
                <td>24340 Eckernförde, Musterstraße 4</td>
                <td>Keine Paletten</td>
                <td>
                  <b-button
                    v-b-modal.EditStoragelocationModalRef
                    class="p-0 table m-auto"
                  >
                    Edit
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <edit-storagelocation-modal />
    <create-storagelocation-modal />
  </div>
</template>

<script>
import CreateStoragelocationModal from '../components/CreateStoragelocationModal'
import EditStoragelocationModal from '../components/EditStoragelocationModal'

export default {
  components: {
    CreateStoragelocationModal,
    EditStoragelocationModal
  }
}
</script>
