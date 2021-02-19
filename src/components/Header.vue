<template>
  <header>
    <picture>
        <source media='(min-width:768px)' srcset="../images/bg-header-desktop.svg" />
        <img
          src="../images/bg-header-mobile.svg"
          alt='Header'
        />
      </picture>
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
