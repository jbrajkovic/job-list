<template>
  <Card class="job-card" :class="{ 'border-left': job.featured }">
    <img :src="imageUrl" alt="company image" />
    <div class="job-info">
      <div class="job-info-top">
        <p class="company">{{ job.company }}</p>
        <div class="badges">
          <Badge text="New!" :primary="true" />
          <Badge text="Featured" />
        </div>
      </div>

      <div class="job-info-position">
        <p>
          <strong> {{ job.position }}</strong>
        </p>
      </div>
      <div class="job-info-bottom">
        <p>{{ job.postedAt }}</p>
        <span class="middle-dot">&#183;</span>
        <p>{{ job.contract }}</p>
        <span class="middle-dot">&#183;</span>
        <p>{{ job.location }}</p>
      </div>
    </div>

    <div class="tags">
      <Tag v-for="(tag, i) in getTagList(job)" :key="i" :tag="tag" />
    </div>
  </Card>
</template>

<script>
import Card from './shared/Card'
import Badge from './Badge'
import Tag from './Tag'

import mixin from '../mixin'

export default {
  props: {
    job: Object,
  },
  components: { Card, Badge, Tag },
  computed: {
    imageUrl() {
      let path = this.job.logo
      const image = path.substring(path.lastIndexOf('/') + 1)

      return require(`../images/${image}`)
    },
  },
  mixins: [mixin],
}
</script>

<style lang="scss" scoped>
$cardImageMobile: 50px;
$cardImageDesktop: 100px;

.job-card {
  display: flex;
  flex-direction: column;
  animation: fade-in 0.3s;

  @include lg {
    flex-direction: row;
    align-items: center;
  }

  &.border-left {
    border-left: 5px solid $primary;
  }

  img {
    width: $cardImageMobile;
    margin-top: calc(((#{$cardImageMobile} / 2) + #{$box-padding}) * -1);

    @include lg {
      width: $cardImageDesktop;
      margin: 0;
    }
  }

  .job-info {
    padding-top: $box-padding;
    padding-bottom: $box-padding;
    border-bottom: 1px solid #ddd;

    @include lg {
      flex: 2;
      margin: 0 40px;
      border: none;
    }

    &-top {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      font-size: 14px;
      color: $primary;

      .company {
        margin-right: 10px;
      }

      .badges {
        display: flex;
      }
    }

    &-position {
      font-size: 18px;
      margin: 20px 0;
    }

    &-bottom {
      display: flex;
      align-items: center;
      color: $dark-grey;
      font-weight: 500;

      .middle-dot {
        margin: 0 10px;
        font-size: 20px;
      }
    }
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin: 8px 0;

    @include lg {
      flex: 2;
    }
  }
}
</style>
