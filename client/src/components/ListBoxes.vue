<template>
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
            </div>
            <div class="col-7">
              Titel <br>
              26 <br>
              schwer <br>
              Klappbare Big Box geschlossen
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
</template>
