<template>
  <div>
    <p>-----rename_lifecycle-----</p>
  </div>
</template>

<script>
export default {
  name: "rename_lifecycle_child",
  props:['msg'],
  unmounted() {
    this.$parent.msg=this.$parent.msg+'--destroyed'
  },
  beforeUnmount() {
    this.$parent.msg=this.$parent.msg+'--beforeDestroy'
  }
}
</script>

<style scoped>

</style>
