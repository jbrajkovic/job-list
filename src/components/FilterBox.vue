<template>
  <Card class="filter-box" v-if="tagList.length">
    <div class="tags">
      <TagRemovable
        v-for="(tag, i) in tagList"
        :key="i"
        :tag="tag"
        :removable="true"
      />
    </div>
    <a class="clear-tags" href="#" @click="removeAllTags()">Clear</a>
  </Card>
</template>

<script>
import { store, mutations } from '../store'
import TagRemovable from './TagRemovable'
import Card from './shared/Card'

export default {
  components: { Card, TagRemovable },
  computed: {
    tagList() {
      return store.tags
    },
  },
  methods: {
    removeAllTags: mutations.removeAllTags,
  },
}
</script>

<style lang="scss" scoped>
.filter-box {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 76px;
  margin: 0;
  margin-top: -38px;
  padding: 10px 20px;

  .tags {
    flex: 2;
    display: flex;
    flex-wrap: wrap;
    margin-right: 10px;
    .tag-box {
      margin: 10px 10px 10px 0;
    }
  }

  .clear-tags {
    margin: 10px 0 10px 10px;
    color: $dark-grey;

    &:hover {
      color: $primary;
    }
  }
}
</style>
