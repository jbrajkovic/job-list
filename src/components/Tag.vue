<template>
  <div class="tag" :class="{ active }" @click="toggleActive(tag)">
    <span>{{ tag }}</span>
  </div>
</template>

<script>
import { mutations, store } from '../store'

export default {
  props: {
    tag: String,
  },
  computed: {
    active() {
      return store.tags.includes(this.tag.toLowerCase())
    },
  },
  methods: {
    setTag: mutations.setTag,
    removeTag: mutations.removeTag,

    toggleActive(tag) {
      this.active ? this.removeTag(tag) : this.setTag(tag)
    },
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
  cursor: pointer;

  &.active {
    background-color: $primary;
    color: #fff;
  }

  //disable hover on mobile
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: $primary;
      color: #fff;
    }
  }
}
</style>
