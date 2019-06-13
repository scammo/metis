<template>
  <div>
    <div class="row justify-content-md-center py-2 ">
      <router-link
        :to="{ name: 'details'}"
        class="border col-1"
      >
        <div>
          <img
            src="../assets/box.png"
            class="img-fluid"
          >
        </div>
      </router-link>
      <div class="border col-6">
        <div class="float-left">
          <h2>
            KLAPPBARE BIG BOXEN GESCHLOSSEN
          </h2>
          Eckernförde<br>
          Inhalt: Wurst, Besteck, Glass<br>
          Arbeitskreis: OekA
        </div>
        <div class="float-right pt-1 font-weight-bold">
          26
        </div>
      </div>
    </div>
  </div>
</template>
