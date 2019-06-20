<template>
  <div>
    <input
      v-model="value"
      type="text"
      @keyup.enter="addTag"
    >
    <div class="tag-holder">
      <span
        v-for="(tag, index) in tags"
        :key="index"
        class="badge-pill badge-secondary overflow"
      >{{ tag }} <i
        class="fal fa-times"
        @click="removeTag(index)"
      /> </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    tags: {
      type: Array,
      default: () => []
    }
  },
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    addTag () {
      this.tags.push(this.value)
      this.value = ''
    },
    removeTag (index) {
      this.tags.splice(index, 1)
    }
  }
}
</script>
