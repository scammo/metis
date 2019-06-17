<template>
  <div>
    <b-modal
      id="EditWorkgroupsModalRef"
      ref="EditWorkgroupsModalRef"
      title="Arbeitsgruppen Bearbeiten"
      hide-footer
    >
      <div>
        <div class="pt-2">
          Abkürzung:
        </div>
        <div>
          <b-input />
        </div>
        <div class="pt-2">
          vollständiger Name:
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
