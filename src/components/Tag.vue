<template>
  <div class="tag" @click="setTag(tag)">
    <span>{{ tag }}</span>
  </div>
</template>

<script>
import { mutations } from '../store'

export default {
  props: {
    tag: String,
  },
  methods: {
    setTag: mutations.setTag,
  },
}
</script>

<style lang="scss" scoped>
.tag {
  margin: 8px 16px 8px 0;
  padding: 10px 10px 7px;
  background-color: $tag-color;
  color: $primary;
  border-radius: 7px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    background-color: $primary;
    color: #fff;
    cursor: pointer;
  }
}
</style>
