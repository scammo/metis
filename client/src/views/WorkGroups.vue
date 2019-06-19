<template>
  <div>
    <div class="container py-4">
      <div class="row">
        <router-link
          :to="{ name: 'warehouselocation'}"
          class="border col-6 py-2 text-center linkbackground"
        >
          <div>
            Lagerstandorte verwalten
          </div>
        </router-link>
        <router-link
          :to="{ name: 'workgroups'}"
          class="border col-6 py-2 text-center router-link-active-now linkbackground"
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
                <th
                  scope="col"
                  width="25%"
                >
                  Abkürzung
                </th>
                <th
                  scope="col"
                >
                  vollständiger Name
                </th>
                <th
                  scope="col"
                  width="10%"
                >
                  <b-button
                    v-b-modal.CreateWorkgroupsModalRef
                    class="p-0 table m-auto"
                  >
                    +
                  </b-button>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Abkürzung
                </td>
                <td>
                  vollständiger Name
                </td>
                <td>
                  <b-button
                    v-b-modal.EditWorkgroupsModalRef
                    class="p-0 table m-auto"
                  >
                    Edit
                  </b-button>
                </td>
              </tr>
              <tr>
                <td>
                  Abkürzung
                </td>
                <td>
                  vollständiger Name
                </td>
                <td>
                  <b-button
                    v-b-modal.EditWorkgroupsModalRef
                    class="p-0 table m-auto"
                  >
                    Edit
                  </b-button>
                </td>
              </tr>
              <tr>
                <td>
                  Abkürzung
                </td>
                <td>
                  vollständiger Name
                </td>
                <td>
                  <b-button
                    v-b-modal.EditWorkgroupsModalRef
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
    <create-workgroups-modal />
    <edit-workgroups-modal />
  </div>
</template>
