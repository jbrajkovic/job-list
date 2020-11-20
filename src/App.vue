<template>
  <div id="app">
    <Header />

    <div class="container" v-if="!jobsLoader">
      <transition name="fade">
        <FilterBox />
      </transition>

      <transition-group name="fade" tag="div">
        <JobCard v-for="job in filteredJobs" :key="job.id" :job="job" />
      </transition-group>
    </div>

    <div v-else class="loader">
      <Loader />
    </div>
  </div>
</template>

<script>
import FilterBox from '@/components/FilterBox'
import JobCard from '@/components/JobCard'
import Header from '@/components/Header'
import Loader from '@/components/Loader'
import { store } from './store'
import mixin from './mixin'
import axios from 'axios'

export default {
  name: 'App',
  components: { Header, FilterBox, JobCard, Loader },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      jobsLoader: true,
      jobList: [],
    }
  },
  computed: {
    filteredJobs() {
      if (!store.tags.length) return this.jobList

      return this.jobList.filter((job) => {
        const tagList = this.getTagList(job).map((job) => job.toLowerCase())

        return store.tags.every((tag) => tagList.includes(tag))
      })
    },
  },
  methods: {
    async fetchJobs(url) {
      const { data } = await axios.get(url)

      this.jobList = data

      this.jobsLoader = false
    },
  },
  created() {
    this.fetchJobs(this.baseUrl + 'data.json')
  },

  mixins: [mixin],
}
</script>

<style lang="scss">
@import './scss/main.scss';

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
