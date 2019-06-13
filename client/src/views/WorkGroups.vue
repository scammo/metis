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
              </tr>
              <tr>
                <td>
                  Abkürzung
                </td>
                <td>
                  vollständiger Name
                </td>
              </tr>
              <tr>
                <td>
                  Abkürzung
                </td>
                <td>
                  vollständiger Name
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
