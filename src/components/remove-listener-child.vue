<template>
  <div>
    <button v-bind="$attrs" > Click {{$attrs.id}} times</button>
  </div>
</template>

<script>
export default {
  name: "remove-listener-child",
  inheritAttrs: false,
}
</script>

<style scoped>

</style>
