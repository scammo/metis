<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
const defaultLayout = 'default'
export default {
  computed: {
    layout () {
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  }
}
</script>

<style lang="scss">
  html {
    overflow: -moz-scrollbars-vertical;
    overflow-y: scroll;
  }

  html, body, #app{
    height: 100%;
    margin: 0;
  }

</style>
