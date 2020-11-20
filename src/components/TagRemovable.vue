<template>
  <div class="tag-box">
    <div class="tag">
      <span>{{ tag }}</span>
    </div>
    <div class="tag removable" @click="removeTag(tag)">
      <img src="../images/icon-remove.svg" alt="remove icon" />
    </div>
  </div>
</template>

<script>
import { mutations } from '../store'

export default {
  props: {
    tag: String,
  },
  methods: {
    removeTag: mutations.removeTag,
  },
}
</script>

<style lang="scss" scoped>
.tag-box {
  display: flex;
  border-radius: 7px;
  overflow: hidden;

  .tag {
    padding: 10px 10px 7px;
    background-color: $tag-color;
    color: $primary;
    transition: all 0.3s ease;

    &.removable {
      display: flex;
      background-color: $primary;

      &:hover {
        background-color: $distinct-grey;
        color: #fff;
        cursor: pointer;
      }
    }
  }
}
</style>
