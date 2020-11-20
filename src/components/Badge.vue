<template>
  <div class="badge" :class="{ primary }">
    <span>{{ text }}</span>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    primary: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.badge {
  margin: 5px;
  padding: 7px 14px 3px;
  background-color: $distinct-grey;
  color: #fff;
  border-radius: 40px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;

  &.primary {
    background-color: $primary;
  }
}
</style>
