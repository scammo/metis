<template>
  <div class="d-flex flex-column h-100">
    <LayoutHeader />
    <div class="py-5">
      <slot>
        <router-view />
      </slot>
    </div>
    <LayoutFooter />
  </div>
</template>

<script>
import LayoutHeader from '@/layouts/LayoutHeader'
import LayoutFooter from '@/layouts/LayoutFooter'
export default {
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style>

</style>
