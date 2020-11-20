<template>
  <header>
    <img
      class="header-desktop"
      src="../images/bg-header-desktop.svg"
      alt="header-desktop"
    />
    <img
      class="header-mobile"
      src="../images/bg-header-mobile.svg"
      alt="header-mobile"
    />
  </header>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
header {
  background-color: $primary;

  .header-desktop {
    display: none;

    @include md {
      display: block;
    }
  }

  .header-mobile {
    @include md {
      display: none;
    }
  }
}
</style>
