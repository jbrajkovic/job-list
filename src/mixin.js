export default {
  methods: {
    getTagList(job) {
      const { role, level, languages, tools } = job
      return [role, level, ...languages, ...tools]
    },
  },
}
