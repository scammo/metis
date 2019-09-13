<template>
  <div>
    <LayoutHeader />
    <div class="py-5">
      <slot>
        <router-view />
      </slot>
    </div>
  </div>
</template>

<script>
import LayoutHeader from '@/layouts/LayoutHeader'

export default {
  components: {
    LayoutHeader
  }
}
</script>

<style>

</style>
