<template>
  <div>
    <b-modal
      id="EditStoragelocationModalRef"
      ref="EditStoragelocationModalRef"
      title="Arbeitsgruppen Bearbeiten"
      hide-footer
    >
      <div>
        <div class="pt-2">
          Ort:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          Adresse:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          Besonderheiten:
        </div>
        <div>
          <b-input />
        </div>
        <div class="py-3">
          <b-button
            variant="primary"
            size="sm"
            class="float-right"
          >
            Speichern
          </b-button>
        </div>
      </div>
    </b-modal>
  </div>
</template>
