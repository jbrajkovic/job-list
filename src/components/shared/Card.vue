<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.card {
  margin: 40px 0;
  padding: $box-padding;
  background-color: #fff;
  border-radius: 7px;
  box-shadow: 0 9px 10px #ddd;

  @include lg {
    padding: $box-padding-desktop;
  }
}
</style>
